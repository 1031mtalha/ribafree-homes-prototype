---
name: RibaFree Homes
description: Faith-aligned home purchase pitch site, with a white operational shell, signal-red investor track, and forest-green buyer track
colors:
  canvas: "#ffffff"
  surface-sunken: "#f3f4f2"
  line: "rgba(16, 18, 16, 0.10)"
  line-strong: "rgba(16, 18, 16, 0.22)"
  ink: "#15171a"
  ink-muted: "#5b6168"
  nav-idle: "#363a3f"
  invest: "#c23b2c"
  invest-soft: "rgba(194, 59, 44, 0.10)"
  buyer: "#1f7a4c"
  buyer-soft: "rgba(31, 122, 76, 0.10)"
typography:
  display:
    fontFamily: "Public Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Public Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Public Sans, Helvetica Neue, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "Public Sans, Helvetica Neue, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Public Sans, Helvetica Neue, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  sm: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "56px"
  xl: "96px"
components:
  button-primary-invest:
    backgroundColor: "{colors.invest}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-invest-hover:
    backgroundColor: "#a62f22"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-buyer:
    backgroundColor: "{colors.buyer}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-buyer-hover:
    backgroundColor: "#185f3c"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline-invest:
    backgroundColor: "{colors.invest-soft}"
    textColor: "{colors.invest}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline-buyer:
    backgroundColor: "{colors.buyer-soft}"
    textColor: "{colors.buyer}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "34px"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  badge-invest:
    backgroundColor: "{colors.invest-soft}"
    textColor: "{colors.invest}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  badge-buyer:
    backgroundColor: "{colors.buyer-soft}"
    textColor: "{colors.buyer}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  input-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: RibaFree Homes

## Overview

**Creative North Star: "The Operator's Storefront"**

RibaFree Homes reads like a working real-estate operator's site, not an editorial essay about one. The ground is white, the type is one geometric sans used everywhere, and the one piece of color vocabulary in the whole system is spent on telling two audiences apart: investor (signal red) and buyer (forest green). This replaced an earlier cream-background, serif-display, terracotta/sage world outright. That world is gone from the shipped code and is not a reference for new screens. The new world is brief-pinned to the live ribafreehomes.com site's own register: photographic trust (a full-bleed hero photo, not an illustration or gradient field) plus a live functional search, because the product's credibility problem is "does this look like a real operator," not "does this look tasteful."

Depth is soft and ambient (diffuse shadows, no hard borders doing the work alone), corners are gently rounded rather than sharp, and the one signature motion moment, the Texas project map, uses pulsing rings and scale transforms sparingly, confined to that single component.

**Key Characteristics:**
- White canvas, near-black text, no warm/cream undertone anywhere in the shipped CSS.
- Exactly two accent colors, each permanently bound to one audience track (never used interchangeably).
- One font family (Public Sans) for display, body, and label, with no serif and no second typeface.
- Soft elevation (ambient box-shadows) rather than borders or flat tonal layering.
- Pill-shaped buttons and nav CTAs; 10px/16px radius on everything else.
- A full-bleed photographic hero with a floating white search card overlapping its lower edge.

## Colors

The palette is almost entirely neutral; color is reserved for the investor/buyer track distinction and nothing else.

### Primary
- **Signal Red** (`#c23b2c`, token `--invest`): the investor track. Used on investor CTAs, the investor eyebrow, the investor nav pill, the hero search's submit button, status-in-progress and status-completed-but-investor-context badges, the Texas map's project dots/rings, pull-quote mark, and step-card numerals.
- **Forest Green** (`#1f7a4c`, token `--buyer`): the buyer track. Used on buyer CTAs, the buyer eyebrow, the buyer nav pill, buyer-track checklists, and the form-success state (a buyer-side action completing).

### Neutral
- **Pure White** (`#ffffff`, tokens `--bg` / `--surface`): page canvas and every card/surface background.
- **Sunken Grey** (`#f3f4f2`, token `--surface-2`): photo-placeholder fill, the one slightly-recessed surface in the system.
- **Near-Black Ink** (`#15171a`, token `--text`): primary text color, and the "solid" button background.
- **Muted Grey** (`#5b6168`, token `--muted`): secondary text, labels, captions, placeholder copy.
- **Nav Idle Grey** (`#363a3f`, token `--nav-idle`): nav link color at rest, deliberately darker than `--muted` for legibility against the translucent nav bar; it is not a general-purpose text color outside nav.
- **Hairline** (`rgba(16,18,16,0.10)`, token `--line`) and **Hairline Strong** (`rgba(16,18,16,0.22)`, token `--line-strong`): borders, dividers, table rules.

### Named Rules
**The Two-Track Rule.** Red is investor, green is buyer, always: never swapped, never used as a generic "accent" on content that isn't track-specific. This is a locked product principle (PRODUCT.md #1: investor and buyer messaging must stay visually and structurally distinct), not a stylistic preference, so it overrides any future urge to add a third accent color for a one-off need.

**The Soft-Tint Rule.** Both track colors get a `-soft` background variant (`invest-soft` / `buyer-soft`, ~10% opacity) for badges, outline buttons, and the active form-toggle state. The solid color is reserved for buttons and small marks, never a large fill.

## Typography

**Display Font:** Public Sans (with Helvetica Neue, sans-serif fallback)
**Body Font:** Public Sans (same stack)

**Character:** One geometric sans carries the entire system: headline weight (700) and body weight (400) do all the hierarchy work instead of a font pairing. This is a deliberate single-voice choice; the previous world's serif display font is fully retired.

### Hierarchy
- **Display/H1** (700, `clamp(2.2rem, 6vw, 4.4rem)`, line-height 1.1, letter-spacing -0.02em): hero headlines only.
- **Headline/H2** (700, `clamp(1.9rem, 3.4vw, 2.7rem)`, line-height 1.1): section headings.
- **Title/H3** (600, 1.3rem, line-height 1.1): card titles, FAQ summaries (FAQ summaries run larger at 1.35rem but same family/weight pattern).
- **Body** (400, 16.5px, line-height 1.65): all paragraph copy.
- **Lede** (400, 1.15rem, max-width 58ch, color `--muted`): the one subhead paragraph under a section eyebrow/headline.
- **Label/Eyebrow** (700, 0.72rem, letter-spacing 0.14em, uppercase, color `--muted` or track color): section eyebrows, field labels, badge text.

### Named Rules
**The One-Family Rule.** Every typographic role, including display, body, label, and even the Texas-map card and lot-card titles, resolves to Public Sans. No second family is introduced for "editorial" moments; that instinct belongs to the retired world.

## Layout

Content sits in a `1180px` max-width container with `32px` side padding. Sections use a flat `96px` vertical rhythm (`64px` on mobile at ≤640px), and section heads are capped at `640px` so intros stay scannable. Grids step down predictably: `grid-3`/`grid-4` collapse to two columns at ≤920px, and all multi-column grids (`grid-2/3/4`, footer, forms) collapse to one column at ≤640px. The nav is fixed (not transparent-over-hero) at `16px 40px` padding, shrinking to `10px 40px` with a drop shadow once scrolled past 40px. It sits above a hero that starts `87px` below it. Below ~1080px the nav collapses to a burger-triggered full-width dropdown.

## Elevation & Depth

Depth is soft and ambient, not structural: there is a two-step shadow scale and no tonal-layering system; surfaces that aren't elevated are flat against the white canvas with a hairline border doing the separation work instead.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 4px 16px rgba(16,18,16,0.08)`, token `--shadow`): resting elevation for cards, the lot carousel, project cards, the Texas-map popover.
- **Lifted** (`box-shadow: 0 20px 48px rgba(16,18,16,0.16)`, token `--shadow-lg`): the floating hero search card, and the hover state of listing cards (paired with a `-3px` translateY).

### Named Rules
**The Ambient-Not-Structural Rule.** Shadows read as soft light falloff, never as a hard drop-shadow or a colored glow. They signal "this surface floats above the canvas," not "this is a button you must press."

## Shapes

Two radius steps cover the whole system: `10px` (token `--radius`) for inputs, small cards, the nav burger, and `16px` (token `--radius-lg`) for larger cards, the hero search card, path cards, and photo containers. Buttons, nav CTA pills, and the form-toggle switch use full pill radius (`999px`) instead. The pill shape is reserved for clickable actions, distinguishing them from content containers at a glance. Borders are hairline-only (`1px` or `1.5px`, using `--line`/`--line-strong`), never heavier, and the one dashed stroke in the system is the Texas map's "upcoming" project marker, a cartographic convention rather than a callout device.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`), `14px 28px` padding, `0.86rem` bold label text.
- **Primary (track):** `.btn.invest` is solid signal-red with white text, hovers to a darker red (`#a62f22`); `.btn.buyer` is solid forest-green with white text, hovers to a darker green (`#185f3c`). These are the two CTA buttons used for "I'm an investor" / "I want to buy a home" style choices everywhere in the system.
- **Solid (neutral):** `.btn.solid` is near-black ink with white text, used when a CTA isn't track-specific.
- **Outline/soft:** `.btn.outline.invest` / `.btn.outline.buyer` use the `-soft` tint background with track-colored text instead of a stroke: a secondary-emphasis button, not a bordered ghost button.
- **Hover/Focus:** all buttons lift `1px` on hover (`translateY(-1px)`); track buttons also darken their fill.

### Chips / Badges
- **Style:** pill-shaped, uppercase, `0.62rem`, letter-spacing 0.18em, 1px border matching the text color, transparent-tinted background.
- **State:** `.badge.invest` / `.badge.buyer` use the track color + its soft background; `.badge.status-in-progress` and `.badge.status-completed` borrow the track colors to signal pipeline stage; `.badge.sample` reuses the investor-red family (`--flag` aliases `--invest`) specifically to flag unverified or placeholder data, never to imply the data is confirmed.

### Cards / Containers
- **Corner Style:** `16px` radius (`--radius-lg`) on nearly every card variant (card, project-card, listing-card, lot-card, path-card).
- **Background:** white surface, hairline border (`--line`).
- **Shadow Strategy:** ambient shadow at rest (see Elevation & Depth); listing cards additionally lift to the stronger shadow + `-3px` translateY on hover.
- **Internal Padding:** `34px` for the generic `.card`, `24px` for listing cards, `18-28px` for the denser lot/project card bodies.

### Inputs / Fields
- **Style:** `10px` radius, `1px` hairline border, white background, `14px 16px` padding, label set as a small uppercase caption above the field.
- **Focus:** border shifts to muted grey (`--muted`), no glow or ring.
- **Valid state:** a quiet positive signal: border tints toward the buyer green at 50% opacity once a filled, valid field loses focus-less validity (`:not(:placeholder-shown):valid`).
- **Success:** `.form-success` is a buyer-green bordered, buyer-soft-filled panel. Success is visually coded to the buyer-green family regardless of which track submitted, since the action itself (a completed inquiry) is the thing being affirmed.

### Navigation
- Fixed, white, translucent-blurred bar (`rgba(255,255,255,0.96)`, `blur(10px)`) with a hairline bottom border. It is not a transparent-over-hero bar; it sits above the hero at all scroll positions and shrinks on scroll (padding `16px→10px`, logo scales to `0.815`, a shadow appears).
- Nav links are `0.86rem` semibold, idle in nav-idle grey, darkening to near-black on hover/active.
- Two CTA pills sit at the end of the nav: a solid green "Buyer inquiry" pill and a solid red "Investor inquiry" pill. The nav itself enforces the two-track rule in miniature.
- Below 1080px, links and CTAs collapse into a full-width dropdown triggered by a bordered square burger button.

### Hero + Floating Search Card (signature pattern)
A full-bleed photographic hero (not illustration, not gradient-only) with a left-to-right dark gradient overlay for text legibility, headline/eyebrow/CTA pair upper-left in white text. A white, `16px`-radius, lifted-shadow search card (`SearchBar.jsx`) overlaps the hero's lower edge by `-64px` margin-top, bridging the photographic hero and the white content below. The card itself is three select fields plus a solid-red submit pill, collapsing to a stacked single column below 540px.

### Texas Project Map (signature component)
An SVG state outline with dotted/filled/ringed markers keyed to `--invest` red across three states (completed = filled dot, in-progress = ringed dot with pulse animation, upcoming = dashed outline) and a hover/focus popover card using the same card shadow and radius tokens as the rest of the system. This is the one place sustained motion (a 2.2s pulsing ring) is part of the system at rest, scoped to this component only.

## Do's and Don'ts

### Do:
- **Do** keep every investor-facing accent in signal red (`#c23b2c`) and every buyer-facing accent in forest green (`#1f7a4c`); this is a structural product requirement, not a palette preference.
- **Do** use the `-soft` tint variants for badges, outline buttons, and toggles; reserve the solid track color for buttons, small marks, and the map.
- **Do** use pill radius (`999px`) for anything clickable (buttons, nav CTAs, form toggle) and `16px`/`10px` for containers. The shapes should tell a user which is which without reading the text.
- **Do** use the ambient shadow pair (`--shadow` / `--shadow-lg`) for elevation; don't introduce a third shadow value without a reason tied to a new elevation tier.
- **Do** keep hero sections photographic and full-bleed with a dark gradient overlay for text legibility, consistent with the "operator, not editorial essay" thesis.

### Don't:
- **Don't** reintroduce a serif display font, cream/warm backgrounds, or terracotta/sage accents. That is the explicitly retired world, not a variant of the current one.
- **Don't** use dashed borders as a generic "needs content" callout device. The system's one dashed stroke (the Texas map's "upcoming" marker) is a cartographic convention for an unconfirmed project location, not a placeholder-flagging pattern to be reused elsewhere; unverified data is flagged with the `.badge.sample` chip instead.
- **Don't** mix the track colors on the same element or use either one as a generic decorative accent on content that isn't investor- or buyer-specific.
- **Don't** add a third named accent color; the system is built on exactly two, and a third would blur the one piece of color-coding the product actually depends on.
