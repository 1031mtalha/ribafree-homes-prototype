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
          <option value="">All Locations</option>
          {listingLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="hero-search-field">
        <label htmlFor="search-status">Property Status</label>
        <select id="search-status" value={value.status} onChange={update('status')}>
          <option value="">Any</option>
          {listingStatuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="hero-search-field">
        <label htmlFor="search-type">Property Type</label>
        <select id="search-type" value={value.type} onChange={update('type')}>
          <option value="">All Types</option>
          {listingTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="hero-search-submit">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        Search
      </button>
    </form>
  )
}
