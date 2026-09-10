import React, { useState } from 'react';
import { X, User, Mail, Lock, Phone, Sparkles, Building2, Check } from 'lucide-react';

export default function AuthModal({ initialMode = 'login', onClose, onLoginSuccess, onToast }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      onToast("Successfully logged in to BookoraX!");
      onLoginSuccess({ name: email.split('@')[0] || 'Guest Member' });
    } else {
      onToast("Welcome to BookoraX! Account created successfully.");
      onLoginSuccess({ name: fullName || 'New Member' });
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {/* Header Tabs */}
        <div className="auth-header-tabs">
          <button 
            className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button 
            className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-body">
          <div className="auth-brand-head">
            <div className="badge-gold mb-1">
              <Sparkles size={12} />
              <span>BOOKORAX CLUB MEMBER</span>
            </div>
            <h3 className="auth-title font-serif">
              {mode === 'login' ? 'Welcome Back to Luxury' : 'Join BookoraX Exclusive'}
            </h3>
            <p className="auth-subtitle">
              {mode === 'login' 
                ? 'Sign in to access secret member rates and manage your bookings.' 
                : 'Unlock up to 20% off your first stay and earn reward credits.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            
            {mode === 'signup' && (
              <div className="input-field-group">
                <label><User size={14} className="icon-gold" /> Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your full name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            )}

            <div className="input-field-group">
              <label><Mail size={14} className="icon-gold" /> Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="name@domain.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {mode === 'signup' && (
              <div className="input-field-group">
                <label><Phone size={14} className="icon-gold" /> Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}

            <div className="input-field-group">
              <label><Lock size={14} className="icon-gold" /> Password</label>
              <input 
                type="password" 
                required 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-3 py-3">
              {mode === 'login' ? 'Sign In to Account' : 'Create Free Account'}
            </button>
          </form>

          {/* Member Perks Checklist */}
          <div className="auth-perks-box mt-4">
            <div className="perk-check-item"><Check size={12} className="text-gold" /> Exclusive Member Discounts</div>
            <div className="perk-check-item"><Check size={12} className="text-gold" /> Free Room Upgrades (Subject to availability)</div>
            <div className="perk-check-item"><Check size={12} className="text-gold" /> 24/7 Priority Concierge</div>
          </div>

        </div>

      </div>
    </div>
  );
}
