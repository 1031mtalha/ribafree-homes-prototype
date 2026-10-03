// Single source of truth for contact + brand details.
// Swap values here — nothing below is hardcoded in pages/components.

export const site = {
  name: 'RibaFree Homes',
  tagline: 'Faith-aligned homeownership, without interest.',

  // Corrected by Muhammad 2026-07-19: use invest@ everywhere (supersedes the
  // 2026-07-10 info@ decision). Live site inconsistently shows both.
  email: 'invest@ribafreehomes.com',

  phone: '[NEEDS CONTENT FROM ATIF]', // live site phone not confirmed
  address: '[NEEDS CONTENT FROM ATIF]',

  social: {
    // Add confirmed handles only — leave null to hide from footer.
    instagram: null,
    facebook: null,
    linkedin: null,
  },

  // Shown in the footer on every page of the prototype.
  prototypeNotice:
    'Prototype for internal review, not a live offering. Items marked "Needs content" are pending real information from Atif.',
}
