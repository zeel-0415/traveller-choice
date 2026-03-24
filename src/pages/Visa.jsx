import React, { useState } from 'react';

const visaTypes = [
  { icon: '🗽', name: 'United States', type: 'Tourist/Business Visa', days: '10-15 days processing' },
  { icon: '🎡', name: 'United Kingdom', type: 'Standard Visitor Visa', days: '15-20 days processing' },
  { icon: '🦘', name: 'Australia', type: 'Visitor Visa (600)', days: '20-25 days processing' },
  { icon: '🏰', name: 'Schengen Area', type: 'Short-stay Visa', days: '15-30 days processing' },
];
const knowVisa = [
  { img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80', type: 'Tourist Visa (T)', desc: 'A tourist visa allows a foreign national to enter a country for the purpose of tourism and leisure travel.' },
  { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80', type: 'Business Visa (B)', desc: 'A business visa allows a foreign national to travel to a country temporarily for business purposes.' },
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80', type: 'Employment Visa (E)', desc: 'An employment visa allows a foreign national to enter and work in a country for a specific period.' },
];
const budgetPkgs = [
  { img: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=300&q=80', nights: '4N 5D', name: 'Bali Honeymoon Special', loc: 'Bali (4N) | Pool Villa (1N)', price: '₹31,190', emi: '₹1,579' },
  { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=300&q=80', nights: '5N 6D', name: 'Simply Bali Seminyak', loc: 'Bali (5N)', price: '₹18,370', emi: '₹930' },
  { img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=300&q=80', nights: '4N 5D', name: 'Free And Easy Thailand', loc: 'Pattaya (2N) | Bangkok (2N)', price: '₹18,910', emi: '₹958' },
  { img: 'https://images.unsplash.com/photo-1559592413-7cec4d0ea49b?auto=format&fit=crop&w=300&q=80', nights: '5N 6D', name: 'Vietnam Classic', loc: 'Hanoi (2N), Halong (1N)', price: '₹37,280', emi: '₹1,888' },
  { img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=300&q=80', nights: '4N 5D', name: 'Singapore Escape', loc: 'Singapore (4N)', price: '₹35,820', emi: '₹1,814' },
];
const articles = [
  { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80', title: '7-Day Bali Itinerary 2025: A First-Timer\'s Blueprint!', date: 'May 13, 2025', author: 'Siddharth Shah' },
  { img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=300&q=80', title: 'A First-Timer\'s Guide to Dreamworld Queensland', date: 'May 11, 2025', author: 'Meeta Shah' },
  { img: 'https://images.unsplash.com/photo-1512453979798-5ea932a23518?auto=format&fit=crop&w=300&q=80', title: 'Yas Island Abu Dhabi 2025: Ultimate Guide', date: 'May 09, 2025', author: 'Mukti Solanki' },
  { img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=300&q=80', title: 'Khajuraho Temples Travel Guide 2025', date: 'Apr 30, 2025', author: 'Meeta Shah' },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80', title: 'Why Gurudongmar Lake Should Be on Your 2025 List!', date: 'Apr 27, 2025', author: 'Mukti Solanki' },
];

export default function Visa() {
  const [form, setForm] = useState({ name: '', email: '', contact: '', city: '', visaType: '', visaCountry: '', msg: '' });
  const [budgetTab, setBudgetTab] = useState('Under 50K');
  const [seasonTab, setSeasonTab] = useState('Winter Special');
  const set = k => e => setForm({ ...form, [k]: e.target.value });

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Visa Services</h1>
            <p className="page-banner-sub">Streamlined visa applications with expert guidance</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Visa Destinations</h2>
          <div className="grid-4" style={{ marginBottom: 48 }}>
            {visaTypes.map((v, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: 24, boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>{v.name}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 6 }}>{v.type}</div>
                <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600 }}>{v.days}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48 }}>
            {/* Inquiry Form */}
            <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 36, boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 24 }}>Visa Enquiry</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[['Full Name', 'name', 'text'], ['Email ID', 'email', 'email'], ['Contact', 'contact', 'tel'], ['Customer City', 'city', 'text']].map(([l, k, t]) => (
                  <div className="form-field" key={k}><label>{l}</label><input type={t} value={form[k]} onChange={set(k)} placeholder={l} /></div>
                ))}
              </div>
              <div className="form-field">
                <label>Visa Type</label>
                <select value={form.visaType} onChange={set('visaType')} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                  <option value="">Search Visa Type...</option>
                  <option>Tourist Visa</option>
                  <option>Business Visa</option>
                  <option>Employment Visa</option>
                  <option>Student Visa</option>
                </select>
              </div>
              <div className="form-field">
                <label>Visa Country</label>
                <select value={form.visaCountry} onChange={set('visaCountry')} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                  <option value="">Search Visa Country...</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Schengen (Europe)</option>
                  <option>UAE - Dubai</option>
                  <option>Singapore</option>
                  <option>Thailand</option>
                </select>
              </div>
              <div className="form-field">
                <label>Message or Query</label>
                <textarea rows={3} value={form.msg} onChange={set('msg')} placeholder="Any special requirements..." style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, resize: 'vertical', outline: 'none' }} />
              </div>
              <button onClick={() => alert('Inquiry sent!')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '13px' }}>Send Inquiry</button>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: 24 }}>
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=400" alt="" style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>GET BEST VISA FARES</div>
                  <p style={{ fontSize: 13, color: 'var(--gray-700)' }}>Book now and save more! Expert visa processing at unbeatable rates.</p>
                </div>
              </div>

              <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: 24, color: '#fff', marginBottom: 24 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 16, color: 'var(--gold)' }}>Why Choose Us?</h4>
                {['27+ Years of Experience', 'End-to-End Consultancy', 'Safety & Confidentiality', 'Best Success Rate'].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span> {p}
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: 12 }}>📞 Contact</h4>
                <div style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="tel:+919825081806" style={{ color: 'var(--navy)', fontWeight: 600 }}>+91 98250 81806</a>
                  <a href="mailto:world@flamingotravels.co.in" style={{ color: 'var(--gold)', fontSize: 12 }}>world@flamingotravels.co.in</a>
                  <a href="https://wa.me/919825081806" style={{ background: '#25D366', color: '#fff', padding: '9px 14px', borderRadius: 8, fontWeight: 500, textAlign: 'center', fontSize: 13 }}>💬 WhatsApp Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Visa */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Know Your Visa</h2>
          <div className="grid-3">
            {knowVisa.map((v, i) => (
              <div key={i} className="card">
                <img className="card-img" src={v.img} alt={v.type} />
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="card-title">{v.type}</div>
                    <span style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap' }}>Know More &gt;</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--gray-700)', marginTop: 8, lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Budget Packages */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Best Budget Travel Destinations</h2>
          <div className="filter-tabs">
            {['Under 50K', '50K - 1 Lac', '1 Lac - 2 Lac', 'More than 2 Lac'].map(t => (
              <button key={t} className={`filter-tab ${budgetTab === t ? 'active' : ''}`} onClick={() => setBudgetTab(t)}>{t}</button>
            ))}
          </div>
          <div className="grid-3">
            {budgetPkgs.map((p, i) => (
              <div key={i} className="card">
                <div style={{ position: 'relative' }}>
                  <img className="card-img" src={p.img} alt={p.name} />
                  <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(10,22,40,0.75)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20 }}>{p.nights}</span>
                  <span style={{ position: 'absolute', top: 12, right: 12, background: 'var(--white)', color: 'var(--navy)', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20 }}>Private Van Tour</span>
                </div>
                <div className="card-body">
                  <div className="card-title">{p.name}</div>
                  <div className="card-subtitle">{p.loc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ background: 'var(--gray-100)', fontSize: 11, padding: '3px 8px', borderRadius: 4, fontWeight: 500 }}>Flight Not Included</span>
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{p.price}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 12 }}>per person · EMI from {p.emi}/month</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', color: 'var(--navy)', borderColor: 'var(--gray-200)', padding: '8px', fontSize: 12 }}>Call Now</button>
                    <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '8px', fontSize: 12 }}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Packages */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Top Packages By Season</h2>
          <div className="filter-tabs">
            {['Summer Special', 'Winter Special'].map(t => (
              <button key={t} className={`filter-tab ${seasonTab === t ? 'active' : ''}`} onClick={() => setSeasonTab(t)}>{t}</button>
            ))}
          </div>
          <div className="grid-3">
            {budgetPkgs.map((p, i) => (
              <div key={i} className="card">
                <div style={{ position: 'relative' }}>
                  <img className="card-img" src={p.img} alt={p.name} />
                  <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(10,22,40,0.8)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 20 }}>Private Tour | {seasonTab}</span>
                </div>
                <div className="card-body">
                  <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 4 }}>{p.nights}</div>
                  <div className="card-title">{p.name}</div>
                  <div className="card-subtitle">{p.loc}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                    <div><div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{p.price}</div><div style={{ fontSize: 12, color: 'var(--gray-500)' }}>per person</div></div>
                    <button className="btn btn-dark" style={{ padding: '8px 14px', fontSize: 12 }}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Trending travel articles</h2>
          <div className="grid-3">
            {articles.map((a, i) => (
              <div key={i} className="card" style={{ cursor: 'pointer' }}>
                <img className="card-img" src={a.img} alt="" style={{ height: 180 }} />
                <div className="card-body">
                  <div className="card-title" style={{ fontSize: '0.95rem' }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray-500)', marginTop: 8 }}>{a.date} · {a.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter + Branch */}
      <div style={{ background: 'var(--navy)', padding: '48px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.3rem', marginBottom: 8 }}>Get exclusive deals in your inbox</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 20 }}>Sign up for travel inspiration and offers</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <input placeholder="Your email address" style={{ flex: 1, padding: '11px 16px', borderRadius: 8, border: 'none', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }} />
              <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.85)' }}>
            <h4 style={{ fontWeight: 700, marginBottom: 8, color: 'var(--gold)' }}>Head Office</h4>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              Flamingo Transworld Pvt. Ltd.<br />
              201/202, Gala Business Centre, St. Xaviers College Corner,<br />
              Ahmedabad 380 009, Gujarat, India.<br />
              Mon–Sat | 10:30 AM – 7:00 PM
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['Send Inquiry', 'WhatsApp', 'Book Appointment'].map(l => (
                <button key={l} onClick={() => {}} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, padding: '6px 14px', fontSize: 12, cursor: 'pointer' }}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
