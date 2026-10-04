import { Link } from 'react-router-dom'
import { images } from '../config/images'
import Reveal from '../components/Reveal'

export default function Buyers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow buyer fade-up">For home buyers</span>
          <h1 className="fade-up d1">Close, but short? This is for you.</h1>
          <p className="lede fade-up d2">
            RibaFree is built for buyers who are nearly there, typically
            within $100k–$200k of affording a home, but who won’t take on
            interest to cross the gap. Honest scope: it is not a zero-down
            program.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 32 }}>
            <Reveal>
              <div className="card" style={{ borderTop: '3px solid var(--buyer)' }}>
                <span className="eyebrow buyer">Likely a fit</span>
                <ul className="checklist buyer">
                  <li>You can put roughly 30% of the home cost down today</li>
                  <li>You’re within about $100k–$200k of affording a home outright</li>
                  <li>You want one fixed total price that never grows</li>
                  <li>You won’t take on interest-bearing debt to get there</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="card" style={{ borderTop: '3px solid var(--invest)' }}>
                <span className="eyebrow">Honestly, not yet a fit</span>
                <ul className="checklist">
                  <li>You can’t yet make a ~30% down payment, and this program doesn’t replace saving</li>
                  <li>You’re looking for zero-down or low-down financing</li>
                  <li>You need to move immediately, but projects follow build and purchase timelines</li>
                </ul>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
                  If that’s you today, the How It Works page shows what to save
                  toward. The door stays open.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <Reveal>
              <div className="side-image" style={{ height: 420 }}>
                <img
                  src={images.buyersHero.src960}
                  srcSet={`${images.buyersHero.src480} 480w, ${images.buyersHero.src960} 960w, ${images.buyersHero.srcNative} ${images.buyersHero.w}w`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  width={images.buyersHero.w}
                  height={images.buyersHero.h}
                  alt={images.buyersHero.alt}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <span className="eyebrow buyer">The process</span>
                <h2 style={{ marginBottom: '1.6rem' }}>From inquiry to keys</h2>
                <ul className="checklist buyer">
                  <li>
                    <div>
                      <strong>1. Inquire.</strong> Send a buyer inquiry with your
                      target area, budget, and down payment readiness.
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>2. Financial review.</strong> The RibaFree team
                      reviews your situation and confirms the ~30% threshold.
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>3. Fixed-price agreement.</strong> Your home’s
                      total price is set at signing: a murabaha sale, not a
                      loan.
                    </div>
                  </li>
                  <li>
                    <div>
                      <strong>4. Move in, pay it down.</strong> Installments
                      against a number that never grows.
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <Reveal>
          <span className="eyebrow buyer">Next step</span>
          <h2>Tell us where you stand</h2>
          <p className="lede">
            The buyer form asks about your target area, budget, and down
            payment readiness, and it goes to the buyer track, not the
            investor pipeline.
          </p>
          <div className="hero-actions">
            <Link to="/contact?track=buyer" className="btn buyer">Buyer inquiry</Link>
          </div>
        </Reveal>
      </div>
    </>
  )
}
