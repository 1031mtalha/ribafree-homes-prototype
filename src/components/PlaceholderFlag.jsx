// Unmissable marker for content that must come from Atif.
// Never replace one of these with invented copy.
export default function PlaceholderFlag({ note }) {
  return (
    <div className="placeholder-flag">
      <strong>Needs content from Atif</strong>
      {note && <span>{note}</span>}
    </div>
  )
}
