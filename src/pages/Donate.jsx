import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import useFadeUp from '../hooks/useFadeUp'


const FOUNDATION_EMAIL = 'abd4864c6578c7c2956b31a35d09fbd1'

const amounts = [501, 1001, 2101, 5100, 11000]

const impactList = [
  ['₹501', 'Feeds a family for one week'],
  ['₹1,001', 'Provides clothes for 5 children'],
  ['₹2,101', 'Books & stationery for 10 students'],
  ['₹5,100', 'Medical equipment for a patient'],
  ['₹11,000', 'Sponsors a complete community seva drive'],
]

export default function Donate() {
  const ref = useFadeUp()
  const [selectedAmt, setSelectedAmt] = useState(null)
  const [customAmt, setCustomAmt] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', purpose: '', message: '' })
  const [sending, setSending] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [emailStatus, setEmailStatus] = useState('')  // 'sent', 'failed', 'no-email'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const donation = selectedAmt || customAmt
    if (!donation) { alert('Please select or enter a donation amount.'); return }

    setSending(true)
    let status = 'no-email'

    // Send via FormSubmit 
    if (form.email && form.email.trim() !== '') {
      try {
        const response = await fetch(`https://formsubmit.co/${FOUNDATION_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: `🙏 New Donation: ₹${Number(donation).toLocaleString('en-IN')} from ${form.name}`,
            _replyto: form.email,

            _autoresponse: `🙏 Jai Shree Krishna, ${form.name || 'Dear Devotee'}! Thank you for your generous donation of ₹${Number(donation).toLocaleString('en-IN')} towards ${form.purpose || 'General Seva Fund'}. Your selfless seva will bring smiles to many faces. Manav Seva Madhav Seva - Serving Humanity is Serving God. May Lord Krishna bless you and your family abundantly. With divine blessings, My Spiritual Foundation, Rajkot, Gujarat. Seva Parmo Dharma.`,
            _replyto: form.email,
            _cc: form.email,
            _template: 'table',
            _captcha: 'false',
            'Donor Name': form.name || 'Anonymous',
            'Email': form.email,
            'Phone': form.phone || 'Not provided',
            'Donation Amount': `₹${Number(donation).toLocaleString('en-IN')}`,
            'Seva Purpose': form.purpose || 'General Seva Fund',
            'Message': form.message || 'No message',
          })
        })
        if (response.ok) { status = 'sent' } else { status = 'failed' }
      } catch (err) {
        console.error('FormSubmit Error:', err)
        status = 'failed'
      }
    }

    setSending(false)
    setEmailStatus(status)
    setShowModal(true)
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await fetch(`https://formsubmit.co/ajax/${FOUNDATION_EMAIL}`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  //       body: JSON.stringify({
  //         _subject: `📩 New Donation from ${form.name}`,
  //         _captcha: 'false',
  //         _template: 'table',
  //         'Name': form.name,
  //         'Email': form.email,
  //         'Phone': form.phone || 'Not provided',
  //         'amount': `₹${Number(donation).toLocaleString('en-IN')}`,
  //         'Purpose': form.purpose || 'General Seva Fund',
  //         'Message': form.message || 'No message',
  //       })
  //     })

  //     await emailjs.send(
  //       'service_1f198yj',
  //       'template_4i7s6xb',
  //       {
  //         to_name: form.name,
  //         to_email: form.email,
  //         amount: `₹${Number(selectedAmt || customAmt).toLocaleString('en-IN')}`,
  //         purpose: form.purpose || 'General Seva Fund',
  //       },
  //       'oRwir5858JPD7lRHN'
  //     )

  //     if (response.ok) {
  //       alert('🙏 Thank you! Your donation has been received.\nWe will get back to you soon.\n\nJai Shree Krishna!')
  //       setForm({ name: '', email: '', phone: '', purpose: '', message: '' })
  //       setDonation(501)
  //     } else {
  //       alert('Something went wrong. Please try again.')
  //     }
  //   } catch (err) {
  //     console.log('Error:', err)
  //     alert('Something went wrong. Please try again.')
  //   }
  // }



  const closeModal = () => {
    setShowModal(false)
    setForm({ name: '', phone: '', email: '', purpose: '', message: '' })
    setSelectedAmt(null)
    setCustomAmt('')
  }

  const donationDisplay = selectedAmt
    ? `₹${selectedAmt.toLocaleString('en-IN')}`
    : customAmt ? `₹${Number(customAmt).toLocaleString('en-IN')}` : ''

  return (
    <div ref={ref}>
      <PageHeader title="Donate" subtitle="Your Generosity is a Prayer to the Divine" breadcrumb="Donate" />

      {/* SUCCESS MODAL */}
      {showModal && (
        <div style={modalStyles.overlay} onClick={closeModal}>
          <div style={modalStyles.modal} onClick={e => e.stopPropagation()}>
            <div style={modalStyles.omCircle}>🙏</div>
            <h2 style={modalStyles.heading}>Thank You, {form.name || 'Dear Devotee'}!</h2>
            <p style={modalStyles.amount}>{donationDisplay}</p>
            <p style={modalStyles.text}>
              May Lord Krishna bless you abundantly for your generous seva.
              <br /><em>"Manav Seva Madhav Seva"</em>
            </p>

            {emailStatus === 'sent' && (
              <div style={modalStyles.emailBadge}>
                <i className="fas fa-check-circle" style={{ color: '#22c55e', marginRight: 8 }}></i>
                Thank-you email sent to <strong>{form.email}</strong>
              </div>
            )}
            {emailStatus === 'failed' && (
              <div style={{ ...modalStyles.emailBadge, background: '#fef2f2', borderColor: '#fca5a5' }}>
                <i className="fas fa-exclamation-circle" style={{ color: '#ef4444', marginRight: 8 }}></i>
                Could not send email. Please verify your email in FormSubmit (check inbox).
              </div>
            )}
            {emailStatus === 'no-email' && (
              <div style={{ ...modalStyles.emailBadge, background: '#fefce8', borderColor: '#fde047' }}>
                <i className="fas fa-info-circle" style={{ color: '#ca8a04', marginRight: 8 }}></i>
                No email provided — no confirmation email sent.
              </div>
            )}

            <p style={{ marginTop: 16, fontSize: '1.2rem', color: 'var(--gold)' }}>🙏 Jai Shree Krishna 🙏</p>
            <button onClick={closeModal} style={modalStyles.closeBtn}>Close</button>
          </div>
        </div>
      )}

      <section className="donate-section">
        <div className="container">
          <div className="donate-grid fade-up">
            {/* FORM */}
            <div className="form-card">
              <h2 style={{ color: 'var(--maroon)', marginBottom: 8, fontSize: '1.5rem' }}>Make a Donation</h2>
              <p style={{ color: 'var(--gray)', marginBottom: 24, fontSize: '0.9rem' }}>Every contribution is an offering to the divine 🙏</p>
              <form onSubmit={handleSubmit}>
                <label style={{ fontWeight: 600, color: 'var(--maroon)', marginBottom: 10, display: 'block' }}>Select Amount (₹)</label>
                <div className="amount-btns">
                  {amounts.map(a => (
                    <button type="button" key={a} className={`amount-btn ${selectedAmt === a ? 'active' : ''}`}
                      onClick={() => { setSelectedAmt(a); setCustomAmt('') }}>₹{a.toLocaleString()}</button>
                  ))}
                  <button type="button" className={`amount-btn ${selectedAmt === null && customAmt ? 'active' : ''}`}
                    onClick={() => setSelectedAmt(null)}>Custom</button>
                </div>
                {selectedAmt === null && (
                  <div className="form-group">
                    <input type="number" placeholder="Enter custom amount" value={customAmt} onChange={e => setCustomAmt(e.target.value)} min="1" />
                  </div>
                )}
                <div className="form-group">
                  <label>Seva Purpose</label>
                  <select value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })}>
                    <option value="">Select Purpose</option>
                    <option>Food Kit Distribution</option>
                    <option>Clothes Donation</option>
                    <option>Medical Equipment</option>
                    <option>Education Support</option>
                    <option>General Seva Fund</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Email <span style={{ color: 'var(--saffron)', fontSize: '0.8rem' }}></span></label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea rows={3} placeholder="Any special message or dedication..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={sending}
                  style={sending ? { opacity: 0.7, cursor: 'not-allowed' } : {}}>
                  {sending ? (
                    <><i className="fas fa-spinner fa-spin" style={{ marginRight: 8 }}></i>Processing...</>
                  ) : (
                    '🙏 Donate Now — Seva Parmo Dharma'
                  )}
                </button>
              </form>
            </div>

            {/* IMPACT + BANK */}
            <div>
              <div className="card fade-up" style={{ marginBottom: 20 }}>
                <h3 style={{ marginBottom: 16 }}>💫 Your Impact</h3>
                {impactList.map(([amt, desc], i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, padding: '10px 0', borderBottom: '1px solid #f0e8d8' }}>
                    <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, color: 'var(--saffron)', minWidth: 80 }}>{amt}</span>
                    <span style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{desc}</span>
                  </div>
                ))}
              </div>

              <div className="bank-details fade-up">
                <h3>🏦 Bank Transfer Details</h3>
                <p><strong>Account Name:</strong> My Spiritual Foundation</p>
                <p><strong>Bank:</strong> State Bank of India</p>
                <p><strong>Account No:</strong> XXXX XXXX XXXX 1234</p>
                <p><strong>IFSC Code:</strong> SBIN0001234</p>
                <p><strong>Branch:</strong> Rajkot Main Branch</p>
                <p style={{ marginTop: 12 }}><strong>UPI:</strong> myspiritualfoundation@sbi</p>
              </div>

              <div className="tax-notice fade-up" style={{ marginTop: 16 }}>
                <i className="fas fa-certificate"></i>
                <p style={{ marginTop: 8, fontWeight: 600, color: 'var(--maroon)' }}>80G Tax Exemption Available</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>All donations are eligible for tax deduction under Section 80G of the Income Tax Act.</p>
              </div>
            </div>
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
    padding: 20, animation: 'fadeIn 0.3s ease',
  },
  modal: {
    background: '#FFF8F0', borderRadius: 24, padding: '40px 36px',
    maxWidth: 480, width: '100%', textAlign: 'center',
    boxShadow: '0 20px 60px rgba(107,26,26,0.2)',
    border: '2px solid rgba(212,175,55,0.3)',
    animation: 'slideUp 0.4s ease',
  },
  omCircle: {
    width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px',
    background: 'linear-gradient(135deg, #FF6B00, #ff8533)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '2.5rem', color: 'white',
    boxShadow: '0 8px 25px rgba(255,107,0,0.3)',
  },
  heading: {
    fontFamily: 'Cinzel, serif', color: '#6B1A1A',
    fontSize: '1.5rem', marginBottom: 8,
  },
  amount: {
    fontFamily: 'Cinzel, serif', fontSize: '2rem',
    color: '#FF6B00', fontWeight: 700, margin: '8px 0',
  },
  text: {
    color: '#666', lineHeight: 1.7, fontSize: '0.95rem',
  },
  emailBadge: {
    marginTop: 16, padding: '12px 16px', borderRadius: 12,
    background: '#f0fdf4', border: '1px solid #86efac',
    fontSize: '0.85rem', color: '#333',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  closeBtn: {
    marginTop: 20, padding: '12px 40px', border: 'none', borderRadius: 50,
    background: 'linear-gradient(135deg, #FF6B00, #ff8533)',
    color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
    fontFamily: 'Cinzel, serif', letterSpacing: 1,
    boxShadow: '0 4px 15px rgba(255,107,0,0.3)',
  },
}


