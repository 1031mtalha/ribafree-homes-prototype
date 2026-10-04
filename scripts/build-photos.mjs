#!/usr/bin/env node
// Builds public/photos/** and src/config/content/photos.js from the
// read-only photo pack at ~/ribafree-photo-pack (kept outside this repo;
// see .gitignore). Re-run any time with `npm run photos` — safe to re-run,
// output is overwritten deterministically from the manifest each time.
//
// Scope rule: a manifest row is processed only if it has a non-null
// site_target AND its `use` is not "hold-pending-confirmation", "exclude",
// or a "community-set-unwired:*" value, AND its file is not in
// LOCALLY_HELD_FILES below. Everything else in the pack (community sets,
// held-pending rows, excluded rows, locally-held rows) is read but never
// written anywhere.

import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync, rmSync } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const PACK_DIR = path.join(os.homedir(), 'ribafree-photo-pack')
const MANIFEST_PATH = path.join(PACK_DIR, 'manifest.json')
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..')
const OUT_PHOTOS_DIR = path.join(REPO_ROOT, 'public', 'photos')
const OUT_DATA_PATH = path.join(REPO_ROOT, 'src', 'config', 'content', 'photos.js')

const MAX_BYTES = 300 * 1024
const WIDTHS = [480, 960, 1280]
const BASE_QUALITY = 80
const QUALITY_FLOOR = 45

// Small, stable title lookup for alt text, mirroring portfolio.js. Not
// imported directly from portfolio.js: portfolio.js imports photos.js (the
// file this script generates), so importing portfolio.js here would be
// circular on a first-ever run before photos.js exists. Keep in sync if
// titles/lotAddress change in portfolio.js.
const TITLES = {
  'arbor-dr-princeton': 'Arbor Dr',
  'wc2-sabina-dr': 'Sabina Dr',
  'wc2-oakcrest-ln': 'Oakcrest Ln',
  'wc1-hopes-lake': '1460 Hopes Lake',
  'wc1-outpost-way': '1611 Outpost Way',
  'wc1-wildrose-way': 'WildRose Way',
  'sat-morning-ridge-aspen': 'Aspen (Elevation A)',
}

const EXCLUDED_USES = new Set(['hold-pending-confirmation', 'exclude'])

// Held back here rather than in the (read-only) pack manifest: these two
// Arbor Dr interior photos carry a manifest note that they look virtually
// staged, which is an unconfirmed fact per PRODUCT.md (never present
// unconfirmed staging as the unit's real condition). See the matching
// open question in src/config/content/portfolio.js — once Atif confirms
// one way or the other, update this list accordingly.
const LOCALLY_HELD_FILES = new Set([
  'arbor-dr/living-1.webp', // "living dining.webp" — looks virtually staged
  'arbor-dr/bedroom-1.webp', // "bed-main.webp" — looks virtually staged
])

// Page-level photo slots (hero/path-card imagery), sourced from community-set
// photos the user explicitly authorized for these three uses only — every
// other community-set photo in the pack stays unprocessed. Unlike the
// property/lot pipeline above, these are matched by exact manifest `file`
// path rather than `site_target` (community-set rows have site_target: null).
// Output goes to public/photos/site/ (not a per-property folder), since
// there's no property grouping for page chrome. Alt text here is curated by
// hand (factual, generic, no community name or ownership claim) rather than
// derived from the manifest's alt_role, since these are reused as general
// site imagery, not a specific listing's photos.
const SLOTS = {
  heroHome: {
    file: 'whitewing-princeton/exterior-aerial-1.jpg',
    alt: 'Brick two-story home with landscaped yard, aerial view',
  },
  pathInvestor: {
    file: 'whitewing-princeton/amenity-1.jpg',
    alt: 'Aerial view of a residential community with a pool',
  },
  pathBuyer: {
    file: 'whitewing-princeton/backyard-1.jpg',
    alt: 'Backyard of a brick single-story home',
  },
}

function isInScope(row) {
  if (!row.site_target) return false
  if (EXCLUDED_USES.has(row.use)) return false
  if (row.use.startsWith('community-set-unwired')) return false
  if (LOCALLY_HELD_FILES.has(row.file)) return false
  return true
}

function toImageRef(p) {
  const r960 = p.refs[960] ?? p.refs[480]
  return {
    src480: p.refs[480]?.publicPath,
    src960: r960?.publicPath,
    w: r960.w,
    h: r960.h,
    alt: p.alt,
    kind: p.kind,
  }
}

// Shared by both the property/lot pipeline and the site-slot pipeline:
// auto-rotate, strip metadata, write each in-range width as WebP, stepping
// quality down only as far as needed to stay under MAX_BYTES, and asserting
// no EXIF survived. Returns { refs, bytesWritten, filesWritten }.
// `widths` defaults to the standard WIDTHS tiers (property/lot pipeline);
// the site-slot pipeline passes its own list (WIDTHS plus the source's own
// native width) without touching this default, so existing property/lot
// output is unaffected.
async function processWidths(srcPath, outDir, baseName, sourceWidth, publicDir, widths = WIDTHS) {
  const refs = {}
  let bytesWritten = 0
  let filesWritten = 0

  for (const width of widths) {
    // Preserve the original property-pipeline behavior exactly: 480/960 are
    // always attempted (withoutEnlargement caps pixels for narrower sources,
    // it never upscales), only the 1280 tier is skipped outright when the
    // source isn't wide enough. For the 1244px-wide site-slot sources this
    // already means no 1280 file is written — satisfying "never upscale,
    // no 1920 variant" — without changing behavior for existing photos. Any
    // width beyond the standard 480/960/1280 tiers (e.g. a slot's own native
    // width) is only ever passed in when it's already <= sourceWidth, so it
    // needs no extra skip condition — withoutEnlargement is still the hard
    // backstop against upscaling either way.
    if (width === 1280 && sourceWidth < 1280) continue

    const outName = `${baseName}-${width}.webp`
    const outPath = path.join(outDir, outName)

    let quality = BASE_QUALITY
    let info
    let bytes
    for (;;) {
      info = await sharp(srcPath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(outPath)
      bytes = statSync(outPath).size
      if (bytes <= MAX_BYTES || quality <= QUALITY_FLOOR) break
      quality -= 10
    }
    filesWritten++
    bytesWritten += bytes
    if (bytes > MAX_BYTES) {
      console.error(`Output still exceeds 300 KB at quality ${quality} (floor): ${publicDir}/${outName} (${Math.round(bytes / 1024)} KB)`)
      process.exit(1)
    }
    if (quality < BASE_QUALITY) {
      console.warn(`  (${publicDir}/${outName} stepped down to quality ${quality} to stay under 300 KB)`)
    }

    const outMeta = await sharp(outPath).metadata()
    if (outMeta.exif) {
      console.error(`EXIF metadata survived in ${publicDir}/${outName} — aborting.`)
      process.exit(1)
    }

    refs[width] = { publicPath: `/photos/${publicDir}/${outName}`, w: info.width, h: info.height }
  }

  return { refs, bytesWritten, filesWritten }
}

async function main() {
  if (!existsSync(MANIFEST_PATH)) {
    console.error(`Photo pack not found at ${PACK_DIR} (expected manifest.json there).`)
    process.exit(1)
  }

  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  const scoped = manifest.filter(isInScope)

  const groups = new Map()
  for (const row of scoped) {
    const id = row.site_target.id
    if (!groups.has(id)) groups.set(id, [])
    groups.get(id).push(row)
  }

  for (const id of groups.keys()) {
    if (!(id in TITLES)) {
      console.error(
        `Manifest references site_target "${id}" with no known title mapping in this ` +
          `script's TITLES table. Stopping rather than guessing a title for it — add it to ` +
          `TITLES in scripts/build-photos.mjs (and confirm the id against portfolio.js) first.`
      )
      process.exit(1)
    }
  }

  mkdirSync(OUT_PHOTOS_DIR, { recursive: true })

  const summary = []
  const dataOut = {}

  for (const [targetId, rows] of groups) {
    const title = TITLES[targetId]
    const propertyFolder = rows[0].property
    const outDir = path.join(OUT_PHOTOS_DIR, propertyFolder)
    // Clear first: role-index numbers (e.g. "living-2") shift when a row
    // drops out of scope (LOCALLY_HELD_FILES, or a manifest edit), which
    // would otherwise leave stale, no-longer-referenced files behind.
    rmSync(outDir, { recursive: true, force: true })
    mkdirSync(outDir, { recursive: true })

    const roleCounts = new Map()
    let filesOutCount = 0
    let totalBytes = 0
    const processed = []

    for (const row of rows) {
      const n = (roleCounts.get(row.role) ?? 0) + 1
      roleCounts.set(row.role, n)

      const srcPath = path.join(PACK_DIR, row.file)
      if (!existsSync(srcPath)) {
        console.error(`Missing source file referenced by manifest: ${row.file}`)
        process.exit(1)
      }

      const baseName = `${row.role}-${n}`
      const { refs, bytesWritten, filesWritten } = await processWidths(srcPath, outDir, baseName, row.width, propertyFolder)
      filesOutCount += filesWritten
      totalBytes += bytesWritten

      processed.push({
        use: row.use,
        kind: row.kind,
        role: row.role,
        alt: `${row.alt_role}, ${title}`,
        refs,
      })
    }

    const floorPlans = processed.filter((p) => p.use === 'floorplan').map(toImageRef)
    const galleryish = processed.filter((p) => p.use !== 'floorplan')
    const coverItem = galleryish.find((p) => p.use === 'cover')
    const others = galleryish.filter((p) => p.use !== 'cover')
    const orderedGallery = coverItem ? [coverItem, ...others] : others
    const gallery = orderedGallery.map(toImageRef)
    const cover = gallery[0] ?? null
    const coverKind = coverItem ? coverItem.kind : null

    dataOut[targetId] = { coverKind, cover, gallery, floorPlans }

    summary.push({
      property: propertyFolder,
      'files in': rows.length,
      'files out': filesOutCount,
      'total KB': Math.round(totalBytes / 1024),
    })
  }

  // --- site-level photo slots (hero/path cards) ---
  const siteOutDir = path.join(OUT_PHOTOS_DIR, 'site')
  rmSync(siteOutDir, { recursive: true, force: true })
  mkdirSync(siteOutDir, { recursive: true })

  const manifestByFile = new Map(manifest.map((row) => [row.file, row]))
  const sitePhotos = {}

  for (const [slot, { file, alt }] of Object.entries(SLOTS)) {
    const row = manifestByFile.get(file)
    if (!row) {
      console.error(`SLOTS["${slot}"] references "${file}", which is not in the manifest. Stopping rather than guessing.`)
      process.exit(1)
    }
    if (!row.use.startsWith('community-set-unwired')) {
      console.error(
        `SLOTS["${slot}"] expected a community-set-unwired row but "${file}" has use="${row.use}". ` +
          `Stopping — this doesn't match what was authorized.`
      )
      process.exit(1)
    }

    const srcPath = path.join(PACK_DIR, row.file)
    if (!existsSync(srcPath)) {
      console.error(`Missing source file referenced by SLOTS: ${row.file}`)
      process.exit(1)
    }

    // Slots additionally get a native-width tier (here, 1244 — the source's
    // own width) on top of the standard 480/960/1280 tiers, so the hero
    // isn't stuck upscaling its largest available file at wide viewports.
    // withoutEnlargement inside processWidths is still the hard backstop:
    // this can never exceed sourceWidth, so it's never an upscale.
    const slotWidths = [...new Set([...WIDTHS, row.width])].sort((a, b) => a - b)
    const { refs, bytesWritten, filesWritten } = await processWidths(srcPath, siteOutDir, slot, row.width, 'site', slotWidths)
    const largestWidth = Math.max(...Object.keys(refs).map(Number))
    const rLargest = refs[largestWidth]
    sitePhotos[slot] = {
      src480: refs[480]?.publicPath,
      src960: refs[960]?.publicPath,
      srcNative: refs[row.width]?.publicPath,
      w: rLargest.w,
      h: rLargest.h,
      alt,
      kind: row.kind,
    }

    summary.push({
      property: `site/${slot}`,
      'files in': 1,
      'files out': filesWritten,
      'total KB': Math.round(bytesWritten / 1024),
    })
  }

  const header =
    '// AUTO-GENERATED by scripts/build-photos.mjs — do not edit by hand.\n' +
    '// Regenerate with `npm run photos`. Source: the ribafree photo pack\n' +
    '// manifest.json (kept outside this repo at ~/ribafree-photo-pack, not\n' +
    '// committed). Each top-level key in photosByTarget is a site_target id\n' +
    '// matching an id in src/config/content/portfolio.js (heldProperties or\n' +
    '// lots). sitePhotos holds page-chrome slots (hero/path cards), keyed to\n' +
    '// the SLOTS config above and consumed by src/config/images.js. Each slot\n' +
    '// entry has src480/src960 (standard tiers) plus srcNative (the source\'s\n' +
    '// own width, never upscaled — 1244 for the current three sources).\n\n'
  const body =
    `export const photosByTarget = ${JSON.stringify(dataOut, null, 2)}\n\n` +
    `export const sitePhotos = ${JSON.stringify(sitePhotos, null, 2)}\n`
  writeFileSync(OUT_DATA_PATH, header + body)

  let missing = 0
  for (const entry of Object.values(dataOut)) {
    const allRefs = [entry.cover, ...entry.gallery, ...entry.floorPlans].filter(Boolean)
    for (const ref of allRefs) {
      for (const key of ['src480', 'src960']) {
        const publicRelative = ref[key]
        if (!publicRelative) continue
        const abs = path.join(REPO_ROOT, 'public', publicRelative.replace(/^\//, ''))
        if (!existsSync(abs)) {
          console.error(`Referenced file missing on disk: ${publicRelative}`)
          missing++
        }
      }
    }
  }
  for (const entry of Object.values(sitePhotos)) {
    for (const key of ['src480', 'src960', 'srcNative']) {
      const publicRelative = entry[key]
      if (!publicRelative) continue
      const abs = path.join(REPO_ROOT, 'public', publicRelative.replace(/^\//, ''))
      if (!existsSync(abs)) {
        console.error(`Referenced file missing on disk: ${publicRelative}`)
        missing++
      }
    }
  }
  if (missing) process.exit(1)

  console.log(`Scope: ${scoped.length} of ${manifest.length} manifest rows processed.\n`)
  console.table(summary)
  console.log(`\nWrote ${path.relative(REPO_ROOT, OUT_DATA_PATH)}`)
}

main()
