import React from 'react';
import { Tag, Zap, ShieldCheck, Headphones, CheckCircle2, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Tag,
      title: "Best Price Guarantee",
      text: "Find great stays at competitive prices with zero hidden charges or surprise booking markups."
    },
    {
      icon: Zap,
      title: "Easy & Instant Booking",
      text: "Book your room quickly and easily in under 60 seconds with instant digital ticket confirmation."
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      text: "Your booking and payment information is fully protected by 256-bit military-grade SSL encryption."
    },
    {
      icon: Headphones,
      title: "24/7 Concierge Support",
      text: "Get personal assistance whenever you need it from our dedicated hospitality experts."
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="badge-burgundy mb-2">
            <Award size={14} />
            <span>THE BOOKORAX ADVANTAGE</span>
          </div>
          <h2 className="section-title font-serif">Why Choose BookoraX?</h2>
          <p className="section-subtitle">
            Redefining luxury travel with unmatched convenience, transparent pricing, and world-class service.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="why-us-grid">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="why-us-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={26} className="feature-icon" />
                </div>
                <div className="check-badge-row">
                  <CheckCircle2 size={16} className="text-gold" />
                  <h3 className="feature-title font-serif">{item.title}</h3>
                </div>
                <p className="feature-text">{item.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
