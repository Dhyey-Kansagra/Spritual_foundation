import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useFadeUp from '../hooks/useFadeUp'

const sevaItems = [
  { icon: '🍱', title: 'Food Kit Distribution', desc: 'Providing nutritious food kits including rice, dal, oil, spices, and essentials to underprivileged families across Rajkot.' },
  { icon: '🍦', title: 'Ice Cream Distribution', desc: 'Bringing smiles to children in orphanages, slums, and rural areas through sweet treats and moments of pure joy.' },
  { icon: '👕', title: 'Clothes Donation', desc: 'Collecting and distributing clean, quality clothing to those who need it most — from newborns to the elderly.' },
  { icon: '📚', title: 'Books Donation', desc: 'Supporting education by providing textbooks, notebooks, and study materials to students from underprivileged backgrounds.' },
  { icon: '🥤', title: 'Chaas / Juice / Lassi Seva', desc: 'Refreshing beverages distributed during scorching summers to daily wage workers, rickshaw pullers, and passersby.' },
  { icon: '🎒', title: 'Seasonal Item Distribution', desc: 'Blankets and sweaters in winter, umbrellas in monsoon, fans in summer — seva that adapts to every season.' },
]

const equipment = [
  { icon: '♿', name: 'Wheelchair' },
  { icon: '🛏️', name: 'Hospital Bed' },
  { icon: '🦯', name: 'Walking Stick' },
  { icon: '🚶', name: 'Walker' },
  { icon: '🩼', name: 'Crutches (Ghodi)' },
]

export default function Services() {
  const ref = useFadeUp()
  return (
    <div ref={ref}>
      <PageHeader title="Our Seva" subtitle="Selfless Service to Humanity — Nishkam Karma Yoga" breadcrumb="Seva" />

      {/* SEVA CARDS */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>☸</span> ✦ <span>☸</span></div>
            <h2>Seva Activities</h2>
            <p>Each act of seva is performed with love, devotion, and the spirit of Nishkam Karma</p>
          </div>
          <div className="cards-grid fade-up">
            {sevaItems.map((s, i) => (
              <div className="card" key={i}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL EQUIPMENT */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>🏥</span> ✦ <span>🏥</span></div>
            <h2>Medical Equipment Seva</h2>
            <p>Providing essential medical equipment free of cost to patients in need</p>
          </div>
          <div className="equip-grid fade-up">
            {equipment.map((e, i) => (
              <div className="equip-card" key={i}>
                <div className="eq-icon">{e.icon}</div>
                <h4>{e.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>🪷</span> ✦ <span>🪷</span></div>
            <h2>How We Work</h2>
            <p>A simple, transparent process rooted in trust and devotion</p>
          </div>
          <div className="steps fade-up">
            {[
              ['1', 'Identify & Plan', 'We identify communities and individuals in need through ground-level surveys and community outreach programs.'],
              ['2', 'Collect & Organize', 'Donations are collected, organized, and quality-checked by our dedicated team of volunteers and devotees.'],
              ['3', 'Distribute with Love', 'Items are distributed personally with respect, dignity, and the spirit of divine service — Seva Parmo Dharma.'],
            ].map(([num, title, desc], i) => (
              <div className="step" key={i}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="volunteer-cta">
        <h2>Want to Support Our Seva?</h2>
        <p>Your contribution — big or small — can make a world of difference in someone's life.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/donate" className="btn-primary"> Donate Now</Link>
          <Link to="/contact" className="btn-secondary" style={{ borderColor: 'white' }}>Become a Volunteer</Link>
        </div>
      </section>
    </div>
  )
}
