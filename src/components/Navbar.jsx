import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Flights', to: '/flights' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Visa Services', to: '/visa' },
  { label: 'Cruise', to: '/cruise' },
  { label: 'Forex', to: '/forex' },
  { label: 'Contact', to: '/contact' },
];

const packageGroups = [
  {
    title: 'India Tours',
    items: [
      { label: 'Goa Packages', to: '/packages/goa' },
      { label: 'Kerala Backwaters' },
      { label: 'Himachal Special' },
      { label: 'Rajasthan Royal' },
    ],
  },
  {
    title: 'International',
    items: [
      { label: 'Bali Adventure' },
      { label: 'Thailand Getaway' },
      { label: 'Dubai Luxury' },
      { label: 'Europe Wonders' },
    ],
  },
  {
    title: 'By Theme',
    items: [
      { label: 'Honeymoon Specials' },
      { label: 'Family Holidays' },
      { label: 'Adventure Tours' },
      { label: 'Luxury Cruises' },
    ],
  },
];

function PackageItem({ item, className, onClick }) {
  if (item.to) {
    return (
      <Link to={item.to} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return <span className={`${className} ${className}--placeholder`}>{item.label}</span>;
}

export default function Navbar({ onSignIn, onJoin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopPackagesOpen, setDesktopPackagesOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isPackagesRoute = location.pathname.startsWith('/packages');

  useEffect(() => {
    setMenuOpen(false);
    setDesktopPackagesOpen(false);
    setMobilePackagesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const mobileAction = (callback) => () => {
    closeMenu();
    callback();
  };
  const isActive = (path) => (path === '/packages' ? isPackagesRoute : location.pathname === path);

  return (
    <nav className={`site-nav ${isHome ? 'site-nav--overlay' : 'site-nav--solid'}`}>
      <div className="site-nav__inner">
        <Link to="/" className="nav-brand" aria-label="Traveller Choice home">
          <span className="nav-brand-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21.5 13.2 13.9 11l-2-7a1.2 1.2 0 0 0-2.3 0l-1 3.4-3.4 1a1.2 1.2 0 0 0 0 2.3l7 2-2.2 7.6a1.1 1.1 0 0 0 1.6 1.2l3.7-2.1 2.5 2.5a1 1 0 0 0 1.7-.7v-3.6l2.8-1.6a1.2 1.2 0 0 0-.3-2.2Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="nav-brand-text">TRAVELLER CHOICE</span>
        </Link>

        <div className="desktop-nav">
          {primaryLinks.slice(0, 4).map((link) => (
            <Link key={link.to} to={link.to} className={`nav-link ${isActive(link.to) ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}

          <div
            className="nav-dropdown"
            onMouseEnter={() => setDesktopPackagesOpen(true)}
            onMouseLeave={() => setDesktopPackagesOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-link-button ${isPackagesRoute ? 'active' : ''}`}
              onClick={() => setDesktopPackagesOpen((open) => !open)}
            >
              <span>Travel Packages</span>
              <span className={`nav-chevron ${desktopPackagesOpen ? 'open' : ''}`} aria-hidden="true">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1 5 5 9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            {desktopPackagesOpen && (
              <div className="nav-dropdown-panel">
                {packageGroups.map((group) => (
                  <div key={group.title}>
                    <div className="nav-dropdown-title">{group.title}</div>
                    <div className="nav-dropdown-list">
                      {group.items.map((item) => (
                        <PackageItem key={item.label} item={item} className="nav-dropdown-link" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {primaryLinks.slice(4).map((link) => (
            <Link key={link.to} to={link.to} className={`nav-link ${isActive(link.to) ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-auth desktop-auth">
          <button type="button" className="nav-auth-signin" onClick={onSignIn}>
            Sign In
          </button>
          <button type="button" className="nav-auth-join" onClick={onJoin}>
            Join Free
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />

      <aside className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav-header">
          <Link to="/" className="nav-brand mobile-nav-brand" onClick={closeMenu}>
            <span className="nav-brand-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21.5 13.2 13.9 11l-2-7a1.2 1.2 0 0 0-2.3 0l-1 3.4-3.4 1a1.2 1.2 0 0 0 0 2.3l7 2-2.2 7.6a1.1 1.1 0 0 0 1.6 1.2l3.7-2.1 2.5 2.5a1 1 0 0 0 1.7-.7v-3.6l2.8-1.6a1.2 1.2 0 0 0-.3-2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="nav-brand-text">TRAVELLER CHOICE</span>
          </Link>

          <button type="button" className="mobile-nav-close" onClick={closeMenu} aria-label="Close menu">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="mobile-nav-scroll">
          {primaryLinks.slice(0, 4).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-nav-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            className={`mobile-nav-link mobile-nav-link--button ${isPackagesRoute ? 'active' : ''}`}
            onClick={() => setMobilePackagesOpen((open) => !open)}
          >
            <span>Travel Packages</span>
            <span className={`nav-chevron ${mobilePackagesOpen ? 'open' : ''}`} aria-hidden="true">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1 5 5 9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {mobilePackagesOpen && (
            <div className="mobile-package-list">
              {packageGroups.map((group) => (
                <div key={group.title} className="mobile-package-group">
                  <div className="mobile-package-title">{group.title}</div>
                  {group.items.map((item) => (
                    <PackageItem key={item.label} item={item} className="mobile-package-link" onClick={closeMenu} />
                  ))}
                </div>
              ))}
            </div>
          )}

          {primaryLinks.slice(4).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-nav-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mobile-nav-footer">
          <button type="button" className="mobile-nav-signin" onClick={mobileAction(onSignIn)}>
            Sign In
          </button>
          <button type="button" className="mobile-nav-join" onClick={mobileAction(onJoin)}>
            Join Free
          </button>
        </div>
      </aside>
    </nav>
  );
}
