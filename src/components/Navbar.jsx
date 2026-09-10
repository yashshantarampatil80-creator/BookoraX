import React, { useState, useEffect } from 'react';
import { Building2, Phone, User, Heart, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenCall, favoritesCount, onOpenFavorites, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo-group" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <div className="logo-icon-wrapper">
            <Building2 className="logo-icon" size={24} />
          </div>
          <div className="logo-text-group">
            <span className="brand-name font-serif">BookoraX</span>
            <span className="brand-tagline-mini">LUXURY STAYS</span>
          </div>
        </a>

        {/* Center / Right Desktop Navigation */}
        <nav className="desktop-nav">
          <button className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>Home</button>
          <button className={`nav-link ${activeSection === 'hotels' ? 'active' : ''}`} onClick={() => scrollToSection('hotels')}>Hotels</button>
          <button className={`nav-link ${activeSection === 'rooms' ? 'active' : ''}`} onClick={() => scrollToSection('hotels')}>Rooms</button>
          <button className={`nav-link ${activeSection === 'offers' ? 'active' : ''}`} onClick={() => scrollToSection('offers')}>Offers</button>
          <button className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('why-us')}>About Us</button>
          <button className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        {/* Right Side Actions */}
        <div className="nav-actions">
          {/* Wishlist Favorites */}
          <button 
            className="icon-btn-favorites" 
            onClick={onOpenFavorites}
            title="Saved Stays"
          >
            <Heart size={20} className={favoritesCount > 0 ? "fill-gold text-gold" : ""} />
            {favoritesCount > 0 && <span className="favorites-badge">{favoritesCount}</span>}
          </button>

          {/* Call to Book Button */}
          <button className="btn-call-nav" onClick={onOpenCall}>
            <Phone size={16} />
            <span className="btn-call-text">Call to Book</span>
          </button>

          {/* Auth Buttons */}
          <div className="auth-btns-group">
            <button className="btn-login-nav" onClick={() => onOpenAuth('login')}>
              Login
            </button>
            <button className="btn-signup-nav" onClick={() => onOpenAuth('signup')}>
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo-group">
                <div className="logo-icon-wrapper">
                  <Building2 className="logo-icon" size={22} />
                </div>
                <span className="brand-name font-serif">BookoraX</span>
              </div>
              <button className="close-drawer-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <p className="mobile-drawer-tagline">“Book Smart. Stay Easy. Experience More.”</p>

            <nav className="mobile-nav-links">
              <button onClick={() => scrollToSection('hero')}><span className="nav-num">01</span> Home <ChevronRight size={18} /></button>
              <button onClick={() => scrollToSection('hotels')}><span className="nav-num">02</span> Hotels <ChevronRight size={18} /></button>
              <button onClick={() => scrollToSection('hotels')}><span className="nav-num">03</span> Rooms & Suites <ChevronRight size={18} /></button>
              <button onClick={() => scrollToSection('offers')}><span className="nav-num">04</span> Exclusive Offers <ChevronRight size={18} /></button>
              <button onClick={() => scrollToSection('why-us')}><span className="nav-num">05</span> About Us <ChevronRight size={18} /></button>
              <button onClick={() => scrollToSection('contact')}><span className="nav-num">06</span> Contact <ChevronRight size={18} /></button>
            </nav>

            <div className="mobile-drawer-actions">
              <button className="btn-primary w-full" onClick={() => { setMobileMenuOpen(false); onOpenCall(); }}>
                <Phone size={18} /> Call to Book (24/7)
              </button>
              <div className="mobile-auth-row">
                <button className="btn-gold flex-1" onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}>
                  Login
                </button>
                <button className="btn-chocolate flex-1" onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
