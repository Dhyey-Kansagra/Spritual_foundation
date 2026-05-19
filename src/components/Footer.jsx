import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="om">🕉</div>
            <h3>My Spiritual Foundation</h3>
            <p>A charitable trust dedicated to serving humanity through the divine path of seva. Based in Rajkot, Gujarat, India.</p>
            <p style={{ marginTop: '8px', fontStyle: 'italic', color: 'var(--gold)' }}>"Seva Parmo Dharma"</p>
            <div className="social-icons">

              <a href="https://www.facebook.com/share/1DssXQSo1z/" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/myspiritualfoundation?igsh=ejVycDdzeHIwbXI0" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/@myspiritualfoundationhome?si=gteT6oXW8_cmr3VB" target="_blank" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="https://wa.me/918866660301" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Seva</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Our Seva</h4>
            <ul>
              <li><Link to="/services">Food Distribution</Link></li>
              <li><Link to="/services">Clothes Donation</Link></li>
              <li><Link to="/services">Medical Equipment</Link></li>
              <li><Link to="/services">Books Donation</Link></li>
              <li><Link to="/services">Seasonal Seva</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--saffron)', marginTop: '3px' }}></i><span>A/8, Aalap Avenue, Pushkardham Main Road, JK Chowk, Rajkot, Gujarat</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-phone" style={{ color: 'var(--saffron)' }}></i><span>+91 88666 60301</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="fas fa-envelope" style={{ color: 'var(--saffron)' }}></i><span>myspiritualfoundationhome@gmail.com</span></li>

            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} My Spiritual Foundation. Made with <span className="heart"></span> for Seva by DK |  Jai Shree Krishna</p>
        </div>
      </div>
    </footer>
  )
}
