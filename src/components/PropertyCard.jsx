const statusClass = {
  Rented: 'invest',
}

export default function PropertyCard({ property }) {
  return (
    <article className="project-card">
      {property.photos?.length ? (
        <img src={property.photos[0]} alt={property.title} loading="lazy" />
      ) : (
        <div className="photo-placeholder project-card-photo">Photo</div>
      )}
      <div className="project-card-body">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className={`badge ${statusClass[property.status] ?? ''}`}>
            {property.status}
          </span>
          <span className="badge">{property.kind}</span>
        </div>
        <h3>{property.title}, {property.location}</h3>
        <p className="project-location">{property.locationNote}</p>

        <dl className="project-fields">
          <div>
            <dt>Rent</dt>
            <dd>{property.rent}{property.rentNote ? ` — ${property.rentNote}` : ''}</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>{property.size}</dd>
          </div>
          <div>
            <dt>Beds / baths</dt>
            <dd>{property.beds} / {property.baths}</dd>
          </div>
          <div>
            <dt>Garage</dt>
            <dd>{property.garage}</dd>
          </div>
        </dl>

        {property.listingContact && (
          <p className="property-listing-contact">
            Contact on original listing: {property.listingContact.email} ·{' '}
            {property.listingContact.phone}
          </p>
        )}
      </div>
    </article>
  )
}
