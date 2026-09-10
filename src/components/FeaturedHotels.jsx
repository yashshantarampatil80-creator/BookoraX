import React, { useState } from 'react';
import { Star, MapPin, Heart, ArrowRight, Check, Eye, Calendar, Sparkles } from 'lucide-react';

export default function FeaturedHotels({ 
  hotels, 
  favorites, 
  onToggleFavorite, 
  onViewDetails, 
  onBookNow,
  searchFilter 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Luxury Suites', 'Beach Resorts', 'Heritage Stays', 'City Center'];

  // Apply Search Filter & Category Filter
  const filteredHotels = hotels.filter((hotel) => {
    // Category match
    const categoryMatch = selectedCategory === 'All' || hotel.category === selectedCategory;
    
    // Search location match
    let locationMatch = true;
    if (searchFilter && searchFilter.location) {
      locationMatch = hotel.city.toLowerCase() === searchFilter.location.toLowerCase() ||
                      hotel.location.toLowerCase().includes(searchFilter.location.toLowerCase());
    }

    return categoryMatch && locationMatch;
  });

  return (
    <section id="hotels" className="featured-hotels-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="badge-burgundy mb-2">
            <Sparkles size={14} />
            <span>HANDPICKED COLLECTION</span>
          </div>
          <h2 className="section-title font-serif">Featured Stays</h2>
          <p className="section-subtitle">
            Handpicked hotels for your next unforgettable experience.
          </p>
        </div>

        {/* Active Search Results Notification Pill */}
        {searchFilter && searchFilter.location && (
          <div className="search-active-pill">
            <span>Showing stays in <strong>"{searchFilter.location}"</strong> ({filteredHotels.length} found)</span>
            <button className="clear-search-link" onClick={() => window.location.reload()}>Reset Filter</button>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? 'All Stays' : cat}
            </button>
          ))}
        </div>

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="hotels-grid">
            {filteredHotels.map((hotel) => {
              const isFav = favorites.includes(hotel.id);

              return (
                <div key={hotel.id} className="hotel-card">
                  
                  {/* Hotel Image & Badge Header */}
                  <div className="hotel-image-wrapper">
                    <img src={hotel.image} alt={hotel.name} className="hotel-card-img" />
                    <div className="hotel-img-overlay"></div>
                    
                    {/* Star Rating Badge */}
                    <div className="hotel-star-badge">
                      <Star size={14} className="star-icon-fill" />
                      <span>{hotel.rating}</span>
                      <span className="reviews-count">({hotel.reviewsCount})</span>
                    </div>

                    {/* Room Type Tag */}
                    <div className="hotel-room-tag">
                      {hotel.roomType}
                    </div>

                    {/* Favorite Heart Toggle Button */}
                    <button 
                      className={`favorite-btn ${isFav ? 'favorited' : ''}`}
                      onClick={() => onToggleFavorite(hotel.id)}
                      title={isFav ? "Remove from Favorites" : "Save to Favorites"}
                    >
                      <Heart size={18} className={isFav ? "fill-burgundy" : ""} />
                    </button>
                  </div>

                  {/* Hotel Body Info */}
                  <div className="hotel-card-body">
                    
                    <div className="hotel-location">
                      <MapPin size={14} className="icon-gold" />
                      <span>{hotel.location}</span>
                    </div>

                    <h3 className="hotel-title font-serif">{hotel.name}</h3>

                    <p className="hotel-description">
                      {hotel.description}
                    </p>

                    {/* Quick Amenities Icons Row */}
                    <div className="hotel-amenities-row">
                      {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="amenity-chip">
                          <Check size={12} className="text-gold" />
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer: Price + Action Buttons */}
                    <div className="hotel-card-footer">
                      
                      <div className="hotel-price-group">
                        <span className="price-label">Starting from</span>
                        <div className="price-amount">
                          ₹{hotel.pricePerNight.toLocaleString('en-IN')}
                          <span className="price-unit"> / night</span>
                        </div>
                      </div>

                      <div className="hotel-actions-group">
                        <button 
                          className="btn-view-details" 
                          onClick={() => onViewDetails(hotel)}
                        >
                          <Eye size={15} /> View Details
                        </button>
                        
                        <button 
                          className="btn-book-now" 
                          onClick={() => onBookNow(hotel)}
                        >
                          Book Now
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-results-card">
            <h3 className="font-serif">No Stays Found</h3>
            <p>We couldn't find any stays matching your selected criteria. Try exploring all destinations.</p>
            <button className="btn-primary mt-3" onClick={() => setSelectedCategory('All')}>
              View All Featured Stays
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
