import { listingLocations, listingStatuses, listingTypes } from '../config/content/listings'

export default function SearchBar({ value, onChange, onSubmit }) {
  const update = (key) => (e) => onChange({ ...value, [key]: e.target.value })

  return (
    <form
      className="hero-search"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <div className="hero-search-field">
        <label htmlFor="search-location">Location</label>
        <select id="search-location" value={value.location} onChange={update('location')}>
          <option value="">All locations</option>
          {listingLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="hero-search-field">
        <label htmlFor="search-status">Status</label>
        <select id="search-status" value={value.status} onChange={update('status')}>
          <option value="">Any status</option>
          {listingStatuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="hero-search-field">
        <label htmlFor="search-type">Type</label>
        <select id="search-type" value={value.type} onChange={update('type')}>
          <option value="">All types</option>
          {listingTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="hero-search-submit">Search</button>
    </form>
  )
}
