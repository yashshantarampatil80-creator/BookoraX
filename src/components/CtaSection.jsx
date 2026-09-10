import React from 'react';
import { ArrowRight, Sparkles, Building2, Calendar } from 'lucide-react';

export default function CtaSection({ onExploreHotels, onBookStay }) {
  return (
    <section className="cta-section">
      <div className="container">
        
        <div className="cta-banner-card">
          <div className="cta-bg-glow"></div>

          <div className="cta-content-wrapper">
            
            <div className="badge-gold mb-3 inline-flex">
              <Sparkles size={14} />
              <span>START YOUR JOURNEY TODAY</span>
            </div>

            <h2 className="cta-title font-serif">
              Your Perfect Stay Is Just a Booking Away
            </h2>

            <p className="cta-subtitle">
              Explore hotels, compare rooms and reserve your stay with BookoraX.
            </p>

            <div className="cta-buttons-row">
              <button className="btn-cta-secondary" onClick={onExploreHotels}>
                <Building2 size={18} />
                <span>Explore Hotels</span>
              </button>

              <button className="btn-cta-primary" onClick={onBookStay}>
                <Calendar size={18} />
                <span>Book Your Stay</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
