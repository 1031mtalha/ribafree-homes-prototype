import { useEffect } from 'react'

// Full-screen image viewer. `image` is a photos.js image ref
// ({ src480, src960, src1280?, w, h, alt }). Pass onPrev/onNext to show
// navigation arrows (and enable arrow-key navigation) through a set.
export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && onPrev) onPrev()
      else if (e.key === 'ArrowRight' && onNext) onNext()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onPrev, onNext])

  if (!image) return null
  const large = image.src1280 ?? image.src960

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={image.alt}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>

      {onPrev && (
        <button
          type="button"
          className="lightbox-nav prev"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous photo"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <img
        className="lightbox-img"
        src={large}
        srcSet={image.src1280 ? `${image.src960} 960w, ${image.src1280} 1280w` : undefined}
        sizes="90vw"
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
      />

      {onNext && (
        <button
          type="button"
          className="lightbox-nav next"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next photo"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      <p className="lightbox-caption" onClick={(e) => e.stopPropagation()}>{image.alt}</p>
    </div>
  )
}
