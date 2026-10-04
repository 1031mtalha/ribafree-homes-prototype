import { useRef, useState } from 'react'
import Lightbox from './Lightbox'

const CARD_WIDTH = 230
const CARD_GAP = 20
const STEP = CARD_WIDTH + CARD_GAP

export default function LotCarousel({ lots }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [lightboxLot, setLightboxLot] = useState(null)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2)
    setActive(Math.round(el.scrollLeft / STEP))
  }

  const scrollToIndex = (i) => {
    const el = trackRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(i, lots.length - 1))
    el.scrollTo({ left: clamped * STEP, behavior: 'smooth' })
  }

  return (
    <div className="lot-carousel">
      <div className="lot-carousel-track-wrap">
        <button
          type="button"
          className="lot-carousel-arrow prev"
          onClick={() => scrollToIndex(active - 1)}
          disabled={atStart}
          aria-label="Previous lot"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="lot-carousel-track" ref={trackRef} onScroll={updateEdges}>
          {lots.map((lot) => (
            <div className="lot-card" key={lot.id}>
              {lot.cover ? (
                <div className="lot-card-photo-wrap">
                  <img
                    className="lot-card-photo photo-zoomable"
                    src={lot.cover.src960}
                    srcSet={`${lot.cover.src480} 480w, ${lot.cover.src960} 960w`}
                    sizes="230px"
                    width={lot.cover.w}
                    height={lot.cover.h}
                    alt={lot.cover.alt}
                    loading="lazy"
                    onClick={() => setLightboxLot(lot)}
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

        <button
          type="button"
          className="lot-carousel-arrow next"
          onClick={() => scrollToIndex(active + 1)}
          disabled={atEnd}
          aria-label="Next lot"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="lot-carousel-dots">
        {lots.map((lot, i) => (
          <button
            key={lot.id}
            type="button"
            className={`lot-dot ${i === active ? 'active' : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${lot.lotAddress}`}
            aria-current={i === active}
          />
        ))}
      </div>

      {lightboxLot && (
        <Lightbox image={lightboxLot.cover} onClose={() => setLightboxLot(null)} />
      )}
    </div>
  )
}
