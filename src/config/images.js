// Every photo slot on the site, in one place.
// All current values are Unsplash placeholders — swap any URL for a real
// property photo (local path or CDN URL) and the site updates everywhere.

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  // Real logo, provided by Talha 2026-07-19 ("classic logo-update jul18.png").
  // Full wordmark — light-on-transparent, meant for the dark site background.
  logo: '/ribafree-logo.png',

  // Home page
  heroHome: u('photo-1512917774080-9991f1c4c750'), // dusk exterior, pool
  pathInvestor: u('photo-1541888946425-d81bb19240f5', 900), // construction site
  pathBuyer: u('photo-1568605114967-8130f3a36994', 900), // family home exterior

  // How It Works
  howItWorksSide: u('photo-1600585154340-be6161a56a0c', 1000),

  // For Investors — one per sample project card
  projectA: u('photo-1600596542815-ffad4c1539a9', 900),
  projectB: u('photo-1600607687939-ce8a6c25118c', 900),
  projectC: u('photo-1613490493576-7fde63acd811', 900),

  // For Buyers
  buyersHero: u('photo-1580587771525-78b9dba3b914', 1400),

  // About
  aboutSide: u('photo-1600047509807-ba8f99d2cdde', 1000),

  // Contact
  contactSide: u('photo-1600566753190-17f0baa2a6c3', 1000),
}
