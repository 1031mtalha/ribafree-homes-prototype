export default function LotCarousel({ lots }) {
  return (
    <div className="lot-carousel">
      <div className="lot-carousel-track">
        {lots.map((lot) => (
          <div className="lot-card" key={lot.id}>
            {lot.cover ? (
              <div className="lot-card-photo-wrap">
                <img
                  className="lot-card-photo"
                  src={lot.cover.src960}
                  srcSet={`${lot.cover.src480} 480w, ${lot.cover.src960} 960w`}
                  sizes="230px"
                  width={lot.cover.w}
                  height={lot.cover.h}
                  alt={lot.cover.alt}
                  loading="lazy"
                />
                {lot.coverKind === 'rendering' && (
                  <span className="badge lot-card-rendering-badge">Rendering</span>
                )}
              </div>
            ) : (
              <div className="photo-placeholder lot-card-photo">Photo</div>
            )}
            <div className="lot-card-body">
              <span className="lot-card-label">{lot.community}</span>
              <div className="lot-card-title">{lot.lotAddress}</div>
              <span className="lot-card-note">Details pending from Atif</span>
            </div>
          </div>
        ))}
      </div>
      <div className="lot-carousel-dots">
        {lots.map((lot) => (
          <span className="lot-dot" key={lot.id} />
        ))}
      </div>
    </div>
  )
}
