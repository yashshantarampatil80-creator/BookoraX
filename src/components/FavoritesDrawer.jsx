import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

export default function FavoritesDrawer({ favorites, hotels, onClose, onRemoveFavorite, onBookNow }) {
  const favoriteHotels = hotels.filter((h) => favorites.includes(h.id));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content drawer-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="drawer-header">
          <div className="flex items-center gap-2">
            <Heart size={20} className="fill-burgundy text-burgundy" />
            <h3 className="font-serif drawer-title">Your Saved Stays ({favoriteHotels.length})</h3>
          </div>
          <button className="close-drawer-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="drawer-body">
          {favoriteHotels.length > 0 ? (
            <div className="fav-hotels-list">
              {favoriteHotels.map((hotel) => (
                <div key={hotel.id} className="fav-hotel-card">
                  <img src={hotel.image} alt={hotel.name} className="fav-thumb" />
                  
                  <div className="fav-info">
                    <h4 className="font-serif fav-name">{hotel.name}</h4>
                    <span className="fav-location">{hotel.location}</span>
                    <span className="fav-price">₹{hotel.pricePerNight.toLocaleString('en-IN')} / night</span>
                  </div>

                  <div className="fav-actions">
                    <button 
                      className="btn-book-now btn-sm"
                      onClick={() => { onClose(); onBookNow(hotel); }}
                    >
                      Book
                    </button>
                    <button 
                      className="btn-remove-fav"
                      onClick={() => onRemoveFavorite(hotel.id)}
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-fav-box">
              <Heart size={40} className="text-muted" />
              <h4 className="font-serif">No Saved Hotels Yet</h4>
              <p>Click the heart icon on any hotel card to save it for easy access later.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
