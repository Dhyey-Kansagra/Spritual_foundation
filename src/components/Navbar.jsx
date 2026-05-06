import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Seva' },
    { to: '/donate', label: 'Donate' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="topbar">🕉️ Serving Humanity is Serving God — Manav Seva Madhav Seva 🙏</div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="om">🕉</span>
            <h2>My Spiritual<br/>Foundation<span>CHARITABLE TRUST</span></h2>
          </Link>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={pathname === l.to ? 'active' : ''} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li><Link to="/donate" className="donate-btn" onClick={() => setOpen(false)}>🙏 Donate Now</Link></li>
          </ul>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
    </>
  )
}
