import React, { useState } from 'react';

const packages = [
  { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500', nights: '1 Night / 2 Days', name: 'South Goa Hotel Deals', tags: ['Superior Hotels', 'Meal Plan', 'Pvt. Cab'], valid: '31 Mar 2024', price: '₹2,950', badges: ['Fixed Departures', 'Best Seller'] },
  { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=500', nights: '2 Night / 3 Days', name: 'North Goa Hotel Deals', tags: ['Standard Hotels', 'SIC Transfers'], valid: '31 Mar 2024', price: '₹3,900', badges: [] },
  { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500', nights: '3 Night / 4 Days', name: 'Goa Honeymoon Special', tags: ['Luxury Hotels', 'Meal Plan', 'Pvt. Cab', 'Spa'], valid: '31 Mar 2024', price: '₹8,500', badges: ['Best Seller'] },
  { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=500', nights: '4 Night / 5 Days', name: 'Goa Luxury Stay', tags: ['5-Star Hotels', 'All Meals', 'Private Tours'], valid: '31 Mar 2024', price: '₹15,200', badges: [] },
];

const places = [
  { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=300', name: 'Anjuna Beach' },
  { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300', name: 'Baga Beach' },
  { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=300', name: 'Calangute Beach' },
  { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300', name: 'Dudhsagar Falls' },
  { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=300', name: 'Basilica of Bom Jesus' },
  { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300', name: 'Palolem Beach' },
];

const faqs = [
  { q: 'What is the best time to visit Goa?', a: 'The best time to visit Goa is between mid-November to mid-February when the weather is pleasantly cool and comfortable.' },
  { q: 'What are the top things to do in Goa?', a: 'Top activities include visiting North Goa beaches, exploring water sports, visiting the Basilica of Bom Jesus, and enjoying the nightlife.' },
  { q: 'Which are the best places to visit in Goa?', a: 'Popular spots include Anjuna Beach, Baga Beach, Calangute, Old Goa churches, and the Dudhsagar Falls.' },
  { q: 'Which are the best beaches to visit in Goa?', a: 'Palolem and Agonda in South Goa are great for peace, while Baga and Calangute in North Goa are famous for their lively atmosphere.' },
  { q: 'What is Goa famous for?', a: 'Goa is world-renowned for its beautiful beaches, Portuguese-influenced architecture, seafood, and vibrant cultural festivals.' },
  { q: 'What can couples do in Goa?', a: 'Couples can enjoy sunset cruises, romantic beach dinners, long walks at Palolem Beach, and exploring the quiet lanes of Fontainhas.' },
  { q: 'What are some of the best Goa tour packages offered?', a: 'We offer a range of packages including South Goa Hotel Deals, North Goa Beach stays, and specialized winter packages.' },
  { q: 'Where to stay in Goa?', a: 'North Goa is best for nightlife and shopping, while South Goa is ideal for luxury resorts and quiet beaches.' },
];

export default function GoaPackages() {
  const [openFaq, setOpenFaq] = useState(null);
  const [budget, setBudget] = useState([5000, 120000]);
  const [tourType, setTourType] = useState('All');
  const [duration, setDuration] = useState('All');

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Goa Tour Packages</h1>
            <p className="page-banner-sub">All-inclusive tours and curated experiences</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ background: 'rgba(201,168,76,0.08)', borderRadius: 'var(--radius-lg)', padding: 28, marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: 12 }}>Goa Tour Packages</h2>
            <p style={{ fontSize: 15, color: 'var(--gray-700)', lineHeight: 1.7 }}>Goa, the land of beaches, is one of the most popular tourist destinations in India. Our Goa tour packages offer a perfect blend of relaxation and adventure. Experience the vibrant nightlife, serene beaches, and rich Portuguese heritage.</p>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 32, background: 'var(--white)', padding: 24, borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
            <div style={{ flex: 1, minWidth: 160 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--gray-500)', marginBottom: 8 }}>TOUR TYPE</label>
              <select value={tourType} onChange={e => setTourType(e.target.value)} style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 13, outline: 'none' }}>
                {['All', 'Private Tour', 'Group Tour', 'Honeymoon', 'Family'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--gray-500)', marginBottom: 8 }}>DEPARTURE FROM</label>
              <select style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 13, outline: 'none' }}>
                {['All', 'Mumbai', 'Delhi', 'Ahmedabad', 'Bangalore', 'Hyderabad'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--gray-500)', marginBottom: 8 }}>DURATION</label>
              <select value={duration} onChange={e => setDuration(e.target.value)} style={{ width: '100%', padding: '9px 12px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 13, outline: 'none' }}>
                {['All', '1-2 Nights', '3-4 Nights', '5-7 Nights', '7+ Nights'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }}>
            <div>
              {packages.map((p, i) => (
                <div key={i} className="card" style={{ marginBottom: 24, display: 'grid', gridTemplateColumns: '240px 1fr' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {p.badges.map(b => (
                      <span key={b} style={{ position: 'absolute', top: 10, left: 10, display: 'block', background: b === 'Best Seller' ? 'var(--gold)' : 'var(--navy)', color: b === 'Best Seller' ? 'var(--navy)' : '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, marginBottom: 4 }}>{b}</span>
                    ))}
                  </div>
                  <div style={{ padding: 20 }}>
                    <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 6 }}>{p.nights}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: 10 }}>{p.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                      {p.tags.map(t => <span key={t} style={{ background: 'var(--gray-100)', fontSize: 11, padding: '3px 8px', borderRadius: 4, fontWeight: 500 }}>{t}</span>)}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 12 }}>Valid Till: {p.valid}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: 11, color: 'var(--gray-500)' }}>Price Starts From</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>{p.price} <span style={{ fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--gray-500)' }}>per person</span></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <button className="btn btn-primary" style={{ padding: '7px 14px', fontSize: 12 }}>View Details</button>
                        <button onClick={() => alert('Connecting to +91 98250 81806...')} style={{ background: 'none', border: '1.5px solid var(--gray-200)', borderRadius: 6, padding: '6px 14px', fontSize: 12, cursor: 'pointer' }}>📞 Call Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow)', marginBottom: 20 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=100" alt="Agent" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Still Confused?</div>
                    <p style={{ fontSize: 13, color: 'var(--gray-700)', lineHeight: 1.6 }}>Let our experts help you plan your perfect holiday at zero extra cost!</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                  <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}>Enquire Now</button>
                  <a href="https://wa.me/919825081806" style={{ flex: 1, textAlign: 'center', background: '#25D366', color: '#fff', borderRadius: 8, padding: '10px', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>💬 WhatsApp</a>
                </div>
              </div>

              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Related Packages</h4>
                {['Goa Group Tour', 'Goa Honeymoon', 'Short Trip to Goa', 'Goa Luxury Stay', 'South Goa Tour'].map(t => (
                  <div key={t} style={{ padding: '8px 0', borderBottom: '1px solid var(--gray-200)', fontSize: 13, color: 'var(--navy)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    {t} <span style={{ color: 'var(--gold)' }}>→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Places to visit */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Places to visit in Goa</h2>
            <button style={{ background: 'none', border: 'none', color: 'var(--gold)', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>See All →</button>
          </div>
          <div className="grid-3">
            {places.map((p, i) => (
              <div key={i} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', position: 'relative', height: 200, cursor: 'pointer' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.7), transparent 50%)', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}>{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions about Goa Tour Packages</h2>
          <div style={{ maxWidth: 800 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--gray-200)', marginBottom: 4 }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--navy)' }}>
                  {f.q}
                  <span style={{ fontSize: 18, color: 'var(--gold)', flexShrink: 0, marginLeft: 12 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div style={{ padding: '0 0 16px', fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.7 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div style={{ background: 'var(--navy)', padding: '40px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.3rem', marginBottom: 8 }}>Get exclusive deals in your inbox</h3>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <input placeholder="Your email address" style={{ flex: 1, padding: '11px 16px', borderRadius: 8, border: 'none', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }} />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--gold)' }}>Flamingo Transworld Pvt. Ltd.</strong><br />
            201/202, Gala Business Centre, St. Xaviers College Corner, Ahmedabad 380 009<br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Mon–Sat · 10:30 AM – 7:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
