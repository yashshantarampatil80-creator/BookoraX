import React, { useState } from 'react';
import { OFFERS } from '../data/hotels';
import { Tag, Copy, Check, Gift, Sparkles, Clock, ArrowRight } from 'lucide-react';

export default function SpecialOffers({ onBookWithCode, onToast }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onToast(`Promo code "${code}" copied to clipboard!`);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="offers" className="offers-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center light-text">
          <div className="badge-gold mb-2">
            <Gift size={14} />
            <span>UNMISSABLE PRIVILEGES</span>
          </div>
          <h2 className="section-title font-serif text-white">Exclusive Offers</h2>
          <p className="section-subtitle text-ivory">
            Enjoy special deals and make your stay more memorable.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="offers-grid">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id} 
              className="offer-card"
              style={{ background: offer.colorGradient }}
            >
              {/* Top Row: Badge & Expiration */}
              <div className="offer-card-top">
                <span className="offer-discount-badge">{offer.badge}</span>
                <div className="offer-validity">
                  <Clock size={12} />
                  <span>{offer.validity}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="offer-title font-serif">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>

              {/* Perks Checklist */}
              <div className="offer-perks-list">
                {offer.perks.map((perk, i) => (
                  <div key={i} className="offer-perk-item">
                    <Sparkles size={12} className="text-gold" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* Promo Code Copy Bar & Action */}
              <div className="offer-card-bottom">
                
                <div className="promo-code-bar">
                  <div className="code-text-group">
                    <span className="code-label">CODE:</span>
                    <span className="code-value">{offer.code}</span>
                  </div>
                  <button 
                    className="btn-copy-code"
                    onClick={() => handleCopyCode(offer.code)}
                    title="Copy Code"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check size={14} className="text-green" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <button 
                  className="btn-offer-book"
                  onClick={() => onBookWithCode(offer.code)}
                >
                  Book Now <ArrowRight size={16} />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
