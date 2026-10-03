import { useSearchParams } from 'react-router-dom'
import { images } from '../config/images'
import { site } from '../config/site'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const [params, setParams] = useSearchParams()
  const track = params.get('track') === 'investor' ? 'investor' : 'buyer'

  const setTrack = (t) => setParams({ track: t }, { replace: true })

  return (
    <section className="page-hero" style={{ paddingBottom: 96 }}>
      <div className="container">
        <span className="eyebrow fade-up">Contact</span>
        <h1 className="fade-up d1">Start the conversation.</h1>
        <p className="lede fade-up d2" style={{ marginBottom: '3rem' }}>
          Investor and buyer inquiries take different paths, so pick yours.
          Both reach {site.email}.
        </p>

        <div className="form-toggle fade-up d3">
          <button
            className={track === 'buyer' ? 'active buyer' : ''}
            onClick={() => setTrack('buyer')}
          >
            I want to buy a home
          </button>
          <button
            className={track === 'investor' ? 'active invest' : ''}
            onClick={() => setTrack('investor')}
          >
            I’m an investor
          </button>
        </div>

        <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
          <ContactForm key={track} track={track} />
          <div className="side-image" style={{ height: 420 }}>
            <img src={images.contactSide} alt="Interior" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
