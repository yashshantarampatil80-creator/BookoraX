import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import FeaturedHotels from './components/FeaturedHotels';
import PopularDestinations from './components/PopularDestinations';
import SpecialOffers from './components/SpecialOffers';
import WhyChooseUs from './components/WhyChooseUs';
import CallToBook from './components/CallToBook';
import Reviews from './components/Reviews';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// Modals & Toast
import HotelDetailModal from './components/HotelDetailModal';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import CallModal from './components/CallModal';
import FavoritesDrawer from './components/FavoritesDrawer';
import Toast from './components/Toast';

// Data
import { HOTELS_DATA } from './data/hotels';

// Styles
import './components/Navbar.css';
import './components/HeroSearch.css';
import './components/FeaturedHotels.css';
import './components/PopularDestinations.css';
import './components/SpecialOffers.css';
import './components/WhyChooseUs.css';
import './components/CallToBook.css';
import './components/Reviews.css';
import './components/CtaSection.css';
import './components/Footer.css';
import './components/Modals.css';

export default function App() {
  // State
  const [hotels, setHotels] = useState(HOTELS_DATA);
  const [favorites, setFavorites] = useState(['h1', 'h2']); // Pre-favorited items
  const [searchFilter, setSearchFilter] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active section tracking for navbar
  const [activeSection, setActiveSection] = useState('hero');

  // Modals state
  const [detailModalHotel, setDetailModalHotel] = useState(null);
  const [bookingModalHotel, setBookingModalHotel] = useState(null);
  const [bookingSelectedRoom, setBookingSelectedRoom] = useState(null);
  const [bookingPromoCode, setBookingPromoCode] = useState('');
  const [authModalMode, setAuthModalMode] = useState(null); // 'login' or 'signup' or null
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);

  // Show toast notification helper
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Toggle Favorite
  const handleToggleFavorite = (hotelId) => {
    if (favorites.includes(hotelId)) {
      setFavorites(favorites.filter(id => id !== hotelId));
      triggerToast("Removed from saved stays.");
    } else {
      setFavorites([...favorites, hotelId]);
      triggerToast("Saved to your favorites wishlist!");
    }
  };

  // Handle Search Submission
  const handleSearchSubmit = (filterData) => {
    setSearchFilter(filterData);
    triggerToast(`Searching stays in ${filterData.location || 'all locations'}...`);
    
    // Smooth scroll to hotels
    const element = document.getElementById('hotels');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Destination Card Click
  const handleSelectDestination = (cityName) => {
    setSearchFilter({ location: cityName });
    triggerToast(`Filtered stays for ${cityName}`);
    const element = document.getElementById('hotels');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Booking Trigger from Offer
  const handleBookWithCode = (code) => {
    setBookingPromoCode(code);
    setBookingModalHotel(hotels[0]); // Default to top luxury stay
    triggerToast(`Promo code ${code} applied to booking!`);
  };

  return (
    <div className="app-main-wrapper">
      
      {/* Sticky Header Navbar */}
      <Navbar 
        onOpenAuth={(mode) => setAuthModalMode(mode)}
        onOpenCall={() => setCallModalOpen(true)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section & Search Box */}
      <HeroSearch onSearch={handleSearchSubmit} />

      {/* Featured Hotels */}
      <FeaturedHotels 
        hotels={hotels}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onViewDetails={(hotel) => setDetailModalHotel(hotel)}
        onBookNow={(hotel) => {
          setBookingModalHotel(hotel);
          setBookingSelectedRoom(null);
        }}
        searchFilter={searchFilter}
      />

      {/* Popular Destinations */}
      <PopularDestinations onSelectDestination={handleSelectDestination} />

      {/* Special Offers */}
      <SpecialOffers 
        onBookWithCode={handleBookWithCode}
        onToast={triggerToast}
      />

      {/* Why Choose BookoraX */}
      <WhyChooseUs />

      {/* Call to Book Dedicated Section */}
      <CallToBook onOpenCall={() => setCallModalOpen(true)} />

      {/* Verified Guest Reviews */}
      <Reviews />

      {/* Final CTA Banner */}
      <CtaSection 
        onExploreHotels={() => {
          const el = document.getElementById('hotels');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onBookStay={() => {
          setBookingModalHotel(hotels[0]);
        }}
      />

      {/* Multi-Column Footer */}
      <Footer 
        onOpenCall={() => setCallModalOpen(true)}
        onOpenAuth={(mode) => setAuthModalMode(mode)}
      />

      {/* MODALS */}
      
      {/* Hotel Details Modal */}
      {detailModalHotel && (
        <HotelDetailModal 
          hotel={detailModalHotel}
          onClose={() => setDetailModalHotel(null)}
          onBookRoom={(hotel, room) => {
            setDetailModalHotel(null);
            setBookingModalHotel(hotel);
            setBookingSelectedRoom(room);
          }}
        />
      )}

      {/* Booking Checkout Modal */}
      {bookingModalHotel && (
        <BookingModal 
          hotel={bookingModalHotel}
          selectedRoom={bookingSelectedRoom}
          prefilledCode={bookingPromoCode}
          onClose={() => {
            setBookingModalHotel(null);
            setBookingPromoCode('');
          }}
          onBookingSuccess={(hotelName, ticketId) => {
            triggerToast(`Booking confirmed for ${hotelName}! Pass: ${ticketId}`);
          }}
        />
      )}

      {/* Auth Modal (Login / Sign Up) */}
      {authModalMode && (
        <AuthModal 
          initialMode={authModalMode}
          onClose={() => setAuthModalMode(null)}
          onLoginSuccess={(user) => {
            triggerToast(`Welcome back, ${user.name}!`);
          }}
          onToast={triggerToast}
        />
      )}

      {/* Call to Book Modal */}
      {callModalOpen && (
        <CallModal 
          onClose={() => setCallModalOpen(false)}
          onToast={triggerToast}
        />
      )}

      {/* Favorites Drawer */}
      {favoritesDrawerOpen && (
        <FavoritesDrawer 
          favorites={favorites}
          hotels={hotels}
          onClose={() => setFavoritesDrawerOpen(false)}
          onRemoveFavorite={handleToggleFavorite}
          onBookNow={(hotel) => {
            setBookingModalHotel(hotel);
          }}
        />
      )}

      {/* Toast Notification */}
      <Toast message={toastMessage} />

    </div>
  );
}
