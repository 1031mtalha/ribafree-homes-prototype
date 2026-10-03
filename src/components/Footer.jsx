import { Link } from 'react-router-dom'
import { site } from '../config/site'
import { images } from '../config/images'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={images.logo} alt="RibaFree Homes" className="footer-mark" />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '38ch' }}>
              {site.tagline}
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/investors">For Investors</Link></li>
              <li><Link to="/buyers">For Buyers</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Link to="/contact">Inquiry forms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-note">
          <span>{site.prototypeNotice}</span>
          <span>© {new Date().getFullYear()} {site.name}. Prototype build.</span>
        </div>
      </div>
    </footer>
  )
}
