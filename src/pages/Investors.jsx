import { Link } from 'react-router-dom'
import { projects } from '../config/content/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function Investors() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow invest fade-up">For investors</span>
          <h1 className="fade-up d1">Returns without riba.</h1>
          <p className="lede fade-up d2">
            Investor capital funds land acquisition, distressed property
            rehab, and new construction. Builders are paid cash; homes are
            sold to qualified buyers at fixed prices. Returns come from real
            projects — not interest on debt.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow invest">Projects</span>
              <h2>Current & recent projects</h2>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Every project lists the same fields: location, land cost, home
                size, projected ROI, and a three-stage deposit structure —
                initial, second, final.
              </p>
            </div>
          </Reveal>

          {/* trust-critical figures — not animated */}
          <div className="grid-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <div className="placeholder-flag">
              <strong>Needs content from Atif</strong>
              <span>
                All project figures above are sample data for layout review —
                real locations, costs, sizes, ROI projections, and deposit
                amounts required before this page is shown to investors.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56 }}>
            <Reveal>
              <div>
                <span className="eyebrow invest">Deposit structure</span>
                <h2 style={{ marginBottom: '1.2rem' }}>Three clear stages</h2>
                <p style={{ color: 'var(--muted)' }}>
                  Investor participation follows a consistent three-deposit
                  schedule per project — an initial deposit to enter, a second
                  at a defined project milestone, and a final deposit at
                  completion stage. Exact amounts and milestone definitions are
                  set per project.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <ul className="checklist invest" style={{ alignSelf: 'center' }}>
                <li>Initial deposit — secures your position in the project</li>
                <li>Second deposit — due at the project’s defined milestone</li>
                <li>Final deposit — due at completion stage</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <Reveal>
          <span className="eyebrow invest">Next step</span>
          <h2>Start an investor conversation</h2>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/contact?track=investor" className="btn invest">
              Investor inquiry
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  )
}
