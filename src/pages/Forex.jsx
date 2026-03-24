import React, { useState } from 'react';

const rates = [
  { id: 'usd-card', name: 'USD Forex Card', type: 'Prepaid travel card', currency: 'USD', rate: 91.85, effective: 90.05 },
  { id: 'usd-cash', name: 'USD Cash', type: 'Physical currency notes', currency: 'USD', rate: 92.10, effective: 90.25 },
  { id: 'eur-card', name: 'EUR Forex Card', type: 'Prepaid travel card', currency: 'EUR', rate: 98.45, effective: 96.50 },
  { id: 'gbp-card', name: 'GBP Forex Card', type: 'Prepaid travel card', currency: 'GBP', rate: 115.20, effective: 113.10 },
];

const services = [
  { icon: '💳', name: 'Exchange Currency', sub: 'Buy/Sell forex cards & notes' },
  { icon: '🔄', name: 'Reload/Unload Forex Card', sub: 'Manage your travel card' },
  { icon: '📤', name: 'Transfer Money Abroad', sub: 'Send money internationally' },
  { icon: '📱', name: 'International SIM Card', sub: 'Stay connected globally' },
  { icon: '🏢', name: 'Corporate Solutions', sub: 'Bulk forex for businesses' },
  { icon: '🛡️', name: 'Travel Insurance', sub: 'Comprehensive coverage' },
];

export default function Forex() {
  const [activeTab, setActiveTab] = useState('forex');
  const [selectedRate, setSelectedRate] = useState(rates[0]);
  const [amount, setAmount] = useState(100);
  const [city, setCity] = useState('Mumbai');
  const [showAlert, setShowAlert] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [alertForm, setAlertForm] = useState({ pair: 'USD/INR', target: '', type: 'above' });
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '', time: '', query: 'Forex Card' });

  const inrAmount = Math.round(amount * selectedRate.effective);
  const savings = Math.round(amount * (selectedRate.rate - selectedRate.effective));

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">FOREX Services</h1>
            <p className="page-banner-sub">Best exchange rates with instant processing</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Service Tabs */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {[['forex', '💳 Forex Card'], ['transfer', '📤 Transfer Money'], ['sim', '📱 International SIM'], ['insurance', '🛡️ Travel Insurance']].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} className={`filter-tab ${activeTab === k ? 'active' : ''}`}>{l}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }}>
            {/* Main Panel */}
            <div>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow)', marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>Buy Forex Cards & Currency</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf50' }} />
                    <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>Live rates · updates every 60s</span>
                  </div>
                </div>

                <div className="form-field">
                  <label>Select City</label>
                  <select value={city} onChange={e => setCity(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                    {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>

                {/* Rate Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0' }}>
                  {rates.map(r => (
                    <div key={r.id} onClick={() => setSelectedRate(r)} style={{ padding: 16, border: `2px solid ${selectedRate.id === r.id ? 'var(--gold)' : 'var(--gray-200)'}`, borderRadius: 'var(--radius)', cursor: 'pointer', background: selectedRate.id === r.id ? 'rgba(201,168,76,0.06)' : 'var(--white)', transition: 'all 0.2s' }}>
                      <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--gray-500)', marginBottom: 8 }}>{r.type}</div>
                      <div style={{ fontSize: 12 }}>Rate: <strong>₹{r.rate}</strong></div>
                      <div style={{ fontSize: 12, color: 'var(--gold)' }}>Effective: <strong>₹{r.effective}</strong></div>
                    </div>
                  ))}
                </div>

                {/* Amount Input */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                  <div className="form-field">
                    <label>{selectedRate.currency} Amount</label>
                    <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }} />
                    <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                      {[100, 500, 1000, 5000].map(v => (
                        <button key={v} onClick={() => setAmount(v)} style={{ padding: '4px 10px', border: '1px solid var(--gray-200)', borderRadius: 16, fontSize: 11, cursor: 'pointer', background: amount === v ? 'var(--navy)' : 'var(--white)', color: amount === v ? '#fff' : 'var(--gray-700)' }}>${v}</button>
                      ))}
                    </div>
                  </div>
                  <div className="form-field">
                    <label>INR Amount</label>
                    <div style={{ padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontSize: 14, fontWeight: 700, color: 'var(--navy)', background: 'var(--gray-100)' }}>₹{inrAmount.toLocaleString()}</div>
                    <div style={{ fontSize: 11, color: 'var(--gray-500)', marginTop: 6 }}>Amount inclusive of all charges</div>
                  </div>
                </div>

                {/* Rate Info */}
                <div style={{ background: 'var(--gray-100)', borderRadius: 'var(--radius)', padding: 16, marginBottom: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, textAlign: 'center' }}>
                    <div><div style={{ fontSize: 11, color: 'var(--gray-500)' }}>Exchange Rate</div><div style={{ fontWeight: 700 }}>₹{selectedRate.rate}</div></div>
                    <div><div style={{ fontSize: 11, color: 'var(--gray-500)' }}>Effective Rate</div><div style={{ fontWeight: 700, color: 'var(--gold)' }}>₹{selectedRate.effective}</div></div>
                    <div><div style={{ fontSize: 11, color: 'var(--gray-500)' }}>You Save</div><div style={{ fontWeight: 700, color: '#2a7a2a' }}>₹{savings}</div></div>
                  </div>
                </div>

                {/* Apply Promo */}
                <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                  <input placeholder="Apply Promo Code" style={{ flex: 1, padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }} />
                  <button className="btn btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--gray-200)' }}>Apply</button>
                </div>

                <button onClick={() => alert(`Booking confirmed for ₹${inrAmount.toLocaleString()}!`)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: 15, fontWeight: 700 }}>
                  Book Now for ₹{inrAmount.toLocaleString()}
                </button>
              </div>

              {/* Student Offer */}
              <div style={{ background: 'linear-gradient(135deg, #0a1628, #1a3060)', borderRadius: 'var(--radius-lg)', padding: 28, color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>STUDENT SEASON SPECIAL · Promo: REMITSPL</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 12 }}>Enjoy up to ₹15,000 cashback on Money Transfers</h3>
                    {['Save big on university fees, GIC & living expenses', 'Lowest Rate Guarantee', 'Secure transfers via trusted banks & RBI-authorized dealers'].map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                        <span style={{ color: 'var(--gold)' }}>✓</span> {p}
                      </div>
                    ))}
                    <button className="btn btn-primary" style={{ marginTop: 16 }}>Check Eligibility</button>
                  </div>
                  <div style={{ textAlign: 'center', minWidth: 80 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>₹15K</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Cashback</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Valid till Dec 31, 2023</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Rate Alert */}
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow)', marginBottom: 20 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 4 }}>🔔 Set Rate Alert</h4>
                <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 16 }}>Get notified when the exchange rate reaches your target.</p>
                <div className="form-field">
                  <label>Currency Pair</label>
                  <select value={alertForm.pair} onChange={e => setAlertForm({ ...alertForm, pair: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                    {['USD/INR (US Dollar to Indian Rupee)', 'EUR/INR (Euro to Indian Rupee)', 'GBP/INR (British Pound to Indian Rupee)', 'AUD/INR (Australian Dollar to Indian Rupee)'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-field"><label>Target Rate (₹)</label><input type="number" value={alertForm.target} onChange={e => setAlertForm({ ...alertForm, target: e.target.value })} placeholder="e.g. 90.00" /></div>
                <div className="form-field">
                  <label>Alert Type</label>
                  <select value={alertForm.type} onChange={e => setAlertForm({ ...alertForm, type: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                    <option value="above">When rate goes above target</option>
                    <option value="below">When rate goes below target</option>
                  </select>
                </div>
                <button onClick={() => alert('Rate alert set!')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Set Alert</button>
              </div>

              {/* Request Callback */}
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow)', marginBottom: 20 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 4 }}>📞 Request Callback</h4>
                <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 16 }}>Our forex expert will call you within 30 minutes.</p>
                <div className="form-field"><label>Name</label><input value={callbackForm.name} onChange={e => setCallbackForm({ ...callbackForm, name: e.target.value })} placeholder="Your Name" /></div>
                <div className="form-field"><label>Phone Number</label><input type="tel" value={callbackForm.phone} onChange={e => setCallbackForm({ ...callbackForm, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" /></div>
                <div className="form-field">
                  <label>Preferred Time</label>
                  <select value={callbackForm.time} onChange={e => setCallbackForm({ ...callbackForm, time: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                    <option>As soon as possible</option>
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Query Type</label>
                  <select value={callbackForm.query} onChange={e => setCallbackForm({ ...callbackForm, query: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--gray-200)', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none' }}>
                    {['Forex Card', 'Currency Notes', 'Money Transfer', 'Travel Insurance', 'Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <button onClick={() => alert('Callback requested!')} className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>Request Callback</button>
              </div>

              {/* Services */}
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Our Services</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {services.map(s => (
                    <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px', borderRadius: 8, cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-100)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <span style={{ fontSize: 20 }}>{s.icon}</span>
                      <div><div style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</div><div style={{ fontSize: 11, color: 'var(--gray-500)' }}>{s.sub}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
