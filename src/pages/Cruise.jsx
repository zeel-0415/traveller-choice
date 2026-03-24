import React, { useState } from 'react';

const cruises = [
  {
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller', badgeColor: '#e8c97a',
    name: 'Caribbean Paradise', rating: 4.5, reviews: 1234,
    route: 'Miami, Bahamas, Jamaica', nights: '7 Nights', line: 'Royal Caribbean',
    price: '$1,299', desc: 'Experience the turquoise waters and white sand beaches of the Caribbean on our premium luxury cruise. Includes all meals, entertainment, and port excursions.',
    departure: 'Oct 15, 2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1551970634-747846a548cb?auto=format&fit=crop&w=800&q=80',
    badge: '15% Off', badgeColor: '#e0f0e0',
    name: 'Alaskan Wilderness', rating: 4.2, reviews: 876,
    route: 'Seattle, Juneau, Glacier Bay', nights: '10 Nights', line: 'Princess Cruises',
    price: '$1,899', desc: 'Witness breathtaking glaciers, wildlife, and stunning landscapes on this unforgettable Alaskan adventure. All-inclusive package with guided tours included.',
    departure: 'Jun 5, 2023',
  },
  {
    img: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=800&q=80',
    badge: 'Luxury', badgeColor: '#e0eaff',
    name: 'Mediterranean Discovery', rating: 4.9, reviews: 2145,
    route: 'Barcelona, Rome, Athens', nights: '12 Nights', line: 'Celebrity Cruises',
    price: '$2,499', desc: 'Explore the historic ports and beautiful coastlines of the Mediterranean. Luxury accommodations, gourmet dining, and exclusive shore excursions included.',
    departure: 'Aug 22, 2023',
  },
];

const cabins = [
  { id: 'interior', name: 'Interior Stateroom', desc: 'Comfortable cabin with all basic amenities', extra: 0 },
  { id: 'ocean', name: 'Ocean View', desc: 'Window with ocean view', extra: 299 },
  { id: 'balcony', name: 'Balcony Suite', desc: 'Private balcony with premium amenities', extra: 599 },
];

const addons = [
  { id: 'drinks', name: 'Premium Drink Package', desc: 'Unlimited beverages', price: 199 },
  { id: 'wifi', name: 'Wi-Fi Package', desc: 'High-speed internet for 2 devices', price: 89 },
  { id: 'insurance', name: 'Travel Protection', desc: 'Trip cancellation & medical insurance', price: 129 },
];

export default function Cruise() {
  const [selected, setSelected] = useState(cruises[0]);
  const [cabin, setCabin] = useState('interior');
  const [selectedAddons, setSelectedAddons] = useState(['insurance']);
  const [passengers] = useState(2);
  const [travelerForm, setTravelerForm] = useState({ first: '', last: '', email: '', phone: '' });
  const set = k => e => setTravelerForm({ ...travelerForm, [k]: e.target.value });

  const toggleAddon = (id) => setSelectedAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  const baseFare = parseInt(selected.price.replace('$', '').replace(',', '')) * passengers;
  const cabinExtra = cabins.find(c => c.id === cabin)?.extra || 0;
  const addonTotal = addons.filter(a => selectedAddons.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const taxes = Math.round(baseFare * 0.08);
  const total = baseFare + cabinExtra + addonTotal + taxes;

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Cruise</h1>
            <p className="page-banner-sub">Discover the world's most beautiful destinations with our exclusive cruise experiences</p>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div style={{ background: 'var(--white)', padding: '28px 0', boxShadow: '0 2px 16px rgba(10,22,40,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {[
              { label: 'Destination', type: 'select', opts: ['Any Destination', 'Caribbean', 'Mediterranean', 'Alaska', 'Northern Europe', 'Asia'] },
              { label: 'Departure Date', type: 'date' },
              { label: 'Duration', type: 'select', opts: ['Any Duration', '3-5 Nights', '6-9 Nights', '10+ Nights'] },
              { label: 'Passengers', type: 'select', opts: ['2 Adults', '1 Adult', '2 Adults, 1 Child', '2 Adults, 2 Children', 'Group (5+)'] },
            ].map((f, i) => (
              <div key={i} className="search-field" style={{ flex: 1, minWidth: 160 }}>
                <label>{f.label}</label>
                {f.type === 'select' ? (
                  <select style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                ) : (
                  <input type={f.type} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }} />
                )}
              </div>
            ))}
            <button className="btn btn-primary" style={{ padding: '10px 28px', alignSelf: 'flex-end' }}>Search Cruises</button>
          </div>
        </div>
      </div>

      {/* Featured Cruises */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Cruises</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {cruises.map((c, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'grid', gridTemplateColumns: '340px 1fr', cursor: 'pointer', border: selected.name === c.name ? '2px solid var(--gold)' : '2px solid transparent', transition: 'border 0.2s' }} onClick={() => setSelected(c)}>
                <div style={{ position: 'relative' }}>
                  <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 220 }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, background: c.badgeColor, color: '#333', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{c.badge}</span>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: 6 }}>{c.name}</h3>
                      <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 12 }}>⭐ {c.rating} ({c.reviews.toLocaleString()} reviews)</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--navy)' }}>{c.price}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>per person</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 14, fontSize: 13 }}>
                    <span>📍 {c.route}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 14, fontSize: 13, color: 'var(--gray-700)' }}>
                    <span>🌙 {c.nights}</span>
                    <span>🚢 {c.line}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 16 }}>{c.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>Next Departure: {c.departure}</div>
                    <button className="btn btn-primary" onClick={e => { e.stopPropagation(); setSelected(c); window.scrollTo({ top: 999999, behavior: 'smooth' }); }}>Select Cruise</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Complete Your Booking</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40 }}>
            <div>
              {/* Selected Cruise Summary */}
              <div style={{ background: 'var(--gray-100)', borderRadius: 'var(--radius)', padding: 20, marginBottom: 28 }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{selected.name}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 8 }}>{selected.nights} · {selected.line} · Departs {selected.departure}</div>
                <div style={{ fontSize: 14 }}>{passengers} Adults — <strong>{selected.price} × {passengers} = ${(baseFare).toLocaleString()}</strong></div>
              </div>

              {/* Traveler Info */}
              <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Traveler Information</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
                <div className="form-field"><label>First Name</label><input value={travelerForm.first} onChange={set('first')} placeholder="First Name" /></div>
                <div className="form-field"><label>Last Name</label><input value={travelerForm.last} onChange={set('last')} placeholder="Last Name" /></div>
                <div className="form-field"><label>Email Address</label><input type="email" value={travelerForm.email} onChange={set('email')} placeholder="email@example.com" /></div>
                <div className="form-field"><label>Phone Number</label><input type="tel" value={travelerForm.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" /></div>
              </div>

              {/* Cabin Selection */}
              <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Cabin Selection</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {cabins.map(c => (
                  <div key={c.id} onClick={() => setCabin(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, border: `2px solid ${cabin === c.id ? 'var(--gold)' : 'var(--gray-200)'}`, borderRadius: 'var(--radius)', cursor: 'pointer', background: cabin === c.id ? 'rgba(201,168,76,0.06)' : 'var(--white)', transition: 'all 0.2s' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${cabin === c.id ? 'var(--gold)' : 'var(--gray-200)'}`, background: cabin === c.id ? 'var(--gold)' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {cabin === c.id && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>{c.desc}</div>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{c.extra === 0 ? '+$0' : `+$${c.extra}`}</div>
                  </div>
                ))}
              </div>

              {/* Add-ons */}
              <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Add-ons</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {addons.map(a => (
                  <div key={a.id} onClick={() => toggleAddon(a.id)} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, border: `2px solid ${selectedAddons.includes(a.id) ? 'var(--gold)' : 'var(--gray-200)'}`, borderRadius: 'var(--radius)', cursor: 'pointer', background: selectedAddons.includes(a.id) ? 'rgba(201,168,76,0.06)' : 'var(--white)', transition: 'all 0.2s' }}>
                    <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${selectedAddons.includes(a.id) ? 'var(--gold)' : 'var(--gray-200)'}`, background: selectedAddons.includes(a.id) ? 'var(--gold)' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff' }}>
                      {selectedAddons.includes(a.id) && '✓'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{a.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>{a.desc}</div>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>+${a.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div>
              <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: 28, color: '#fff', position: 'sticky', top: 80 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 20, fontSize: '1rem', color: 'var(--gold)' }}>Price Summary</h4>
                {[
                  ['Cruise Fare (2 adults)', `$${baseFare.toLocaleString()}`],
                  ['Cabin Upgrade', cabinExtra > 0 ? `$${cabinExtra}` : '$0'],
                  ['Add-ons', addonTotal > 0 ? `$${addonTotal}` : '$0'],
                  ['Taxes & Fees', `$${taxes}`],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 14, color: 'rgba(255,255,255,0.75)' }}>
                    <span>{l}</span><span>{v}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.2rem', marginTop: 4 }}>
                  <span>Total</span><span style={{ color: 'var(--gold)' }}>${total.toLocaleString()}</span>
                </div>
                <button onClick={() => alert('Booking confirmed! Check your email.')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 24, padding: '14px', fontSize: 15, fontWeight: 700 }}>Complete Booking</button>
                <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>Secure booking · Best price guarantee · 24/7 support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
