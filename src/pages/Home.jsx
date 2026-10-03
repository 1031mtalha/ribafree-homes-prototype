/*
THESIS: A working real-estate operator, not an editorial pitch deck — white
operational shell, photographic trust, and a live functional search; refuses
the warm-cream/serif "handwritten essay" look the prototype shipped with.
OWN-WORLD: White ground, near-black text, two named track accents — signal
red (investor) and forest green (buyer) — one geometric sans (Public Sans)
throughout, 10/16px rounded controls, soft elevation shadows, a floating
white search card bridging hero and content.
STORY: A visitor sees a real Texas home, searches by location/status/type,
and lands on real (or honestly sample-flagged) portfolio entries — trust
built by function, not copy.
FIRST VIEWPORT: Fixed white nav (logo, links, two CTA pills) above a
full-bleed hero photo, headline/subhead upper-left, search card anchored at
the hero's lower edge overlapping into the page below.
FORM: Brief-pinned direction (user-supplied screenshot of ribafreehomes.com)
— no concept tournament run; the reference is the committed world.
*/
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../config/images'
import { steps } from '../config/content/steps'
import { listings } from '../config/content/listings'
import Reveal from '../components/Reveal'
import TexasMap from '../components/TexasMap'
import SearchBar from '../components/SearchBar'
import ListingCard from '../components/ListingCard'

const emptyFilters = { location: '', status: '', type: '' }

export default function Home() {
  const [filters, setFilters] = useState(emptyFilters)
  const [applied, setApplied] = useState(null)

  const results = useMemo(() => {
    if (!applied) return null
    return listings.filter(
      (l) =>
        (!applied.location || l.location === applied.location) &&
        (!applied.status || l.status === applied.status) &&
        (!applied.type || l.type === applied.type)
    )
  }, [applied])

  const hasFilters = applied && (applied.location || applied.status || applied.type)

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${images.heroHome})` }}>
        <div className="hero-content">
          <span className="eyebrow fade-up">Faith-aligned homeownership</span>
          <h1 className="fade-up d1">
            Own your home. Without&nbsp;interest.
          </h1>
          <p className="lede fade-up d2">
            RibaFree Homes structures fixed-price home purchases, a murabaha
            rather than a loan. The builder is paid cash up front, your price
            is set at signing, and it never grows.
          </p>
          <div className="hero-actions fade-up d3">
            <Link to="/investors" className="btn invest">I’m an investor</Link>
            <Link to="/buyers" className="btn buyer">I want to buy a home</Link>
          </div>
        </div>
      </section>

      <div className="hero-search-wrap">
        <SearchBar value={filters} onChange={setFilters} onSubmit={() => setApplied(filters)} />
      </div>

      {results && (
        <section className="section" style={{ paddingTop: 72 }}>
          <div className="container">
            <div className="search-results-head">
              <div>
                <span className="eyebrow">Search results</span>
                <h2 style={{ fontSize: '1.6rem' }}>
                  {results.length} {results.length === 1 ? 'match' : 'matches'}
                  {hasFilters ? ' for your search' : ' across our portfolio'}
                </h2>
              </div>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setFilters(emptyFilters)
                  setApplied(null)
                }}
              >
                Clear search
              </button>
            </div>
            {results.length ? (
              <div className="grid-3">
                {results.map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            ) : (
              <p className="search-results-empty">
                No matches on file yet for that combination. Try the full{' '}
                <Link to="/investors">investor portfolio</Link>.
              </p>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
              <span className="eyebrow">Where we build</span>
              <h2>Projects across North Texas</h2>
              <p className="lede" style={{ margin: '1rem auto 0' }}>
                Hover a location, or tap it, to see each project’s status
                and figures.
              </p>
            </div>
          </Reveal>
          <TexasMap />
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
                    construction. Earn returns from real projects, not
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
                A cost-plus sale, or murabaha, in four steps. No interest, no
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
            Investor and buyer conversations are different, so tell us which
            one you’re starting.
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
