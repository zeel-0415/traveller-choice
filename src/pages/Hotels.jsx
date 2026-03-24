import React, { useState } from 'react';

const hotels = [
  { img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop', name:'The Ritz Carlton', loc:'New York, NY', price:'$399/night', rating:4.8 },
  { img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop', name:'Boutique Hotel du Louvre', loc:'Paris, France', price:'$279/night', rating:4.6 },
  { img:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop', name:'Bali Beach Resort', loc:'Bali, Indonesia', price:'$229/night', rating:4.7 },
  { img:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80', name:'Maldives Overwater Villa', loc:'Maldives', price:'$599/night', rating:4.9 },
  { img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80', name:'Goa Beach Resort', loc:'Goa, India', price:'$120/night', rating:4.4 },
  { img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', name:'Four Seasons Bali', loc:'Ubud, Bali', price:'$450/night', rating:4.9 },
];

export default function Hotels() {
  const [dest, setDest] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState('1 Room, 2 Adults');

  return (
    <div>
      <div className="page-banner">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" alt="" />
        <div className="container">
          <div className="page-banner-content">
            <h1 className="page-banner-title">Find Your Perfect Stay</h1>
            <p className="page-banner-sub">Discover hotels, resorts, and unique accommodations worldwide</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div style={{background:'var(--white)',padding:'32px 0',boxShadow:'0 2px 16px rgba(10,22,40,0.06)'}}>
        <div className="container">
          <div style={{display:'flex',gap:16,flexWrap:'wrap',alignItems:'flex-end'}}>
            <div className="search-field" style={{flex:2,minWidth:200}}>
              <label>Destination</label>
              <input value={dest} onChange={e=>setDest(e.target.value)} placeholder="City, hotel, or area" />
            </div>
            <div className="search-field">
              <label>Check-in</label>
              <input type="date" value={checkin} onChange={e=>setCheckin(e.target.value)} />
            </div>
            <div className="search-field">
              <label>Check-out</label>
              <input type="date" value={checkout} onChange={e=>setCheckout(e.target.value)} />
            </div>
            <div className="search-field">
              <label>Guests & Rooms</label>
              <select value={guests} onChange={e=>setGuests(e.target.value)}>
                <option>1 Room, 2 Adults</option>
                <option>2 Rooms, 4 Adults</option>
                <option>1 Room, 1 Adult</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{padding:'10px 28px',alignSelf:'flex-end'}}>Search Hotels</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Hotels</h2>
          <p className="section-subtitle">Handpicked luxury stays around the world</p>
          <div className="grid-3">
            {hotels.map((h,i)=>(
              <div key={i} className="card">
                <div style={{position:'relative'}}>
                  <img className="card-img" src={h.img} alt={h.name} />
                  <div style={{position:'absolute',top:12,right:12,background:'rgba(10,22,40,0.8)',color:'#fff',borderRadius:20,padding:'4px 10px',fontSize:12,fontWeight:600}}>
                    ⭐ {h.rating}
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title">{h.name}</div>
                  <div className="card-subtitle">📍 {h.loc}</div>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
                    <div className="card-price">{h.price}</div>
                    <button className="btn btn-dark" style={{padding:'8px 16px',fontSize:12}}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
