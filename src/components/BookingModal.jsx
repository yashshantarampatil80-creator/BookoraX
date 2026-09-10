import React, { useState } from 'react';
import { X, Check, Calendar, Users, CreditCard, ShieldCheck, Ticket, Download, Sparkles, Building2 } from 'lucide-react';

export default function BookingModal({ hotel, selectedRoom, prefilledCode, onClose, onBookingSuccess }) {
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-18');
  const [guests, setGuests] = useState(2);
  const [promoCode, setPromoCode] = useState(prefilledCode || '');
  const [discountPercent, setDiscountPercent] = useState(prefilledCode ? 20 : 0);

  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Ticket Data
  const [bookingTicket, setBookingTicket] = useState(null);

  if (!hotel) return null;

  const roomToBook = selectedRoom || hotel.roomsAvailable[0];
  const pricePerNight = roomToBook.price;
  const nights = 3;
  const subtotal = pricePerNight * nights;
  const discountAmount = (subtotal * discountPercent) / 100;
  const tax = Math.round((subtotal - discountAmount) * 0.18);
  const grandTotal = subtotal - discountAmount + tax;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'WEEKEND25') {
      setDiscountPercent(25);
    } else if (promoCode.toUpperCase() === 'ROMANCE20') {
      setDiscountPercent(20);
    } else if (promoCode.toUpperCase() === 'LUXURY3FOR2') {
      setDiscountPercent(33);
    } else {
      alert("Invalid or expired promo code.");
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const ticketId = `BKX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingTicket({
        id: ticketId,
        hotelName: hotel.name,
        location: hotel.location,
        roomType: roomToBook.type,
        checkIn,
        checkOut,
        guests,
        guestName,
        guestEmail,
        guestPhone,
        totalPaid: grandTotal,
        paymentMethod: paymentMethod === 'card' ? 'Credit Card (Paid)' : paymentMethod === 'upi' ? 'UPI Instant Pay' : 'Pay at Check-in'
      });
      setStep(3); // Confirmation Step
      if (onBookingSuccess) onBookingSuccess(hotel.name, ticketId);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content booking-modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {/* Modal Stepper Header */}
        <div className="booking-modal-header">
          <div className="badge-gold mb-1">
            <Building2 size={14} />
            <span>BOOKORAX EXPRESS CHECKOUT</span>
          </div>
          <h3 className="font-serif booking-modal-title">
            {step === 3 ? "Booking Confirmed!" : `Reserve Stay at ${hotel.name}`}
          </h3>

          {step !== 3 && (
            <div className="stepper-dots-bar">
              <span className={`step-dot ${step === 1 ? 'active' : 'completed'}`}>1. Dates &amp; Summary</span>
              <span className="step-arrow">→</span>
              <span className={`step-dot ${step === 2 ? 'active' : ''}`}>2. Guest &amp; Payment</span>
            </div>
          )}
        </div>

        {/* STEP 1: Dates & Price Breakdown */}
        {step === 1 && (
          <div className="booking-step-content">
            
            {/* Room Summary Header */}
            <div className="booking-room-summary">
              <img src={hotel.image} alt={hotel.name} className="summary-thumb" />
              <div>
                <h4 className="font-serif summary-hotel-title">{hotel.name}</h4>
                <p className="summary-room-type">{roomToBook.type}</p>
                <span className="summary-location">{hotel.location}</span>
              </div>
            </div>

            {/* Dates Inputs */}
            <div className="booking-inputs-grid">
              <div className="input-field-group">
                <label><Calendar size={14} className="icon-gold" /> Check-in Date</label>
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              </div>

              <div className="input-field-group">
                <label><Calendar size={14} className="icon-gold" /> Check-out Date</label>
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </div>

              <div className="input-field-group">
                <label><Users size={14} className="icon-gold" /> Guests Count</label>
                <input type="number" min="1" max="4" value={guests} onChange={(e) => setGuests(e.target.value)} />
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="promo-code-input-row">
              <input 
                type="text" 
                placeholder="Enter Promo Code (e.g. WEEKEND25)" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button type="button" className="btn-gold py-2 px-4" onClick={handleApplyPromo}>
                Apply Code
              </button>
            </div>

            {/* Price Summary Breakdown */}
            <div className="price-breakdown-card">
              <div className="price-row">
                <span>Room Rate ({nights} nights)</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="price-row text-green">
                  <span>Special Promo Discount ({discountPercent}%)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="price-row">
                <span>Government Taxes &amp; Service Fee (18%)</span>
                <span>₹{tax.toLocaleString('en-IN')}</span>
              </div>

              <div className="price-row total-row">
                <span>Grand Total</span>
                <span className="text-primary font-bold">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button className="btn-primary w-full mt-4 py-3" onClick={() => setStep(2)}>
              Proceed to Guest Details →
            </button>

          </div>
        )}

        {/* STEP 2: Guest Details & Payment Selection */}
        {step === 2 && (
          <form onSubmit={handleConfirmBooking} className="booking-step-content">
            
            <h4 className="font-serif form-section-title">Primary Guest Information</h4>
            
            <div className="booking-inputs-grid">
              <div className="input-field-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Vikramaditya Shinde"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div className="input-field-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                />
              </div>

              <div className="input-field-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="input-field-group mt-2">
              <label>Special Requests (Optional)</label>
              <textarea 
                rows="2" 
                placeholder="High floor, late check-in, honeymoon setup, etc."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </div>

            <h4 className="font-serif form-section-title mt-4">Select Payment Method</h4>

            <div className="payment-options-grid">
              <label className={`payment-option-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payMethod" 
                  value="card" 
                  checked={paymentMethod === 'card'} 
                  onChange={() => setPaymentMethod('card')}
                />
                <CreditCard size={20} className="icon-gold" />
                <span>Credit / Debit Card</span>
              </label>

              <label className={`payment-option-card ${paymentMethod === 'upi' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payMethod" 
                  value="upi" 
                  checked={paymentMethod === 'upi'} 
                  onChange={() => setPaymentMethod('upi')}
                />
                <Sparkles size={20} className="icon-gold" />
                <span>UPI / GPay / PhonePe</span>
              </label>

              <label className={`payment-option-card ${paymentMethod === 'hotel' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payMethod" 
                  value="hotel" 
                  checked={paymentMethod === 'hotel'} 
                  onChange={() => setPaymentMethod('hotel')}
                />
                <ShieldCheck size={20} className="icon-gold" />
                <span>Pay at Hotel</span>
              </label>
            </div>

            <div className="modal-actions-row mt-4">
              <button type="button" className="btn-gold flex-1 py-3" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button type="submit" className="btn-primary flex-2 py-3" disabled={isProcessing}>
                {isProcessing ? "Confirming Booking..." : `Pay & Reserve (₹${grandTotal.toLocaleString('en-IN')})`}
              </button>
            </div>

          </form>
        )}

        {/* STEP 3: DIGITAL CONFIRMATION TICKET */}
        {step === 3 && bookingTicket && (
          <div className="booking-success-ticket animate-fade-in">
            
            <div className="ticket-header-badge">
              <Ticket size={28} className="text-gold" />
              <div>
                <h4 className="ticket-title font-serif">BOOKORAX CONFIRMED PASS</h4>
                <span className="ticket-id">Booking ID: {bookingTicket.id}</span>
              </div>
            </div>

            <div className="ticket-details-grid">
              <div className="ticket-row">
                <span className="ticket-label">Hotel:</span>
                <span className="ticket-value font-bold">{bookingTicket.hotelName}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Room Type:</span>
                <span className="ticket-value">{bookingTicket.roomType}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Dates:</span>
                <span className="ticket-value">{bookingTicket.checkIn} to {bookingTicket.checkOut}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Guest Name:</span>
                <span className="ticket-value">{bookingTicket.guestName}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Total Amount Paid:</span>
                <span className="ticket-value text-primary font-bold">₹{bookingTicket.totalPaid.toLocaleString('en-IN')}</span>
              </div>
              <div className="ticket-row">
                <span className="ticket-label">Payment Status:</span>
                <span className="ticket-value text-green font-bold">{bookingTicket.paymentMethod}</span>
              </div>
            </div>

            <p className="ticket-notice-text">
              A confirmation email &amp; SMS with PDF voucher has been dispatched to <strong>{bookingTicket.guestEmail}</strong>.
            </p>

            <div className="ticket-actions-row">
              <button className="btn-gold py-2 px-4" onClick={() => alert("Downloading PDF Voucher...")}>
                <Download size={16} /> Download Voucher
              </button>
              <button className="btn-primary py-2 px-6" onClick={onClose}>
                Done &amp; Close
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
