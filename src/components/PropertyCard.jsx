import { useState } from 'react'

const statusClass = {
  Rented: 'invest',
}

export default function PropertyCard({ property }) {
  const photos = property.photos ?? []
  const [active, setActive] = useState(0)
  const current = photos[active]

  return (
    <article className="project-card">
      {current ? (
        <>
          <img
            className="project-card-photo"
            src={current.src960}
            srcSet={`${current.src480} 480w, ${current.src960} 960w`}
            sizes="(max-width: 640px) 100vw, 380px"
            width={current.w}
            height={current.h}
            alt={current.alt}
            loading="lazy"
          />
          {photos.length > 1 && (
            <div className="property-thumbs" role="group" aria-label={`${property.title} photos`}>
              {photos.map((p, i) => (
                <button
                  key={p.src480}
                  type="button"
                  className={`property-thumb ${i === active ? 'active' : ''}`}
                  aria-pressed={i === active}
                  aria-label={p.alt}
                  onClick={() => setActive(i)}
                >
                  <img src={p.src480} alt="" width={p.w} height={p.h} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </>
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
            <dd>{property.rent}{property.rentNote ? ` (${property.rentNote})` : ''}</dd>
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
