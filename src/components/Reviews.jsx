import React from 'react';
import { REVIEWS } from '../data/hotels';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="badge-burgundy mb-2">
            <CheckCircle size={14} />
            <span>VERIFIED GUEST TESTIMONIALS</span>
          </div>
          <h2 className="section-title font-serif">What Our Guests Say</h2>
          <p className="section-subtitle">
            Real experiences and stories from discerning travelers who booked their stays with BookoraX.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              
              <Quote className="quote-watermark-icon" size={48} />

              {/* Rating Stars */}
              <div className="review-stars-row">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon-fill" />
                ))}
              </div>

              {/* Review Text */}
              <p className="review-comment">"{review.comment}"</p>

              {/* Stayed At Location Pill */}
              <div className="stay-location-pill">
                <MapPin size={12} className="icon-gold" />
                <span>Stayed at {review.hotelStayed}</span>
              </div>

              {/* Customer Profile Header */}
              <div className="review-author-row">
                <img src={review.avatar} alt={review.name} className="author-avatar" />
                <div>
                  <h4 className="author-name font-serif">{review.name}</h4>
                  <span className="author-city">{review.city}, Verified Guest</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
