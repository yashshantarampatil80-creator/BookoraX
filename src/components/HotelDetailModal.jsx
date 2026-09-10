import React, { useState } from 'react';
import { X, Star, MapPin, Check, Wifi, Coffee, Sparkles, Shield, ChevronRight, Phone } from 'lucide-react';

export default function HotelDetailModal({ hotel, onClose, onBookRoom }) {
  const [selectedImg, setSelectedImg] = useState(hotel.image);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  if (!hotel) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content hotel-detail-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {/* Gallery Header */}
        <div className="detail-gallery-container">
          <img src={selectedImg} alt={hotel.name} className="detail-main-img" />
          <div className="gallery-thumbnails-row">
            {hotel.gallery?.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt="Gallery thumbnail" 
                className={`thumb-img ${selectedImg === img ? 'active' : ''}`}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="detail-body">
          
          <div className="detail-header-row">
            <div>
              <div className="badge-burgundy mb-1">
                <Star size={12} className="star-icon-fill" />
                <span>{hotel.starRating}-Star Luxury Property</span>
              </div>
              <h2 className="detail-title font-serif">{hotel.name}</h2>
              <div className="detail-location-row">
                <MapPin size={14} className="icon-gold" />
                <span>{hotel.location}</span>
              </div>
            </div>

            <div className="detail-rating-box">
              <span className="rating-num">{hotel.rating}</span>
              <span className="rating-text">Superb ({hotel.reviewsCount} reviews)</span>
            </div>
          </div>

          <p className="detail-description-full">{hotel.description}</p>

          {/* Amenities Grid */}
          <div className="detail-amenities-section">
            <h4 className="detail-sub-title font-serif">Property Highlights &amp; Amenities</h4>
            <div className="amenities-grid-modal">
              {hotel.amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-item-modal">
                  <Check size={16} className="text-gold" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Room Selection Options */}
          <div className="detail-rooms-section">
            <h4 className="detail-sub-title font-serif">Available Rooms &amp; Suites</h4>
            <div className="rooms-list-container">
              {hotel.roomsAvailable.map((room, idx) => (
                <div 
                  key={idx} 
                  className={`room-option-card ${selectedRoomIndex === idx ? 'selected' : ''}`}
                  onClick={() => setSelectedRoomIndex(idx)}
                >
                  <div className="room-info">
                    <h5 className="room-name font-serif">{room.type}</h5>
                    <span className="room-bed-info">{room.bed} • Max {room.maxGuests} Guests</span>
                  </div>
                  
                  <div className="room-price-action">
                    <div className="room-price">
                      ₹{room.price.toLocaleString('en-IN')}
                      <span className="price-unit"> / night</span>
                    </div>
                    <button 
                      className="btn-select-room"
                      onClick={() => onBookRoom(hotel, room)}
                    >
                      Book Room <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Guarantees */}
          <div className="detail-footer-guarantee">
            <span>✓ Instant Confirmation</span>
            <span>✓ Free Cancellation up to 24h</span>
            <span>✓ Best Price Guaranteed</span>
          </div>

        </div>

      </div>
    </div>
  );
}
