// The murabaha / cost-plus mechanism, in plain language.
// Used on How It Works (full) and Home (teaser).

export const steps = [
  {
    number: '01',
    title: 'Buyer saves & qualifies',
    body: 'You bring roughly 30% of the home cost as a down payment. RibaFree is built for buyers who are close — typically within $100k–$200k of affording a home outright — not zero-down financing.',
  },
  {
    number: '02',
    title: 'Builder is paid cash up front',
    body: 'RibaFree and its investors pay the builder in full, in cash. That is the builder’s incentive to quote a fair price — no financing contingencies, no waiting.',
  },
  {
    number: '03',
    title: 'RibaFree sets one fixed price',
    body: 'The home is resold to you at a fixed price agreed at signing — a cost-plus sale (murabaha), not a loan. The number never grows. No interest, no compounding.',
  },
  {
    number: '04',
    title: 'You pay over time, interest-free',
    body: 'You move in and pay the fixed price down in installments. What you owe on day one is what you owe — the only thing that changes is how much of it you’ve paid.',
  },
]

// Structural comparison — kept factual, no performance claims.
export const comparison = [
  {
    label: 'What it is',
    conventional: 'A loan of money, repaid with interest',
    ribafree: 'A sale of a home at a fixed cost-plus price (murabaha)',
  },
  {
    label: 'Total cost over time',
    conventional: 'Grows with compounding interest',
    ribafree: 'Fixed at signing — never grows',
  },
  {
    label: 'Who gets paid up front',
    conventional: 'Bank funds escrow; builder paid via lender draw schedule',
    ribafree: 'Builder paid cash in full by RibaFree & investors',
  },
  {
    label: 'Late payment treatment',
    conventional: 'Penalties and interest compound',
    ribafree: null, // [NEEDS CONTENT FROM ATIF] — do not invent policy
  },
]
