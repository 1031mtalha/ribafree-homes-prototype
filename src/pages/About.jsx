import { Link } from 'react-router-dom'
import { images } from '../config/images'
import Reveal from '../components/Reveal'
import PlaceholderFlag from '../components/PlaceholderFlag'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">About</span>
          <h1 className="fade-up d1">Homes without debt that grows.</h1>
          <p className="lede fade-up d2">
            RibaFree Homes exists to make homeownership possible without
            interest-based lending — pairing buyers who are close to
            affording a home with investors who fund real projects, through
            fixed-price sales instead of loans.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <Reveal>
              <div>
                <span className="eyebrow">The mission</span>
                <h2 style={{ marginBottom: '1.2rem' }}>What we actually do</h2>
                <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
                  We buy or build homes with investor capital, pay builders
                  cash up front, and resell each home to its buyer at one
                  fixed price paid over time. The structure is a murabaha — a
                  cost-plus sale — so nothing compounds and nothing is hidden
                  in the rate.
                </p>
                <p style={{ color: 'var(--muted)' }}>
                  Two audiences, one mechanism: investors put capital to work
                  in land, rehab, and construction; buyers who can put roughly
                  30% down cross the final gap without interest.
                </p>
                <div className="pull-quote" style={{ marginTop: '2rem' }}>
                  Communities have sought ways to build homes without debt
                  that compounds for as long as lending has existed.
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="side-image" style={{ height: 460 }}>
                <img src={images.aboutSide} alt="Residential architecture" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">The team</span>
              <h2>Who’s behind RibaFree</h2>
            </div>
          </Reveal>
          <PlaceholderFlag note="Founder story, team bios, company history, and any real credentials — pending from Atif. No claims invented here." />
        </div>
      </section>

      <div className="cta-band">
        <Reveal>
          <h2>See the mechanism for yourself</h2>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/how-it-works" className="btn">How it works</Link>
          </div>
        </Reveal>
      </div>
    </>
  )
}
