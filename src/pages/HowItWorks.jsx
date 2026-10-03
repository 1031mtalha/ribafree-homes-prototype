import { Link } from 'react-router-dom'
import { images } from '../config/images'
import { steps, comparison } from '../config/content/steps'
import Reveal from '../components/Reveal'

export default function HowItWorks() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">How it works</span>
          <h1 className="fade-up d1">A sale, not a loan.</h1>
          <p className="lede fade-up d2">
            RibaFree structures home purchases as a murabaha, a cost-plus
            sale with one fixed price, instead of an interest-bearing loan.
            Here is the whole mechanism, in plain language.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <Reveal>
              <div>
                <span className="eyebrow">Why the builder matters</span>
                <h2 style={{ marginBottom: '1.2rem' }}>Cash up front changes the deal</h2>
                <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
                  In a conventional build, the builder is paid through a
                  lender’s draw schedule, slowly and with contingencies.
                  RibaFree and its investors pay the builder in full, in cash,
                  at the start.
                </p>
                <p style={{ color: 'var(--muted)' }}>
                  That is the builder’s incentive to quote a fair price. It’s
                  also what lets RibaFree fix your total cost on day one: the
                  home’s real cost is known, not estimated.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="side-image" style={{ height: 380 }}>
                <img src={images.howItWorksSide} alt="Home under construction" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Side by side</span>
              <h2>Murabaha vs. a mortgage</h2>
            </div>
          </Reveal>
          {/* trust-critical table — intentionally not animated */}
          <div className="card" style={{ padding: 0, overflow: 'auto' }}>
            <table className="compare">
              <thead>
                <tr>
                  <th></th>
                  <th>Conventional mortgage</th>
                  <th className="rf">RibaFree (murabaha)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <td className="label">{row.label}</td>
                    <td style={{ color: 'var(--muted)' }}>{row.conventional}</td>
                    <td>{row.ribafree ?? null}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <Reveal>
          <h2>Ready to see where you fit?</h2>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/buyers" className="btn buyer">I’m a buyer</Link>
            <Link to="/investors" className="btn invest">I’m an investor</Link>
          </div>
        </Reveal>
      </div>
    </>
  )
}
