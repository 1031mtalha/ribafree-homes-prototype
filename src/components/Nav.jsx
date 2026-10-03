import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { images } from '../config/images'

const links = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/investors', label: 'For Investors' },
  { to: '/buyers', label: 'For Buyers' },
  { to: '/custom-homes', label: 'Custom Homes' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <img src={images.logo} alt="RibaFree Homes" className="nav-mark" />
      </Link>

      <button
        className="nav-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li className="nav-cta-group">
          <NavLink to="/contact?track=investor" className="nav-cta invest" onClick={() => setOpen(false)}>
            Investor inquiry
          </NavLink>
          <NavLink to="/contact?track=buyer" className="nav-cta" onClick={() => setOpen(false)}>
            Buyer inquiry
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
