import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  { img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=300&q=80', name: 'Vietnam Saver Tour', price: 'Rs. 1,03,117' },
  { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80', name: 'Bali Discovery', price: 'Rs. 1,00,010' },
  { img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=300&q=80', name: 'Thailand Getaway', price: 'Rs. 45,500' },
];

const destinations = [
  { img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=300&q=80', name: 'South Africa', pkgs: '10+ Packages', price: 'From Rs. 1,50,000' },
  { img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=300&q=80', name: 'Japan', pkgs: '20+ Packages', price: 'From Rs. 1,85,000' },
  { img: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?auto=format&fit=crop&w=300&q=80', name: 'All Of Europe', pkgs: '50+ Packages', price: 'From Rs. 2,00,000' },
  { img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80', name: 'New Zealand', pkgs: '15+ Packages', price: 'From Rs. 3,15,500' },
  { img: 'https://images.unsplash.com/photo-1559592413-7cec4d0ea49b?auto=format&fit=crop&w=300&q=80', name: 'Vietnam', pkgs: '18+ Packages', price: 'From Rs. 55,000' },
  { img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=300&q=80', name: 'UAE - Dubai', pkgs: '100+ Packages', price: 'From Rs. 40,000' },
];

const testimonials = [
  {
    name: 'Ms. Stuti Patel',
    tour: 'Santa Europe',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'We had an unforgettable experience in Paris and Switzerland with Traveller Choice. The hotels were top notch and the service was exceptional throughout.',
  },
  {
    name: 'Mr. Dharmesh Shah',
    tour: 'Europe',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Me and my family had an amazing experience on our first trip. The management was excellent and everything was perfectly organized.',
  },
  {
    name: 'Ms. Priya Mehta',
    tour: 'Bali',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Bali with Traveller Choice was a dream. Every detail was taken care of beautifully and the prices were very competitive.',
  },
];

const visaDestinations = [
  { img: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=150&q=80', name: 'Singapore', tours: '50+ Tours' },
  { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=150&q=80', name: 'Paris', tours: '85+ Tours' },
  { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=150&q=80', name: 'Bali', tours: '120+ Tours' },
  { img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=150&q=80', name: 'Tokyo', tours: '60+ Tours' },
  { img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=150&q=80', name: 'Rome', tours: '45+ Tours' },
  { img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=150&q=80', name: 'New York', tours: '90+ Tours' },
  { img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=150&q=80', name: 'Santorini', tours: '30+ Tours' },
  { img: 'https://images.unsplash.com/photo-1512453979798-5ea932a23518?auto=format&fit=crop&w=150&q=80', name: 'Dubai', tours: '100+ Tours' },
  { img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=150&q=80', name: 'Sydney', tours: '20+ Tours' },
  { img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=150&q=80', name: 'Cairo', tours: '25+ Tours' },
];

const budgetPackages = [
  { img: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=300&q=80', nights: '4N 5D', name: 'Bali Honeymoon Special', loc: 'Bali (4N) | Pool Villa (1N)', price: 'Rs. 31,190' },
  { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=300&q=80', nights: '5N 6D', name: 'Simply Bali Seminyak', loc: 'Bali (5N)', price: 'Rs. 18,370' },
  { img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=300&q=80', nights: '4N 5D', name: 'Free And Easy Thailand', loc: 'Pattaya (2N) | Bangkok (2N)', price: 'Rs. 18,910' },
  { img: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=300&q=80', nights: '5N 6D', name: 'Vietnam Classic', loc: 'Hanoi (1N) | Ha Long (1N)', price: 'Rs. 37,280' },
  { img: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=300&q=80', nights: '3N 4D', name: 'Singapore Escape', loc: 'Singapore (3N)', price: 'Rs. 35,820' },
];

const articles = [
  { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80', title: "7-Day Bali Itinerary 2025: A First-Timer's Blueprint!", date: 'May 13, 2025', author: 'Siddharth Shah' },
  { img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=300&q=80', title: "A First-Timer's Guide to Dreamworld Queensland", date: 'May 11, 2025', author: 'Meeta Shah' },
  { img: 'https://images.unsplash.com/photo-1512453979798-5ea932a23518?auto=format&fit=crop&w=300&q=80', title: 'Yas Island Abu Dhabi 2025: Ultimate Guide', date: 'May 09, 2025', author: 'Mukti Solanki' },
  { img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=300&q=80', title: 'Khajuraho Temples Travel Guide 2025', date: 'Apr 30, 2025', author: 'Meeta Shah' },
  { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80', title: 'Why Gurudongmar Lake Should Be on Your 2025 List!', date: 'Apr 27, 2025', author: 'Mukti Solanki' },
];

const themes = [
  { img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=300&q=80', name: 'Super Saver' },
  { img: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=300&q=80', name: 'Winter Tours' },
  { img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=300&q=80', name: 'Honeymoon' },
  { img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80', name: 'Group Tours' },
  { img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80', name: 'Short Breaks' },
];

export default function Home() {
  const [tab, setTab] = useState('flights');
  const [budgetTab, setBudgetTab] = useState('50K');
  const [seasonTab, setSeasonTab] = useState('Summer Special');
  const [offerTab, setOfferTab] = useState('Tour Packages');

  return (
    <div>
      <div className="hero-banner">
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" alt="Travel" />
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-tag">Your Best Trip Planner</div>
            <h1 className="hero-title">
              Discover the
              <br />
              Unseen World.
            </h1>
            <p className="hero-desc">Don't just book a flight. Design an experience. Use our AI to curate personalized itineraries, visa guides, and luxury stays.</p>

            <div className="search-box">
              <div className="search-tabs">
                {['flights', 'hotels', 'rentals'].map((item) => (
                  <button
                    key={item}
                    className={`search-tab ${tab === item ? 'active' : ''}`}
                    onClick={() => setTab(item)}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>

              {tab === 'flights' && (
                <div className="search-form">
                  <div className="search-field">
                    <label>From</label>
                    <input placeholder="City or Airport" />
                  </div>
                  <div className="search-field">
                    <label>To</label>
                    <input placeholder="City or Airport" />
                  </div>
                  <div className="search-field">
                    <label>Departure</label>
                    <input type="date" />
                  </div>
                  <button className="btn btn-primary" style={{ alignSelf: 'flex-end', padding: '10px 24px' }}>
                    Search Flights
                  </button>
                </div>
              )}

              {tab === 'hotels' && (
                <div className="search-form">
                  <div className="search-field">
                    <label>Destination</label>
                    <input placeholder="City or Hotel" />
                  </div>
                  <div className="search-field">
                    <label>Check-in</label>
                    <input type="date" />
                  </div>
                  <div className="search-field">
                    <label>Guests</label>
                    <select>
                      <option>2 Adults, 1 Room</option>
                      <option>4 Adults, 2 Rooms</option>
                    </select>
                  </div>
                  <button className="btn btn-primary" style={{ alignSelf: 'flex-end', padding: '10px 24px' }}>
                    Find Stays
                  </button>
                </div>
              )}

              {tab === 'rentals' && (
                <div className="search-form">
                  <p style={{ padding: '8px 0', color: 'var(--gray-500)', fontSize: 14 }}>Luxury rentals coming soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Travel Guides &amp; Tips</h2>
          <div className="guides-grid">
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', minHeight: 320 }}>
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop" alt="" style={{ width: '100%', height: 320, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, background: 'linear-gradient(to top,rgba(10,22,40,0.85),transparent)' }}>
                <span className="badge badge-hot" style={{ marginBottom: 8 }}>
                  Tips
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem' }}>How to pack for a 2-week Europe trip</h3>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {articles.slice(0, 3).map((article, index) => (
                <div key={index} className="article-card">
                  <img src={article.img} alt="" />
                  <div>
                    <div className="article-card-title">{article.title}</div>
                    <div className="article-card-meta">{article.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Trending Now</h2>
          <p className="section-subtitle">Popular destinations this season</p>
          <div className="grid-3">
            {[
              { img: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?auto=format&fit=crop&w=800&q=80', name: 'Cappadocia, Turkey', sub: 'Hot air balloon season' },
              { img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', name: 'Agra, India', sub: 'Cultural heritage tours' },
              { img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80', name: 'The Maldives', sub: 'Luxury overwater villas' },
            ].map((destination, index) => (
              <div key={index} className="dest-tile">
                <img src={destination.img} alt={destination.name} />
                <div className="dest-tile-overlay">
                  <div className="dest-tile-name">{destination.name}</div>
                  <div className="dest-tile-sub">{destination.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)', overflow: 'hidden' }}>
        <div className="container">
          <h2 className="section-title">Explore Tour Packages by Theme</h2>
        </div>
        <div className="marquee-wrap" style={{ padding: '20px 0' }}>
          <div className="marquee-track">
            {[...themes, ...themes, ...themes].map((theme, index) => (
              <div key={index} className="theme-chip">
                <img src={theme.img} alt={theme.name} />
                <span>{theme.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Travel Offers by traveller</h2>
          <div className="filter-tabs" style={{ marginBottom: 32 }}>
            {['Tour Packages', 'Hotels'].map((item) => (
              <button key={item} className={`filter-tab ${offerTab === item ? 'active' : ''}`} onClick={() => setOfferTab(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {packages.map((pkg, index) => (
              <div key={index} className="card">
                <img className="card-img" src={pkg.img} alt={pkg.name} />
                <div className="card-body">
                  <div className="card-title">{pkg.name}</div>
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>Starting From</div>
                    <div className="card-price">{pkg.price}</div>
                  </div>
                  <button className="btn btn-dark" style={{ marginTop: 14, width: '100%', justifyContent: 'center', fontSize: 13 }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Top Trending Travel Destinations</h2>
          <div className="grid-3">
            {destinations.map((destination, index) => (
              <div key={index} className="dest-tile" style={{ height: 200 }}>
                <img src={destination.img} alt={destination.name} />
                <div className="dest-tile-overlay">
                  <div className="dest-tile-name" style={{ fontSize: '1.05rem' }}>
                    {destination.name}
                  </div>
                  <div className="dest-tile-sub">
                    {destination.pkgs} | {destination.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Happy Travellers</h2>
          <p className="section-subtitle">Beautiful Memories with Traveller Choice</p>
          <div className="grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="quote">"{testimonial.text}"</p>
                <div className="author">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-place">{testimonial.tour}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Easy-visa destinations</h2>
          <div className="visa-strip">
            {visaDestinations.map((destination, index) => (
              <Link key={index} to="/visa" className="visa-item">
                <img src={destination.img} alt={destination.name} />
                <span>{destination.name}</span>
                <small>{destination.tours}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Best Budget Travel Destinations</h2>
          <div className="filter-tabs">
            {['Under 50K', '50K - 1 Lac', '1 Lac - 2 Lac', 'More than 2 Lac'].map((item) => (
              <button
                key={item}
                className={`filter-tab ${budgetTab === item.split(' ')[1] || budgetTab === item ? 'active' : ''}`}
                onClick={() => setBudgetTab(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {budgetPackages.map((pkg, index) => (
              <div key={index} className="card">
                <div style={{ position: 'relative' }}>
                  <img className="card-img" src={pkg.img} alt={pkg.name} />
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(10,22,40,0.75)',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 20,
                    }}
                  >
                    {pkg.nights}
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-title">{pkg.name}</div>
                  <div className="card-subtitle">{pkg.loc}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <div>
                      <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>per person</span>
                      <div className="card-price">{pkg.price}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--gray-200)', padding: '7px 14px', fontSize: 12 }}>
                        Details
                      </button>
                      <button className="btn btn-primary" style={{ padding: '7px 14px', fontSize: 12 }}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Top Packages By Season</h2>
          <div className="filter-tabs">
            {['Summer Special', 'Winter Special'].map((item) => (
              <button key={item} className={`filter-tab ${seasonTab === item ? 'active' : ''}`} onClick={() => setSeasonTab(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {budgetPackages.map((pkg, index) => (
              <div key={index} className="card">
                <div style={{ position: 'relative' }}>
                  <img className="card-img" src={pkg.img} alt={pkg.name} />
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(10,22,40,0.75)',
                      color: '#fff',
                      fontSize: 11,
                      padding: '4px 10px',
                      borderRadius: 20,
                    }}
                  >
                    Private Tour | {seasonTab}
                  </span>
                </div>
                <div className="card-body">
                  <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 4 }}>{pkg.nights}</div>
                  <div className="card-title">{pkg.name}</div>
                  <div className="card-subtitle">{pkg.loc}</div>
                  <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="card-price">{pkg.price}</div>
                      <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>per person</span>
                    </div>
                    <button className="btn btn-dark" style={{ padding: '7px 14px', fontSize: 12 }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Trending travel articles</h2>
          <div className="grid-3" style={{ gap: 24 }}>
            {articles.map((article, index) => (
              <div key={index} className="card" style={{ cursor: 'pointer' }}>
                <img className="card-img" src={article.img} alt="" style={{ height: 180 }} />
                <div className="card-body">
                  <div className="card-title" style={{ fontSize: '0.95rem' }}>
                    {article.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--gray-500)', marginTop: 8 }}>
                    {article.date} | {article.author}
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
