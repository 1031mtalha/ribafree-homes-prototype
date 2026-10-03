// Investor-portfolio properties, pulled from the shared Drive folder
// (2026-07-19). These are PAST/CURRENT investor-track deals — Atif buying,
// building, or rehabbing land with builders, then holding/renting/selling —
// NOT buyer-program murabaha sales. No home has been confirmed sold under
// the 0%-markup buyer model yet, so none of this is buyer-program proof.
//
// heldProperties: confirmed, real. lots: builder floor-plan/photo records
// whose status/price/whether-ever-transacted is UNCONFIRMED — rendered as
// "Details pending from Atif", never a guessed value or status badge.

export const heldProperties = [
  {
    id: 'arbor-dr-princeton',
    title: 'Arbor Dr',
    location: 'Princeton, TX',
    locationNote: 'close to the new Princeton airport',
    kind: 'Rental',
    status: 'Rented',
    rent: '$1,800/mo',
    rentNote: 'tenant pays own utilities',
    size: '1,720 sq ft',
    beds: 4,
    baths: 2.5,
    garage: '2-car',
    listingContact: { email: 'invest@ribafreehomes.com', phone: '469-833-5555' },
    photos: [], // no real photos yet — gallery renders placeholders
    sampleData: false,
  },
]

export const lots = [
  { id: 'wc2-sabina-dr', community: 'Winchester Crossing (2 Story)', lotAddress: 'Sabina Dr' },
  { id: 'wc2-oakcrest-ln', community: 'Winchester Crossing (2 Story)', lotAddress: 'Oakcrest Ln' },
  { id: 'wc2-arbor-dr', community: 'Winchester Crossing (2 Story)', lotAddress: 'Arbor Dr' },
  { id: 'wc1-hopes-lake', community: 'Winchester Crossing (1 Story)', lotAddress: '1460 Hopes Lake' },
  { id: 'wc1-wildrose-way', community: 'Winchester Crossing (1 Story)', lotAddress: 'WildRose Way' },
  { id: 'wc1-outpost-way', community: 'Winchester Crossing (1 Story)', lotAddress: '1611 Outpost Way' },
  { id: 'sat-silent-peak', community: 'South Arbor Trails', lotAddress: 'Silent Peak' },
  { id: 'sat-morning-ridge-aspen', community: 'South Arbor Trails / Morning Ridge', lotAddress: 'Aspen (Elevation A)' },
]

// Surfaced verbatim on the Investors page — do not silently resolve these.
export const portfolioOpenQuestions = [
  'Which of these are actual completed/current deals (investor-track), vs. builder floor plans Atif is collecting as reference for future projects?',
  'Is "Arbor Dr" under Winchester Crossing the same property as "Arbor Dr" under South Arbor Trails (Princeton), or two different addresses that happen to share a street name?',
  "Is there a relationship with the builder (e.g. D.R. Horton) worth disclosing on the site, or should builder-sourced material (like the Construction Stages deck) be rewritten in RibaFree's own words before it's public-facing?",
]
