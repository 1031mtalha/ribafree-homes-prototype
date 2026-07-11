// Texas project map data.
//
// COORDINATES: community/city-level only — recognizable and honest at state
// scale, but NOT street-level geocodes. Verify each before presenting as
// exact. The three Granbury addresses share the Granbury city coordinate
// with a small declared display offset so the dots don't stack.
//
// STATUSES & STATS: sample data for layout demonstration (same rule as the
// investor project cards) — real values needed from Atif before launch.
// Status vocabulary on the map: 'Completed' | 'In Progress' | 'Upcoming'

export const mapProjects = [
  {
    id: 'san-jacinto',
    name: '5707 San Jacinto Dr',
    location: 'Granbury, TX',
    status: 'Completed',
    lat: 32.442,
    lon: -97.794,
    displayOffset: { x: -10, y: 8 }, // px, de-stacks Granbury cluster
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
  {
    id: 'northview-5503',
    name: '5503 Northview Ct',
    location: 'Granbury, TX',
    status: 'In Progress',
    lat: 32.442,
    lon: -97.794,
    displayOffset: { x: 8, y: -6 },
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
  {
    id: 'northview-5505',
    name: '5505 Northview Ct',
    location: 'Granbury, TX',
    status: 'In Progress',
    lat: 32.442,
    lon: -97.794,
    displayOffset: { x: 16, y: 10 },
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
  {
    id: 'whitebluff',
    name: 'Whitebluff',
    location: 'Lake Whitney — Whitney, TX',
    status: 'Upcoming',
    lat: 32.03,
    lon: -97.4,
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
  {
    id: 'rock-creek',
    name: 'Rock Creek',
    location: 'Lake Texoma — Gordonville, TX',
    status: 'Upcoming',
    lat: 33.83,
    lon: -96.86,
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
  {
    id: 'the-retreat',
    name: 'The Retreat',
    location: 'Cleburne, TX',
    status: 'In Progress',
    lat: 32.22,
    lon: -97.45,
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
  {
    id: 'the-cliffs',
    name: 'The Cliffs',
    location: 'Possum Kingdom Lake — Graford, TX',
    status: 'Upcoming',
    lat: 32.88,
    lon: -98.47,
    approxCoords: true,
    sampleData: true,
    stats: { landCost: '$—', homeSize: '— sq ft', expectedROI: '—%' },
  },
]
