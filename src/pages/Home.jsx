import { Link } from 'react-router-dom'
import useFadeUp from '../hooks/useFadeUp'

const services = [
  { icon: '🍱', title: 'Food Kit Distribution', desc: 'Providing nutritious food kits to families in need across Rajkot.' },
  { icon: '🍦', title: 'Ice Cream Distribution', desc: 'Spreading joy among underprivileged children with sweet treats.' },
  { icon: '👕', title: 'Clothes Donation', desc: 'Distributing clean clothing to those who need it the most.' },
  { icon: '📚', title: 'Books Donation', desc: 'Supporting education by providing books and study materials.' },
  { icon: '🥤', title: 'Chaas & Juice Seva', desc: 'Refreshing beverages for the community during hot summers.' },
  { icon: '🎒', title: 'Seasonal Item Seva', desc: 'Blankets in winter, umbrellas in monsoon — seva for every season.' },
]


const gallery = [
  { img: '/images/Food.png', label: 'Food Seva' },
  { img: '/images/Joy.png', label: 'Joy Seva' },
  { img: '/images/Education.png', label: 'Education' },
  { img: '/images/Devotion.png', label: 'Devotion' },
  { img: '/images/Love.png', label: 'Love' },
]

export default function Home() {
  const ref = useFadeUp()
  const marqueeText = '🙏 Food Kits Distribution  •  🍦 Ice Cream Seva  •  👕 Clothes Donation  •  📚 Books Seva  •  🥤 Chaas & Juice  •  ♿ Medical Equipment  •  🎒 Seasonal Items  •  '

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p>🙏 Jai Shree Krishna 🙏</p>
          <h1>My <span className="gold">Spiritual</span><br />Foundation</h1>
          <p>"Serving Humanity is Serving God"</p>
          <div className="subtitle">✦ Seva Parmo Dharma ✦</div>
          <div className="hero-btns">
            <Link to="/donate" className="btn-primary">🙏 Donate Now</Link>
            <Link to="/services" className="btn-secondary">Our Seva ☸</Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-content">{marqueeText}{marqueeText}</div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-flex fade-up">
            <div className="about-img" style={{ backgroundImage: "url('/images/About.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>My Spiritual Foundation is a Rajkot-based charitable trust rooted in the divine philosophy of <strong>"Manav Seva Madhav Seva"</strong> — Serving Humanity is Serving God. We believe that every act of kindness is an offering to the divine.</p>
              <p>Inspired by the eternal teachings of Sanatan Dharma and Vaishnava traditions, we serve the underprivileged with love, compassion, and dedication.</p>
              <div className="value-cards">
                <div className="value-card"><div className="emoji">🙏</div><h4>Devotion</h4></div>
                <div className="value-card"><div className="emoji">❤️</div><h4>Compassion</h4></div>
                <div className="value-card"><div className="emoji">🤝</div><h4>Service</h4></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>☸</span> ✦ <span>☸</span></div>
            <h2>Our Seva Activities</h2>
            <p>Dedicated to serving the community through various charitable initiatives</p>
          </div>
          <div className="cards-grid">
            {services.map((s, i) => (
              <div className="card fade-up" key={i}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-banner">
        <blockquote>"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन" <br />You have the right to perform your duty, but not to the fruits of your actions.</blockquote>
        <cite>— Bhagavad Gita, Chapter 2, Verse 47</cite>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>🪷</span> ✦ <span>🪷</span></div>
            <h2>Our Seva Gallery</h2>
            <p>Moments of love, compassion and divine service</p>
          </div>
          <div className="gallery-grid fade-up">
            {gallery.map((g, i) => (
              <div className="gallery-item" key={i} style={{ backgroundImage: `url('${g.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '1.7rem' }}>{g.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section impact-section">
        <div className="container">
          <div className="section-title fade-up" style={{ color: 'white' }}>
            <div className="ornament"><span>✦</span></div>
            <h2 style={{ color: 'white' }}>Your Donation Impact</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Every rupee creates a ripple of change</p>
          </div>
          <div className="impact-grid fade-up">
            {[
              ['₹501', 'Feeds a family for a week'],
              ['₹1,001', 'Clothes for 5 children'],
              ['₹2,101', 'Books for 10 students'],
              ['₹5,100', 'Medical equipment for one patient'],
            ].map(([amt, desc], i) => (
              <div className="impact-card" key={i}>
                <div className="amount">{amt}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="volunteer-cta">
        <h2>Join Our Seva Family</h2>
        <p>Become a part of something divine. Volunteer your time, skills, or resources to serve those in need.</p>
        <Link to="/contact" className="btn-secondary" style={{ borderColor: 'white' }}>Become a Volunteer 🙏</Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>🙏</span> ✦ <span>🙏</span></div>
            <h2>Visit Our Ashram</h2>
            <p>We welcome you with open arms</p>
          </div>
          <div className="map-container fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.814543965297!2d70.75318927383965!3d22.285013943452093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0029b7be83%3A0x2cfbe4b2e128edb6!2sMY%20SPIRITUAL%20FOUNDATION%20HOME%20-RAJKOT!5e0!3m2!1sen!2sin!4v1778064260401!5m2!1sen!2sin" title="Location Map" loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
