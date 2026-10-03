import { Link } from 'react-router-dom'

export default function ListingCard({ listing }) {
  return (
    <Link to={listing.href} className="listing-card">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
        <span className="badge">{listing.type}</span>
        <span className="badge">{listing.status}</span>
        {listing.sampleData && <span className="badge sample">Sample data</span>}
      </div>
      <h3>{listing.title}</h3>
      <p className="project-location">{listing.detail ?? listing.location}</p>
    </Link>
  )
}
