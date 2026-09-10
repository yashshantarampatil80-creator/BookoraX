import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';

export default function HeroSearch({ onSearch }) {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-18');
  
  // Guest Popover State
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guestPopoverOpen, setGuestPopoverOpen] = useState(false);

  const locationsList = ['Mumbai', 'Pune', 'Goa', 'Kolhapur', 'Hyderabad', 'Bengaluru'];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      location: location.trim(),
      checkIn,
      checkOut,
      guestsCount: adults + childrenCount,
      roomsCount: rooms
    });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Image with Dark/Burgundy Overlay */}
      <div className="hero-bg-overlay"></div>
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=90" 
        alt="Luxury Hotel Exterior" 
        className="hero-bg-image"
      />

      <div className="container hero-container">
        
        {/* Top Luxury Pill Tag */}
        <div className="hero-badge-wrapper animate-fade-in">
          <div className="badge-gold">
            <Sparkles size={14} className="text-gold" />
            <span>EXCLUSIVITY &amp; UNMATCHED LUXURY</span>
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="hero-title font-serif animate-fade-in">
          Find Your Perfect Stay
        </h1>

        <p className="hero-subtitle animate-fade-in">
          Discover comfortable stays, luxury rooms and unforgettable experiences with BookoraX.
        </p>

        {/* Rounded Modern Search Box Panel */}
        <div className="search-box-panel glass-panel animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="search-form-grid">
            
            {/* Field 1: Location */}
            <div className="search-field-group">
              <label className="field-label">
                <MapPin size={16} className="icon-gold" />
                <span>Location</span>
              </label>
              <div className="field-input-wrap">
                <select 
                  className="search-select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Where are you going?</option>
                  {locationsList.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}, India
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 2: Check-in */}
            <div className="search-field-group">
              <label className="field-label">
                <Calendar size={16} className="icon-gold" />
                <span>Check-in</span>
              </label>
              <div className="field-input-wrap">
                <input 
                  type="date"
                  className="search-input"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Check-in date"
                />
              </div>
            </div>

            {/* Field 3: Check-out */}
            <div className="search-field-group">
              <label className="field-label">
                <Calendar size={16} className="icon-gold" />
                <span>Check-out</span>
              </label>
              <div className="field-input-wrap">
                <input 
                  type="date"
                  className="search-input"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="Check-out date"
                />
              </div>
            </div>

            {/* Field 4: Guests & Rooms */}
            <div className="search-field-group relative-wrap">
              <label className="field-label">
                <Users size={16} className="icon-gold" />
                <span>Guests &amp; Rooms</span>
              </label>
              
              <button 
                type="button" 
                className="guest-trigger-btn"
                onClick={() => setGuestPopoverOpen(!guestPopoverOpen)}
              >
                <span>{adults + childrenCount} Guests, {rooms} Room</span>
                <ChevronDown size={16} className="icon-subtle" />
              </button>

              {/* Guest Selector Popover */}
              {guestPopoverOpen && (
                <div className="guest-popover-card">
                  <div className="popover-row">
                    <div>
                      <div className="popover-title">Adults</div>
                      <div className="popover-sub">Ages 12+</div>
                    </div>
                    <div className="counter-row">
                      <button 
                        type="button" 
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                      >-</button>
                      <span>{adults}</span>
                      <button 
                        type="button" 
                        onClick={() => setAdults(adults + 1)}
                      >+</button>
                    </div>
                  </div>

                  <div className="popover-row">
                    <div>
                      <div className="popover-title">Children</div>
                      <div className="popover-sub">Ages 0-11</div>
                    </div>
                    <div className="counter-row">
                      <button 
                        type="button" 
                        onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                        disabled={childrenCount <= 0}
                      >-</button>
                      <span>{childrenCount}</span>
                      <button 
                        type="button" 
                        onClick={() => setChildrenCount(childrenCount + 1)}
                      >+</button>
                    </div>
                  </div>

                  <div className="popover-row">
                    <div>
                      <div className="popover-title">Rooms</div>
                      <div className="popover-sub">Select rooms</div>
                    </div>
                    <div className="counter-row">
                      <button 
                        type="button" 
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                        disabled={rooms <= 1}
                      >-</button>
                      <span>{rooms}</span>
                      <button 
                        type="button" 
                        onClick={() => setRooms(rooms + 1)}
                      >+</button>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn-primary w-full mt-2 py-2"
                    onClick={() => setGuestPopoverOpen(false)}
                  >
                    Apply Selection
                  </button>
                </div>
              )}
            </div>

            {/* Field 5: Search Hotels Button */}
            <div className="search-btn-wrapper">
              <button type="submit" className="search-hotels-btn">
                <Search size={20} />
                <span>Search Hotels</span>
              </button>
            </div>

          </form>
        </div>

        {/* Key Trust Highlights */}
        <div className="hero-trust-bar animate-fade-in">
          <div className="trust-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Over 12,000+ Verified Stays</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Best Price Guarantee</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Zero Hidden Booking Fees</span>
          </div>
        </div>

      </div>
    </section>
  );
}
