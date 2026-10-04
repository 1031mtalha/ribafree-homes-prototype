# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two distinct primary audiences, deliberately not merged into one pitch:

- **Investors** — provide capital for land acquisition, distressed-property rehab, and new construction, and earn returns from those real projects rather than interest on debt.
- **Home buyers** — financially close to affording a home (commonly able to put down roughly 30%) but unwilling or unable to use interest-based conventional financing to close the gap.

## Product Purpose

RibaFree Homes structures fixed-price home purchases as a murabaha (cost-plus sale), not a loan: the builder is paid cash up front, the buyer's price is set at signing, and it never grows or compounds. The purpose is to make homeownership possible for buyers who reject riba (interest) without asking them to wait until they can pay 100% cash.

## Positioning

Not a lender and not a broker for conventional financing — RibaFree buys/holds/resells at a fixed cost-plus price using investor capital, so there is no interest, no compounding, and no rate that changes after signing. That mechanism, not marketing language, is the thing a conventional lender could not truthfully copy.

## Operating Context

- Real-world footprint is **Texas-only today** (confirmed by the user 2026-07-26). Sample/placeholder map data spans several North Texas towns and lakes (Granbury, Cleburne, Whitney, Gordonville, Graford) but only one property (Arbor Dr, Princeton, TX) is a confirmed real deal as of this writing.
- This repo (`ribafree-homes/`) is a **prototype pitching a redesign** of the live site (ribafreehomes.com, WordPress/Elementor) to the business owner, Atif — not yet the production site. Deployed for review at https://ribafree-homes.vercel.app.
- Atif personally buys, builds, or rehabs properties with builders, then holds/rents/sells (investor-track activity) — separate from the buyer-facing murabaha product, which has not yet had a confirmed completed sale.

## Capabilities and Constraints

- Never invent or imply Shariah-certification claims, audits, ROI guarantees, fees, or testimonials. The live site's FAQ shows one identical (unverified "certified by Shariah scholars") answer for all 15 questions — a known problem this prototype must not repeat.
- Missing real content is marked with a visible `PlaceholderFlag` ("Needs content from Atif") rather than a guessed value, including: phone/mailing address, Shariah-compliance answer, deposit amounts and milestone definitions (Initial/Second/Final — structure is confirmed, amounts are not), and most builder-lot statuses.
- Canonical contact email is `invest@ribafreehomes.com` (corrected 2026-07-19; the live site inconsistently shows this and `info@ribafreehomes.com`).
- Custom Homes nav destination is intentionally undefined pending Atif — do not invent content for it.
- Open, unresolved questions for Atif (surfaced verbatim in-app, not to be silently resolved): whether various builder lots are actual RibaFree deals vs. reference floor plans; whether two "Arbor Dr" addresses (Winchester Crossing vs. Princeton) are the same property; whether a builder relationship (e.g. D.R. Horton) needs disclosure.

## Photos

- Real property/lot photos come from a Drive-sourced pack the user supplies outside this repo (`~/ribafree-photo-pack/`, not committed — see `.gitignore`). `manifest.json` in that pack is the source of truth for which image goes where (`site_target`) and how it may be used (`use`); `scripts/build-photos.mjs` (`npm run photos`) reads it, strips all EXIF/GPS, and writes resized WebP files into `public/photos/` plus the generated `src/config/content/photos.js`.
- A photo whose manifest `kind` is `"rendering"` (a builder render, not a real photograph) must show a visible "Rendering" badge wherever it's used as a cover — never presented as a photo of the built home. `LotCarousel.jsx` enforces this for lot covers.
- `wc2-arbor-dr` (the Winchester Crossing lot) is deliberately left on its placeholder: the photo pack's `arbor-dr` folder has a phone photo (`Front.JPEG`) whose manifest `use` is `hold-pending-confirmation` because it may be the same house as the confirmed Arbor Dr rental, unconfirmed. Do not wire photos to `wc2-arbor-dr` until that identity question (see open questions above) is resolved by Atif.
- Two Arbor Dr interior photos in the pack (living room, primary bedroom) carry a manifest note that they look virtually staged; they're wired in (the manifest marks them `gallery`, not held), but this is an unconfirmed, undisclosed fact — see the open-questions list in `portfolio.js`.

## Brand Commitments

- Name: **RibaFree Homes**.
- Real logo asset (`public/ribafree-logo.png`, provided by the user 2026-07-19): a stencil-style "RIBA FREE" wordmark with a dove icon, and "INTEREST" set vertically inside the "I" as a deliberate hidden-message detail (riba = interest). Designed light-on-transparent for a dark background; the current light/cream theme renders it via a CSS `invert(1)` filter. No alternate dark/color source file exists yet.
- Voice: plain-language, non-salesy explanation of the mechanism (murabaha/cost-plus) rather than lending-industry marketing language.

## Evidence on Hand

- Confirmed real property: Arbor Dr, Princeton, TX — rental, $1,800/mo (tenant pays own utilities), 1,720 sq ft, 4 bed / 2.5 bath, 2-car garage, rented as of the original listing (contact used on that listing: `invest@ribafreehomes.com`, 469-833-5555).
- Unconfirmed builder-lot records (community + address only, no verified status/price/photos): Winchester Crossing (2-Story: Sabina Dr, Oakcrest Ln, Arbor Dr) and (1-Story: 1460 Hopes Lake, WildRose Way, 1611 Outpost Way); South Arbor Trails (Silent Peak); South Arbor Trails / Morning Ridge (Aspen, Elevation A).
- No buyer-program (0%-markup murabaha) sale has been confirmed completed yet — everything sold/rented so far is investor-track activity.
- Do not fabricate: testimonials, ROI figures, deposit amounts, certifications, or additional property data beyond what is listed above.

## Product Principles

1. Investor and buyer messaging must stay visually and structurally distinct — never collapse back into one undifferentiated pitch (the core problem with the live site).
2. Real, confirmed data always wins over sample/placeholder data in presentation; when only placeholder data exists, say so visibly rather than implying it's real.
3. The mechanism (murabaha/cost-plus, no compounding) is the product's actual differentiator — copy and design should keep explaining *how*, not just asserting "interest-free."
4. Never resolve an open factual question (certification, disclosure, ambiguous property identity) on Atif's behalf — surface it, don't guess it.
