import { faqs } from '../config/content/faq'
import PlaceholderFlag from '../components/PlaceholderFlag'

// Every question gets its OWN answer (the live site returns one identical
// answer for all 15). Answers we can't source are flagged, never faked.
// FAQ content is trust-critical — intentionally no reveal animations here.
export default function Faq() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">FAQ</span>
          <h1 className="fade-up d1">Straight answers.</h1>
          <p className="lede fade-up d2">
            Where we don’t yet have a verified answer, we say so — you’ll see
            a flag instead of filler.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="faq-answer">
                {f.placeholder ? (
                  <PlaceholderFlag note={f.placeholderNote} />
                ) : (
                  <>
                    <p>{f.a}</p>
                    {f.partial && (
                      <div style={{ marginTop: 14 }}>
                        <PlaceholderFlag note="Partial answer — remainder needs confirmation from Atif." />
                      </div>
                    )}
                  </>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
