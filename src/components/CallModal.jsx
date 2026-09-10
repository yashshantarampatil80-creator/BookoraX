import React, { useState } from 'react';
import { X, PhoneCall, Clock, Check, Send, Sparkles } from 'lucide-react';

export default function CallModal({ onClose, onToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Immediately');
  const [requested, setRequested] = useState(false);

  const handleRequestCallback = (e) => {
    e.preventDefault();
    if (!phone) return;
    setRequested(true);
    onToast("Callback request received! Our concierge will call you shortly.");
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content call-modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        <div className="call-modal-header">
          <div className="phone-icon-modal-box">
            <PhoneCall size={32} />
          </div>
          <h3 className="font-serif call-modal-title">BookoraX 24/7 Call Center</h3>
          <p className="call-modal-sub">
            Speak directly with a luxury travel consultant to reserve your stay or customize your itinerary.
          </p>
        </div>

        {/* Hotlines */}
        <div className="hotline-numbers-container">
          <div className="hotline-card">
            <span className="hotline-label">Toll-Free Helpline (India)</span>
            <a href="tel:18002665672" className="hotline-num font-serif">1800-BOOKORAX</a>
            <span className="hotline-sub"><Clock size={12} /> Available 24/7 (English, Hindi, Marathi)</span>
          </div>

          <div className="hotline-card">
            <span className="hotline-label">International Desk</span>
            <a href="tel:+912288887777" className="hotline-num font-serif">+91 22 8888 7777</a>
            <span className="hotline-sub">Direct Line to Senior Concierge</span>
          </div>
        </div>

        {/* Instant Callback Form */}
        <div className="callback-form-box mt-4">
          <h4 className="font-serif form-box-title">Or Request an Instant Callback</h4>
          
          {!requested ? (
            <form onSubmit={handleRequestCallback} className="callback-form">
              <div className="booking-inputs-grid">
                <div className="input-field-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-field-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-3 py-2.5">
                <Send size={16} /> Request Free Callback
              </button>
            </form>
          ) : (
            <div className="callback-success-message">
              <Check size={28} className="text-green" />
              <h5 className="font-serif">Request Sent Successfully!</h5>
              <p>An agent will call <strong>{phone}</strong> within 5 minutes.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
