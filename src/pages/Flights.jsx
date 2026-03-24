import React, { useState } from 'react';

export default function Flights() {
  const [form, setForm] = useState({ name:'', email:'', contact:'', city:'', ticket:'oneway', from:'', to:'', msg:'' });
  const set = k => e => setForm({...form, [k]: e.target.value});

  const routes = ['Ahmedabad - Delhi','Delhi - Chennai','Mumbai - Goa','Ahmedabad - Kolkata','Delhi - Goa'];

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Book Your Next Flight with Confidence</h1>
            <p className="page-banner-sub">Compare airlines, discover the best fares, and fly worldwide</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48}}>
            {/* Inquiry Form */}
            <div style={{background:'var(--white)', borderRadius:'var(--radius-lg)', padding:36, boxShadow:'var(--shadow)'}}>
              <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', marginBottom:24}}>Flight Enquiry</h2>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
                {[['Full Name','name','text'],['Email ID','email','email'],['Contact','contact','tel'],['Customer City','city','text']].map(([l,k,t])=>(
                  <div className="form-field" key={k}>
                    <label>{l}</label>
                    <input type={t} value={form[k]} onChange={set(k)} placeholder={l} />
                  </div>
                ))}
              </div>
              <div className="form-field" style={{marginTop:8}}>
                <label>Ticket Type</label>
                <div style={{display:'flex',gap:20,marginTop:6}}>
                  {['oneway','roundtrip'].map(v=>(
                    <label key={v} style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',fontSize:14}}>
                      <input type="radio" name="ticket" value={v} checked={form.ticket===v} onChange={set('ticket')} />
                      {v==='oneway'?'One Way':'Round Trip'}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:4}}>
                <div className="form-field"><label>From City</label><input value={form.from} onChange={set('from')} placeholder="Departure City" /></div>
                <div className="form-field"><label>To City</label><input value={form.to} onChange={set('to')} placeholder="Arrival City" /></div>
              </div>
              <div className="form-field">
                <label>Message or Query</label>
                <textarea value={form.msg} onChange={set('msg')} rows={3} placeholder="Any special requirements..." style={{width:'100%',padding:'10px 14px',border:'1.5px solid var(--gray-200)',borderRadius:8,fontFamily:'var(--font-body)',fontSize:14,resize:'vertical',outline:'none'}} />
              </div>
              <button onClick={()=>alert('Inquiry sent!')} className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:8,padding:'13px'}}>SEND INQUIRY</button>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow)',marginBottom:24}}>
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=600" alt="" style={{width:'100%',height:180,objectFit:'cover'}} />
                <div style={{padding:20,background:'var(--white)'}}>
                  <div style={{fontSize:11,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>GET BEST AIR FARES</div>
                  <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.1rem',marginBottom:8}}>Save on travel with us</h3>
                  <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:16}}>
                    {routes.map(r=>(
                      <span key={r} style={{background:'var(--gray-100)',borderRadius:20,padding:'4px 12px',fontSize:12,fontWeight:500,cursor:'pointer'}}>{r}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:24,boxShadow:'var(--shadow)',marginBottom:24}}>
                <h4 style={{fontWeight:700,marginBottom:16}}>📍 Find Us Near You</h4>
                <div style={{fontSize:13,lineHeight:1.7,color:'var(--gray-700)'}}>
                  <strong>Flamingo Transworld Pvt. Ltd.</strong><br/>
                  201/202, Gale Business Centre, Nr. Xavier's College Corner, Ahmedabad 380 009. Gujarat, India.<br/>
                  Mon–Sat | 10:30 AM – 7:30 PM
                </div>
              </div>

              <div style={{background:'var(--navy)',borderRadius:'var(--radius-lg)',padding:24,color:'#fff'}}>
                <h4 style={{fontWeight:700,marginBottom:16}}>📞 Customer Care</h4>
                <div style={{fontSize:14,display:'flex',flexDirection:'column',gap:12}}>
                  <a href="tel:+919825081806" style={{color:'var(--gold)',fontWeight:600}}>+91 98250 81806</a>
                  <a href="https://wa.me/919825081806" style={{background:'#25D366',color:'#fff',padding:'10px 16px',borderRadius:8,fontWeight:500,textAlign:'center',fontSize:13}}>💬 Chat on WhatsApp</a>
                  <button onClick={()=>alert('Inquiry form above!')} style={{background:'var(--gold)',color:'var(--navy)',padding:'10px 16px',borderRadius:8,fontWeight:600,border:'none',cursor:'pointer',fontSize:13}}>✉ Send an Inquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
