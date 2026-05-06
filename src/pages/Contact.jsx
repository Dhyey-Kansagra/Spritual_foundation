import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import useFadeUp from '../hooks/useFadeUp'

const FOUNDATION_EMAIL = 'kpatel12359@gmail.com'
const volTypes = [
  { icon: '🍱', title: 'Food Seva Volunteer', desc: 'Help prepare and distribute food kits to families in need.' },
  { icon: '📚', title: 'Education Volunteer', desc: 'Teach, tutor, or distribute educational materials to students.' },
  { icon: '🏥', title: 'Medical Seva Volunteer', desc: 'Assist with medical equipment distribution and health camps.' },
  { icon: '📸', title: 'Media & Outreach', desc: 'Help with photography, social media, and spreading awareness.' },
]

export default function Contact() {
  const ref = useFadeUp()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

 const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${FOUNDATION_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `📩 New Contact Message from ${form.name}`,
        _replyto: form.email,
        _autoresponse: `🙏 Jai Shree Krishna, ${form.name}!\n\nThank you for contacting My Spiritual Foundation.\nWe will get back to you within 24 hours.\n\n"Manav Seva Madhav Seva"\n\nWith divine blessings,\nMy Spiritual Foundation\nRajkot, Gujarat 🙏`,
        _captcha: 'false',
        _template: 'table',
        'Name': form.name,
        'Email': form.email,
        'Phone': form.phone || 'Not provided',
        'Subject': form.subject || 'General Inquiry',
        'Message': form.message,
      })
    })
    if (response.ok) {
      alert('🙏 Thank you! Your message has been sent.\nWe will get back to you soon.\n\nJai Shree Krishna!')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } else {
      alert('Something went wrong. Please try again.')
    }
  } catch (err) {
    alert('Something went wrong. Please try again.')
  }
}

  return (
    <div ref={ref}>
      <PageHeader title="Contact Us" subtitle="We'd Love to Hear From You" breadcrumb="Contact" />

      <section className="section">
        <div className="container">
          <div className="contact-grid fade-up">
            {/* INFO */}
            <div className="info-cards">
              {[
                ['fas fa-map-marker-alt', 'Our Location', 'A/8, Aalap Avenue, Pushkardham Main Road, JK Chowk, Rajkot, Gujarat, India'],
                ['fas fa-phone-alt', 'Phone', '+91 98765 43210\n+91 98765 43211'],
                ['fas fa-envelope', 'Email', 'info@myspiritualfoundation.org\nseva@myspiritualfoundation.org'],
                ['fas fa-clock', 'Seva Hours', 'Monday – Sunday: 9:00 AM – 5:00 PM\nEveryday: By Appointment'],
              ].map(([icon, title, text], i) => (
                <div className="info-card" key={i}>
                  <div className="ic-icon"><i className={icon}></i></div>
                  <div>
                    <h4>{title}</h4>
                    {text.split('\n').map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            <div className="form-card">
              <h3 style={{ color: 'var(--maroon)', marginBottom: 4, fontSize: '1.3rem' }}>Send Us a Message</h3>
              <p style={{ color: 'var(--gray)', marginBottom: 20, fontSize: '0.9rem' }}>We'll respond within 24 hours 🙏</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Donation Query</option>
                    <option>Volunteer Registration</option>
                    <option>Partnership Proposal</option>
                    <option>Media & Press</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={4} placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required></textarea>
                </div>
                <button type="submit" className="submit-btn">🙏 Send Message</button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="map-container fade-up" style={{ marginTop: 50 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.814543965297!2d70.75318927383965!3d22.285013943452093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0029b7be83%3A0x2cfbe4b2e128edb6!2sMY%20SPIRITUAL%20FOUNDATION%20HOME%20-RAJKOT!5e0!3m2!1sen!2sin!4v1778064260401!5m2!1sen!2sin" title="Location Map" loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title fade-up">
            <div className="ornament"><span>🙏</span> ✦ <span>🙏</span></div>
            <h2>Become a Sevak</h2>
            <p>Join our family of volunteers and make a difference</p>
          </div>
          <div className="volunteer-grid fade-up">
            {volTypes.map((v, i) => (
              <div className="vol-card" key={i}>
                <div className="vol-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 30 }} className="fade-up">
            <Link to="/donate" className="btn-primary">🙏 Support Our Seva</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
