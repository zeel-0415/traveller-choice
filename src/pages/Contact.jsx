import React, { useState } from 'react';

const offices = [
  { city: 'New York', addr: '123 Travel Street, New York, NY 10001, USA' },
  { city: 'London', addr: '45 Explorer Avenue, London, EC2A 4NE, UK' },
  { city: 'Singapore', addr: '78 Journey Road, Singapore 048624' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const set = k => e => setForm({ ...form, [k]: e.target.value });

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2000" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Contact Us</h1>
            <p className="page-banner-sub">We're here to help with all your travel needs</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48 }}>
            {/* Message Form */}
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 40, boxShadow: 'var(--shadow)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 24 }}>Send us a Message</h2>
              <div className="form-field">
                <label>Subject</label>
                <select value={form.subject} onChange={set('subject')} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                  {['General Inquiry', 'Flight Booking', 'Hotel Reservation', 'Visa Services', 'Cruise Booking', 'Forex', 'Complaint', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-field"><label>Full Name</label><input value={form.name} onChange={set('name')} placeholder="Your Name" /></div>
                <div className="form-field"><label>Email</label><input type="email" value={form.email} onChange={set('email')} placeholder="email@example.com" /></div>
                <div className="form-field" style={{ gridColumn: '1/-1' }}><label>Phone</label><input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" /></div>
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea rows={5} value={form.message} onChange={set('message')} placeholder="How can we help you?" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, resize: 'vertical', outline: 'none' }} />
              </div>
              <button onClick={() => alert('Message sent! We will reply within 24 hours.')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>Send Message</button>
            </div>

            {/* Contact Info */}
            <div>
              {[
                { icon: '📞', title: 'Phone', content: '+1 (800) 123-4567', link: 'tel:+18001234567' },
                { icon: '✉️', title: 'Email', content: 'support@travellerschoice.com', link: 'mailto:support@travellerschoice.com' },
                { icon: '🏢', title: 'Office', content: '123 Travel Street, New York, NY 10001, USA', link: null },
              ].map(c => (
                <div key={c.title} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: 24, boxShadow: 'var(--shadow)', marginBottom: 16, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(201,168,76,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{c.title}</div>
                    {c.link ? <a href={c.link} style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 14 }}>{c.content}</a> : <div style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.6 }}>{c.content}</div>}
                  </div>
                </div>
              ))}

              <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius)', padding: 24, color: '#fff' }}>
                <div style={{ fontWeight: 700, marginBottom: 8, color: 'var(--gold)' }}>🕐 24/7 Support</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 16 }}>Our travel experts are available around the clock for your queries.</p>
                <button onClick={() => alert('Opening live chat...')} style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 700, cursor: 'pointer', fontSize: 13 }}>Start Live Chat</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Global Offices</h2>
          <div className="grid-3">
            {offices.map((o, i) => (
              <div key={i} style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', padding: 28, border: '1.5px solid var(--gray-200)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: 10 }}>{o.city}</div>
                <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.7 }}>{o.addr}</p>
                <button onClick={() => alert(`Opening map for ${o.city}...`)} style={{ marginTop: 16, background: 'none', border: '1.5px solid var(--navy)', borderRadius: 6, padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', color: 'var(--navy)' }}>📍 Show on Map</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
