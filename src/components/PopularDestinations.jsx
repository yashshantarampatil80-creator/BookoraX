import React from 'react';
import { DESTINATIONS } from '../data/hotels';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function PopularDestinations({ onSelectDestination }) {
  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="badge-gold mb-2">
            <Compass size={14} />
            <span>CURATED DESTINATIONS</span>
          </div>
          <h2 className="section-title font-serif">Explore Popular Destinations</h2>
          <p className="section-subtitle">
            Discover extraordinary locations from vibrant financial hubs to serene coastal retreats.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id} 
              className="destination-card"
              onClick={() => onSelectDestination(dest.name)}
            >
              {/* Destination Image */}
              <img src={dest.image} alt={dest.name} className="destination-img" />
              <div className="destination-overlay"></div>

              {/* Tag Badge */}
              <div className="destination-tag">
                <Sparkles size={12} className="text-gold" />
                <span>{dest.popularTag}</span>
              </div>

              {/* Content */}
              <div className="destination-content">
                <div className="destination-info">
                  <h3 className="destination-name font-serif">{dest.name}</h3>
                  <p className="destination-sub">{dest.subtitle}</p>
                  <span className="destination-count-badge">{dest.staysCount}</span>
                </div>

                <div className="destination-arrow-btn">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
