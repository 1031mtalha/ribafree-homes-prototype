import { useEffect, useState } from 'react'
import { mapProjects } from '../config/content/mapProjects'

// Simplified equirectangular projection tuned for Texas.
const project = (lon, lat) => ({
  x: (lon + 107.2) * 46,
  y: (36.8 - lat) * 53,
})

// Simplified Texas border, (lon, lat), clockwise from the NW panhandle corner.
const BORDER = [
  [-103.04, 36.5], [-100.0, 36.5], [-100.0, 34.56],
  [-99.62, 34.38], [-99.2, 34.21], [-98.6, 34.13], [-98.09, 34.03],
  [-97.66, 33.99], [-97.2, 33.9], [-96.9, 33.94], [-96.58, 33.77],
  [-96.28, 33.76], [-95.84, 33.86], [-95.5, 33.88], [-95.22, 33.96],
  [-94.9, 33.8], [-94.48, 33.64], [-94.04, 33.55],
  [-94.04, 31.99],
  [-93.84, 31.8], [-93.7, 31.51], [-93.6, 31.17], [-93.68, 30.92],
  [-93.7, 30.55], [-93.76, 30.33], [-93.87, 29.98], [-93.86, 29.73],
  [-94.35, 29.56], [-94.9, 29.31], [-95.4, 28.86], [-96.0, 28.6],
  [-96.45, 28.32], [-97.16, 27.83], [-97.37, 27.28], [-97.2, 26.6],
  [-97.15, 25.95],
  [-97.45, 25.88], [-97.8, 26.06], [-98.3, 26.11], [-98.8, 26.37],
  [-99.11, 26.42], [-99.45, 27.02], [-99.44, 27.6], [-100.0, 28.05],
  [-100.4, 28.58], [-100.66, 29.1], [-101.02, 29.4], [-101.44, 29.77],
  [-102.07, 29.8], [-102.32, 29.88], [-102.55, 29.75], [-102.83, 29.35],
  [-103.1, 29.06], [-103.28, 28.98], [-103.79, 29.26], [-104.14, 29.51],
  [-104.53, 29.68], [-104.9, 30.24], [-105.2, 30.6], [-105.58, 30.9],
  [-106.15, 31.4], [-106.53, 31.78], [-106.63, 31.97],
  [-103.06, 32.0], [-103.04, 36.5],
]

const TEXAS_PATH =
  BORDER.map(([lon, lat], i) => {
    const { x, y } = project(lon, lat)
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ') + ' Z'

const VIEW = { w: 640, h: 600 }

const dotPosition = (p) => {
  const { x, y } = project(p.lon, p.lat)
  return {
    x: x + (p.displayOffset?.x ?? 0),
    y: y + (p.displayOffset?.y ?? 0),
  }
}

function Dot({ p, active, reducedMotion, onEnter, onLeave, onToggle }) {
  const { x, y } = dotPosition(p)
  const status = p.status

  return (
    <g
      className={`tx-dot ${active ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${p.name}, ${p.location}, ${status}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      {/* generous invisible hit area */}
      <circle cx={x} cy={y} r={16} fill="transparent" />

      {status === 'In Progress' && (
        <circle
          className={reducedMotion ? 'tx-ring-static' : 'tx-ring-pulse'}
          cx={x}
          cy={y}
          r={7}
        />
      )}

      <circle
        className={`tx-core ${
          status === 'Completed'
            ? 'tx-completed'
            : status === 'In Progress'
              ? 'tx-in-progress'
              : 'tx-upcoming'
        }`}
        cx={x}
        cy={y}
        r={status === 'Upcoming' ? 6 : 6.5}
      />
    </g>
  )
}

export default function TexasMap() {
  const [activeId, setActiveId] = useState(null)
  const [pinnedId, setPinnedId] = useState(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const shownId = activeId ?? pinnedId
  const shown = mapProjects.find((p) => p.id === shownId)
  const pos = shown ? dotPosition(shown) : null
  // flip the card to the left of dots in the eastern half so it stays on-map
  const flip = pos ? pos.x / VIEW.w > 0.55 : false

  return (
    <div className="tx-map-wrap">
      <svg
        className="tx-map"
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Map of Texas showing RibaFree project locations"
      >
        <path className="tx-outline" d={TEXAS_PATH} />
        {mapProjects.map((p) => (
          <Dot
            key={p.id}
            p={p}
            active={shownId === p.id}
            reducedMotion={reducedMotion}
            onEnter={() => setActiveId(p.id)}
            onLeave={() => setActiveId(null)}
            onToggle={() =>
              setPinnedId((cur) => (cur === p.id ? null : p.id))
            }
          />
        ))}
      </svg>

      {shown && pos && (
        <div
          className={`tx-card ${reducedMotion ? 'instant' : ''}`}
          style={{
            left: `${(pos.x / VIEW.w) * 100}%`,
            top: `${(pos.y / VIEW.h) * 100}%`,
            transform: flip
              ? 'translate(calc(-100% - 18px), -50%)'
              : 'translate(18px, -50%)',
          }}
        >
          <span className={`badge tx-badge-${shown.status.toLowerCase().replace(' ', '-')}`}>
            {shown.status}
          </span>
          <h3>{shown.name}</h3>
          <p className="tx-card-loc">{shown.location}</p>
          <dl className="tx-card-stats">
            <div><dt>Land cost</dt><dd>{shown.stats.landCost}</dd></div>
            <div><dt>Home size</dt><dd>{shown.stats.homeSize}</dd></div>
            <div><dt>Projected ROI</dt><dd>{shown.stats.expectedROI}</dd></div>
          </dl>
          {shown.sampleData && <span className="badge sample">Sample data</span>}
        </div>
      )}

      <div className="tx-legend">
        <span><i className="tx-key tx-key-completed" /> Completed</span>
        <span><i className="tx-key tx-key-in-progress" /> In progress</span>
        <span><i className="tx-key tx-key-upcoming" /> Upcoming</span>
      </div>
    </div>
  )
}
