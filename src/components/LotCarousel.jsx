export default function LotCarousel({ lots }) {
  return (
    <div className="lot-carousel">
      <div className="lot-carousel-track">
        {lots.map((lot) => (
          <div className="lot-card" key={lot.id}>
            <div className="photo-placeholder lot-card-photo">Photo</div>
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
