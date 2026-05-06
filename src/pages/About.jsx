import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useFadeUp from '../hooks/useFadeUp'

export default function About() {
  const ref = useFadeUp()
  return (
    <div ref={ref}>
      <PageHeader title="About Us" subtitle="Rooted in Dharma, Growing Through Seva" breadcrumb="About" />

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-flex fade-up">

            <div className="about-img" style={{backgroundImage:"url('/images/our.jpg')",  }}></div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p>My Spiritual Foundation was born from a deep desire to serve humanity as a form of worship. Founded in the sacred city of Rajkot, Gujarat, our trust draws inspiration from the timeless teachings of Lord Krishna and the Vaishnava tradition of selfless service.</p>
              <p>What started as a small group of devotees distributing food to the needy has now grown into a comprehensive charitable organization touching thousands of lives through various seva initiatives.</p>
              <p>We believe that <strong>"Manav Seva Madhav Seva"</strong> — every act of service to humanity is an offering to the Supreme Lord. This divine principle guides everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>☸</span> ✦ <span>☸</span></div>
            <h2>Mission & Vision</h2>
          </div>
          <div className="cards-grid fade-up" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            <div className="card" style={{ borderTop: '4px solid var(--saffron)' }}>
              <div className="icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>To serve the underprivileged sections of society through food, clothing, education, and medical support while fostering spiritual growth and devotion in the community. We aim to uplift every soul we touch through the divine path of seva.</p>
            </div>
            <div className="card" style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="icon" style={{ background: 'linear-gradient(135deg, var(--gold), #c4a030)' }}><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To create a society where no one goes hungry, every child has access to education, and the spirit of seva becomes a way of life. We envision a world where spiritual values and compassionate action walk hand in hand for the betterment of all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-grid">
          {[
            ['5000+', 'Lives Touched'],
            ['12+', 'Seva Programs'],
            ['100%', 'Transparency'],
            ['365', 'Days of Seva'],
          ].map(([num, label], i) => (
            <div className="stat-item" key={i}>
              <h3>{num}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>🪷</span> ✦ <span>🪷</span></div>
            <h2>Our Core Values</h2>
            <p>Guided by the eternal principles of Sanatan Dharma</p>
          </div>
          <div className="cards-grid fade-up">
            {[
              ['🙏', 'Bhakti (Devotion)', 'Every act of seva is an offering to the Supreme Lord.'],
              ['❤️', 'Karuna (Compassion)', 'We see the divine in every being and serve with unconditional love.'],
              ['🤝', 'Seva (Service)', 'Selfless service without expectation of reward is our highest dharma.'],
              ['✨', 'Satya (Truth)', 'Complete transparency and honesty in all our operations.'],
              ['🕊️', 'Ahimsa (Non-violence)', 'Promoting peace and harmony through every initiative.'],
              ['📿', 'Shraddha (Faith)', 'Unwavering faith in the divine plan and the power of collective seva.'],
            ].map(([icon, title, desc], i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="volunteer-cta">
        <h2>Support Our Mission</h2>
        <p>Your generous contribution can transform lives and create lasting impact in our community.</p>
        <Link to="/donate" className="btn-secondary" style={{ borderColor: 'white' }}>🙏 Donate Now</Link>
      </section>
    </div>
  )
}
