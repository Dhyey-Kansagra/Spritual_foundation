import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import PageHeader from '../components/PageHeader'
import useFadeUp from '../hooks/useFadeUp'

const volTypes = [
  { icon: '🍱', title: 'Food Seva Volunteer', desc: 'Help prepare and distribute food kits to families in need.' },
  { icon: '📚', title: 'Education Volunteer', desc: 'Teach, tutor, or distribute educational materials to students.' },
  { icon: '🏥', title: 'Medical Seva Volunteer', desc: 'Assist with medical equipment distribution and health camps.' },
  { icon: '📸', title: 'Media & Outreach', desc: 'Help with photography, social media, and spreading awareness.' },
]

export default function Contact() {
  const ref = useFadeUp()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        'service_1f198yj',
        'template_i6b5i69',
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || 'Not provided',
          subject: form.subject || 'General Inquiry',
          message: form.message,
        },
        'oRwir5858JPD7lRHN'
      )
      setSending(false)
      setStatus('sent')
      setShowModal(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      console.log(err)
      setSending(false)
      setStatus('failed')
      setShowModal(true)
    }
  }

  return (
    <div ref={ref}>
      <PageHeader title="Contact Us" subtitle="We'd Love to Hear From You" breadcrumb="Contact" />

      {/* SUCCESS MODAL */}
      {showModal && (
        <div style={modalStyles.overlay} onClick={() => setShowModal(false)}>
          <div style={modalStyles.modal} onClick={e => e.stopPropagation()}>
            <div style={modalStyles.circle}>{status === 'sent' ? '🙏' : '❌'}</div>
            {status === 'sent' ? (
              <>
                <h2 style={modalStyles.heading}>Message Sent!</h2>
                <p style={modalStyles.text}>Thank you for reaching out. We will get back to you within 24 hours.<br /><em>"Manav Seva Madhav Seva"</em></p>
                <p style={{ marginTop: 16, fontSize: '1.2rem', color: 'var(--gold)' }}>Jai Shree Krishna</p>
              </>
            ) : (
              <>
                <h2 style={modalStyles.heading}>Something went wrong!</h2>
                <p style={modalStyles.text}>Please try again or contact us directly.</p>
              </>
            )}
            <button onClick={() => setShowModal(false)} style={modalStyles.closeBtn}>Close</button>
          </div>
        </div>
      )}

      <section className="section">
        <div className="container">
          <div className="contact-grid fade-up">
            {/* INFO */}
            <div className="info-cards">
              {[
                ['fas fa-map-marker-alt', 'Our Location', 'A/8, Aalap Avenue, Pushkardham Main Road, JK Chowk, Rajkot, Gujarat, India'],
                ['fas fa-phone-alt', 'Phone', '+91 88666 60301'],
                ['fas fa-envelope', 'Email', 'myspiritualfoundationhome@gmail.com'],
                ['fas fa-clock', 'Seva Hours', 'Monday – Saturday: 10:00 AM – 5:00 PM\nAll Day: By Appointment'],
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
              <p style={{ color: 'var(--gray)', marginBottom: 20, fontSize: '0.9rem' }}>We'll respond within 24 hours</p>
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
                  <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
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
                <button type="submit" className="submit-btn" disabled={sending}
                  style={sending ? { opacity: 0.7, cursor: 'not-allowed' } : {}}>
                  {sending ? (
                    <><i className="fas fa-spinner fa-spin" style={{ marginRight: 8 }}></i>Sending...</>
                  ) : (
                    'Send Message'
                  )}
                </button>
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
            {/* <div className="ornament"><span>🙏</span> ✦ <span>🙏</span></div> */}
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
            <Link to="/donate" className="btn-primary">Support Our Seva</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Modal Inline Styles ── */
const modalStyles = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 20,
  },
  modal: {
    background: '#FFF8F0', borderRadius: 24, padding: '40px 36px',
    maxWidth: 440, width: '100%', textAlign: 'center',
    boxShadow: '0 20px 60px rgba(107,26,26,0.2)',
    border: '2px solid rgba(212,175,55,0.3)',
  },
  circle: {
    width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px',
    background: 'linear-gradient(135deg, #FF6B00, #ff8533)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '2.5rem',
  },
  heading: {
    fontFamily: 'Cinzel, serif', color: '#6B1A1A',
    fontSize: '1.5rem', marginBottom: 8,
  },
  text: {
    color: '#666', lineHeight: 1.7, fontSize: '0.95rem',
  },
  closeBtn: {
    marginTop: 20, padding: '12px 40px', border: 'none', borderRadius: 50,
    background: 'linear-gradient(135deg, #FF6B00, #ff8533)',
    color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
    fontFamily: 'Cinzel, serif', letterSpacing: 1,
    boxShadow: '0 4px 15px rgba(255,107,0,0.3)',
  },
}