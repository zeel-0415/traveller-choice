import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>TRAVELLER<span style={{ color: 'var(--gold)' }}>CHOICE</span></h2>
            <p>Your trusted partner for AI-powered travel planning. We make exploring the world seamless, from visa applications to luxury stays.</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {['About Us', 'Careers', 'Press', 'Blog', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              {['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy', 'Status'].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Top Routes</h4>
            <ul>
              {['Flights to London', 'Flights to Paris', 'Flights to Tokyo', 'Flights to New York', 'Flights to Dubai'].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright 2025 TRAVELLER CHOICE Inc. All rights reserved.</span>
          <span>English (US) | USD</span>
        </div>
      </div>
    </footer>
  );
}
