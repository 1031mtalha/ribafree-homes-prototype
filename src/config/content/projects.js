// Investor project listings.
// ⚠ ALL DATA BELOW IS SAMPLE DATA for layout demonstration — replace with
// real project figures before showing to actual investors.
// Status must be one of: 'Planned' | 'In Progress' | 'Completed'
// (single consistent vocabulary — fixes the live site's mismatched tags).

export const projectStatuses = ['Planned', 'In Progress', 'Completed']

// Type is a direct restatement of each sample project's own name/category —
// not a new fact, just a structured field for filtering.
export const projectTypes = ['New Build', 'Rehab', 'Land Acquisition']

export const projects = [
  {
    id: 'project-a',
    sampleData: true,
    name: 'Sample Project: Single Family New Build',
    type: 'New Build',
    location: '[City, State]',
    status: 'In Progress',
    landCost: '$—',
    homeSize: '— sq ft',
    expectedROI: '—%',
    deposits: {
      initial: '$—',
      second: '$—',
      final: '$—',
    },
    imageKey: 'projectA',
  },
  {
    id: 'project-b',
    sampleData: true,
    name: 'Sample Project: Distressed Property Rehab',
    type: 'Rehab',
    location: '[City, State]',
    status: 'Planned',
    landCost: '$—',
    homeSize: '— sq ft',
    expectedROI: '—%',
    deposits: {
      initial: '$—',
      second: '$—',
      final: '$—',
    },
    imageKey: 'projectB',
  },
  {
    id: 'project-c',
    sampleData: true,
    name: 'Sample Project: Land Acquisition & Build',
    type: 'Land Acquisition',
    location: '[City, State]',
    status: 'Completed',
    landCost: '$—',
    homeSize: '— sq ft',
    expectedROI: '—%',
    deposits: {
      initial: '$—',
      second: '$—',
      final: '$—',
    },
    imageKey: 'projectC',
  },
]
