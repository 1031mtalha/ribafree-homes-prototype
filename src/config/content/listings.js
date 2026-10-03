// Normalizes heldProperties + lots + projects into one searchable shape for
// the homepage property search. No new facts — each record keeps its own
// sampleData flag and original data; this just gives them a common shape
// (id, title, location, status, type, sampleData, href) to filter and list.

import { heldProperties, lots } from './portfolio'
import { projects } from './projects'

export const listings = [
  ...heldProperties.map((p) => ({
    id: p.id,
    title: `${p.title}, ${p.location}`,
    location: p.location,
    status: p.status,
    type: p.kind,
    sampleData: p.sampleData,
    detail: p.rent ? `${p.rent} rental` : null,
    href: '/investors',
  })),
  ...lots.map((l) => ({
    id: l.id,
    title: `${l.community}, ${l.lotAddress}`,
    location: l.community,
    status: 'Unconfirmed',
    type: 'Builder Lot',
    sampleData: false,
    detail: 'Details pending from Atif',
    href: '/investors',
  })),
  ...projects.map((p) => ({
    id: p.id,
    title: p.name,
    location: p.location,
    status: p.status,
    type: p.type,
    sampleData: p.sampleData,
    detail: p.expectedROI && p.expectedROI !== '—%' ? `Projected ROI ${p.expectedROI}` : null,
    href: '/investors',
  })),
]

export const listingLocations = [...new Set(listings.map((l) => l.location))]
export const listingStatuses = [...new Set(listings.map((l) => l.status))]
export const listingTypes = [...new Set(listings.map((l) => l.type))]
