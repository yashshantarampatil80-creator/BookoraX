import React from 'react';
import { Building2, Phone, Mail, MapPin, Globe, Share2, MessageSquare, Send, ExternalLink, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenCall, onOpenAuth }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Top Footer Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand & Tagline */}
          <div className="footer-col brand-col">
            <div className="brand-logo-group mb-3">
              <div className="logo-icon-wrapper">
                <Building2 className="logo-icon" size={24} />
              </div>
              <div className="logo-text-group">
                <span className="brand-name font-serif">BookoraX</span>
                <span className="brand-tagline-mini">LUXURY STAYS</span>
              </div>
            </div>

            <p className="footer-tagline">
              “Book Smart. Stay Easy. Experience More.”
            </p>

            <p className="footer-about-brief">
              India's premier luxury hotel booking platform offering handpicked 5-star properties, royal heritage manors, and private beach resorts.
            </p>

            {/* Social Media SVG Icons */}
            <div className="social-icons-row">
              <a href="#instagram" className="social-link" title="Instagram" onClick={(e) => e.preventDefault()}>
                <Globe size={18} />
              </a>
              <a href="#facebook" className="social-link" title="Facebook" onClick={(e) => e.preventDefault()}>
                <Share2 size={18} />
              </a>
              <a href="#linkedin" className="social-link" title="LinkedIn" onClick={(e) => e.preventDefault()}>
                <MessageSquare size={18} />
              </a>
              <a href="#twitter" className="social-link" title="Twitter" onClick={(e) => e.preventDefault()}>
                <Send size={18} />
              </a>
              <a href="#youtube" className="social-link" title="YouTube" onClick={(e) => e.preventDefault()}>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title font-serif">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#hotels">Hotels</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#why-us">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-col">
            <h4 className="footer-title font-serif">Support</h4>
            <ul className="footer-links-list">
              <li><a href="#help" onClick={(e) => { e.preventDefault(); alert("BookoraX 24/7 Help Center is available via call or chat."); }}>Help Center</a></li>
              <li><a href="#support" onClick={(e) => { e.preventDefault(); onOpenCall(); }}>Booking Support</a></li>
              <li><a href="#cancellation" onClick={(e) => { e.preventDefault(); alert("Free Cancellation available on select properties up to 24 hours before check-in."); }}>Cancellation Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); alert("BookoraX Terms & Conditions apply."); }}>Terms &amp; Conditions</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert("BookoraX protects user privacy with 256-bit SSL encryption."); }}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-title font-serif">Contact</h4>
            <ul className="contact-info-list">
              <li>
                <Phone size={16} className="text-gold" />
                <button className="contact-btn-link" onClick={onOpenCall}>
                  Call to Book: 1800-BOOKORAX
                </button>
              </li>
              <li>
                <Mail size={16} className="text-gold" />
                <a href="mailto:concierge@bookorax.com">concierge@bookorax.com</a>
              </li>
              <li>
                <MapPin size={16} className="text-gold" />
                <span>Marine Drive Towers, Mumbai, Maharashtra 400021</span>
              </li>
            </ul>

            <button className="btn-gold btn-sm mt-3 w-full" onClick={() => onOpenAuth('signup')}>
              Join BookoraX Club
            </button>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 BookoraX. All Rights Reserved.
          </p>

          <div className="footer-bottom-right">
            <span>Crafted with Elegance &amp; Distinction</span>
            <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
