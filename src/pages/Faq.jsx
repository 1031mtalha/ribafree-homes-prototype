import { faqs } from '../config/content/faq'

// Every question gets its OWN answer. FAQ content is trust-critical —
// intentionally no reveal animations here.
export default function Faq() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow fade-up">FAQ</span>
          <h1 className="fade-up d1">Straight answers.</h1>
          <p className="lede fade-up d2">
            Everything you need to know about financing a home with
            RibaFree.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
