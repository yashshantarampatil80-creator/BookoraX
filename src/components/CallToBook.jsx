import React from 'react';
import { PhoneCall, Phone, Clock, Shield, Sparkles } from 'lucide-react';

export default function CallToBook({ onOpenCall }) {
  return (
    <section id="contact" className="call-to-book-section">
      <div className="container">
        
        <div className="call-to-book-card">
          <div className="call-card-bg-overlay"></div>
          
          <div className="call-card-content">
            
            {/* Phone Icon Badge */}
            <div className="phone-icon-pulse-wrapper">
              <div className="phone-icon-outer-ring"></div>
              <div className="phone-icon-box">
                <PhoneCall size={38} className="phone-main-icon" />
              </div>
            </div>

            {/* Content Group */}
            <div className="call-text-group">
              <div className="badge-gold mb-2 inline-flex">
                <Sparkles size={12} />
                <span>PERSONALIZED ASSISTANCE</span>
              </div>
              <h2 className="call-title font-serif">Prefer to Book by Phone?</h2>
              <p className="call-subtitle">
                Our team is ready to help you find the perfect stay, answer queries, and arrange special requests.
              </p>
              
              <div className="call-perks-inline">
                <span className="perk-pill"><Clock size={12} /> 24/7 Hotline</span>
                <span className="perk-pill"><Shield size={12} /> Zero Service Fee</span>
                <span className="perk-pill">Instant SMS Confirmation</span>
              </div>
            </div>

            {/* Call Action Button */}
            <div className="call-action-group">
              <button className="btn-call-to-book" onClick={onOpenCall}>
                <Phone size={20} />
                <span>Call to Book</span>
              </button>
              <span className="call-number-text">Toll-Free: 1800-BOOKORAX</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
