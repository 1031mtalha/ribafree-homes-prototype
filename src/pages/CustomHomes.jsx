// Stub — the live site's "Custom Homes" nav link is broken and its intended
// content was never defined. Kept visible so the gap is part of the review.
export default function CustomHomes() {
  return (
    <section className="page-hero" style={{ minHeight: '70vh' }}>
      <div className="container">
        <span className="eyebrow fade-up">Custom Homes</span>
        <h1 className="fade-up d1">This page needs a definition.</h1>
        <p className="lede fade-up d2" style={{ marginBottom: '2.5rem' }}>
          The live site links to “Custom Homes” but the link is broken and no
          content exists for it. Rather than invent an offering, this stub
          holds the spot until it’s defined.
        </p>
      </div>
    </section>
  )
}
