import { Link } from 'react-router-dom'
import { images } from '../config/images'
import { steps } from '../config/content/steps'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${images.heroHome})` }}>
        <div className="hero-content">
          <span className="eyebrow fade-up">Faith-aligned homeownership</span>
          <h1 className="fade-up d1">
            Own your home. Without&nbsp;interest.
          </h1>
          <p className="lede fade-up d2">
            RibaFree Homes structures fixed-price home purchases — a murabaha,
            not a loan. The builder is paid cash up front, your price is set at
            signing, and it never grows.
          </p>
          <div className="hero-actions fade-up d3">
            <Link to="/investors" className="btn invest">I’m an investor</Link>
            <Link to="/buyers" className="btn buyer">I want to buy a home</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Two ways in</span>
              <h2>One mission, two paths</h2>
            </div>
          </Reveal>
          <div className="grid-2">
            <Reveal>
              <Link
                to="/investors"
                className="path-card invest"
                style={{ backgroundImage: `url(${images.pathInvestor})` }}
              >
                <div className="path-card-body">
                  <span className="eyebrow invest">For investors</span>
                  <h3>Put capital to work, without lending at interest</h3>
                  <p>
                    Fund land acquisition, distressed property rehab, and new
                    construction. Earn returns from real projects — not
                    interest on debt.
                  </p>
                  <span className="btn invest">View projects</span>
                </div>
              </Link>
            </Reveal>
            <Reveal>
              <Link
                to="/buyers"
                className="path-card buyer"
                style={{ backgroundImage: `url(${images.pathBuyer})` }}
              >
                <div className="path-card-body">
                  <span className="eyebrow buyer">For home buyers</span>
                  <h3>Close but short? There’s a path.</h3>
                  <p>
                    If you can put roughly 30% down but conventional financing
                    would force you into interest, RibaFree closes the gap at
                    one fixed price.
                  </p>
                  <span className="btn buyer">See if you qualify</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">The mechanism</span>
              <h2>How a purchase works</h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                A cost-plus sale — murabaha — in four steps. No interest, no
                compounding, no surprises.
              </p>
            </div>
          </Reveal>
          <div className="grid-4">
            {steps.map((s) => (
              <Reveal key={s.number}>
                <div className="card step-card">
                  <div className="step-number">{s.number}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 40 }}>
              <Link to="/how-it-works" className="btn">
                The full explanation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="cta-band">
        <Reveal>
          <span className="eyebrow">Get started</span>
          <h2>Which one are you?</h2>
          <p className="lede">
            Investor and buyer conversations are different — tell us which one
            you’re starting.
          </p>
          <div className="hero-actions">
            <Link to="/contact?track=investor" className="btn invest">Investor inquiry</Link>
            <Link to="/contact?track=buyer" className="btn buyer">Buyer inquiry</Link>
          </div>
        </Reveal>
      </div>
    </>
  )
}
