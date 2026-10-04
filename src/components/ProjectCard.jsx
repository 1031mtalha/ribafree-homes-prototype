const statusClass = {
  Planned: 'status-planned',
  'In Progress': 'status-in-progress',
  Completed: 'status-completed',
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="photo-placeholder project-card-photo">Photo</div>
      <div className="project-card-body">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className={`badge ${statusClass[project.status] ?? ''}`}>
            {project.status}
          </span>
          {project.sampleData && <span className="badge sample">Sample data</span>}
        </div>
        <h3>{project.name}</h3>
        <p className="project-location">{project.location}</p>

        <dl className="project-fields">
          <div>
            <dt>Land cost</dt>
            <dd>{project.landCost}</dd>
          </div>
          <div>
            <dt>Home size</dt>
            <dd>{project.homeSize}</dd>
          </div>
          <div>
            <dt>Projected ROI</dt>
            <dd>{project.expectedROI}</dd>
          </div>
          <div>
            <dt>Initial deposit</dt>
            <dd>{project.deposits.initial}</dd>
          </div>
          <div>
            <dt>Second deposit</dt>
            <dd>{project.deposits.second}</dd>
          </div>
          <div>
            <dt>Final deposit</dt>
            <dd>{project.deposits.final}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
