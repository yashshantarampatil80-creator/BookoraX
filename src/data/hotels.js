export const HOTELS_DATA = [
  {
    id: "h1",
    name: "The Grand Horizon Palace",
    location: "Marine Drive, Mumbai",
    city: "Mumbai",
    rating: 4.9,
    reviewsCount: 342,
    starRating: 5,
    tagline: "Unrivaled oceanfront grandeur & Arabian Sea views",
    description: "Experience ultra-luxury at Mumbai's premier waterfront address. Featuring panoramic ocean views, private infinity pool, world-class dining by Michelin-trained chefs, and signature Butler service.",
    pricePerNight: 14500,
    roomType: "Royal Sea-View Suite",
    category: "Luxury Suites",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Infinity Ocean Pool", "24/7 Butler Service", "Michelin Dining", "Luxury Spa", "Free High-Speed Wi-Fi", "Airport Transfer", "Private Balcony"],
    roomsAvailable: [
      { type: "Deluxe Ocean View Room", price: 14500, maxGuests: 2, bed: "1 King Bed" },
      { type: "Executive Marine Suite", price: 21000, maxGuests: 3, bed: "1 Super King Bed + Lounge" },
      { type: "Presidential Horizon Penthouse", price: 45000, maxGuests: 4, bed: "2 Master King Suites" }
    ],
    featured: true
  },
  {
    id: "h2",
    name: "Villa Sereno & Sanctuary Spa",
    location: "Candolim Beach, Goa",
    city: "Goa",
    rating: 4.95,
    reviewsCount: 420,
    starRating: 5,
    tagline: "Private beachside sanctuary surrounded by lush tropical gardens",
    description: "Nestled directly on Candolim's golden coastline, Villa Sereno offers private pool villas, holistic Ayurvedic spa treatments, sunset champagne cruises, and beachfront dining under the stars.",
    pricePerNight: 18900,
    roomType: "Private Pool Beach Villa",
    category: "Beach Resorts",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Private Beach Access", "Plunge Pool", "Ayurvedic Spa", "Beach Bar & Grill", "Free Breakfast", "Yoga Deck"],
    roomsAvailable: [
      { type: "Garden Ocean Cottage", price: 18900, maxGuests: 2, bed: "1 King Bed" },
      { type: "Private Pool Beach Villa", price: 28500, maxGuests: 3, bed: "1 Plush King Bed + Plunge Pool" },
      { type: "Sunset Royal Villa", price: 42000, maxGuests: 4, bed: "2 Bedroom Beachfront Villa" }
    ],
    featured: true
  },
  {
    id: "h3",
    name: "The Royal Heritage Manor",
    location: "Tarabai Park, Kolhapur",
    city: "Kolhapur",
    rating: 4.88,
    reviewsCount: 215,
    starRating: 4,
    tagline: "Authentic royal hospitality & historic Maratha architecture",
    description: "A meticulously restored 19th-century royal heritage palace showcasing hand-carved teakwood, opulent courtyards, traditional royal Maharashtrian cuisine, and personalized cultural concierge experiences.",
    pricePerNight: 8700,
    roomType: "Royal Heritage Suite",
    category: "Heritage Stays",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Heritage Courtyard", "Royal Dining Hall", "Vintage Car Tour", "Cultural Shows", "Free Wi-Fi", "Valet Parking"],
    roomsAvailable: [
      { type: "Deluxe Heritage Room", price: 8700, maxGuests: 2, bed: "1 Four-Poster King Bed" },
      { type: "Royal Maratha Suite", price: 14200, maxGuests: 3, bed: "1 Royal King Suite" }
    ],
    featured: true
  },
  {
    id: "h4",
    name: "Skyline Vista Suites",
    location: "UB City, Bengaluru",
    city: "Bengaluru",
    rating: 4.85,
    reviewsCount: 290,
    starRating: 5,
    tagline: "Ultra-modern sky suites in the heart of the Garden City",
    description: "Towering over UB City, Skyline Vista offers contemporary luxury with floor-to-ceiling glass windows, rooftop helipad lounge, state-of-the-art automation, and direct luxury mall access.",
    pricePerNight: 11200,
    roomType: "Executive Sky Suite",
    category: "City Center",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Rooftop Lounge", "Smart Room Controls", "Heated Pool", "Executive Club", "24/7 Gym", "High-Speed Fiber Wi-Fi"],
    roomsAvailable: [
      { type: "Skyline Deluxe Room", price: 11200, maxGuests: 2, bed: "1 Ergonomic King Bed" },
      { type: "UB City Panoramic Suite", price: 18000, maxGuests: 3, bed: "1 King Bed + Office Workspace" }
    ],
    featured: true
  },
  {
    id: "h5",
    name: "Elysium Lake Resort & Wellness",
    location: "Mulshi Lake, Pune",
    city: "Pune",
    rating: 4.92,
    reviewsCount: 180,
    starRating: 5,
    tagline: "Serene lakeside retreat overlooking the Sahyadri mountains",
    description: "Escape city noise at Pune's premier lakeside eco-resort. Featuring glass-wrapped water chalets, organic farm-to-table dining, infinity lake views, and holistic wellness therapies.",
    pricePerNight: 9800,
    roomType: "Overwater Chalet",
    category: "Luxury Suites",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Lake View Infinity Pool", "Hydrotherapy Spa", "Organic Dining", "Kayaking & Boating", "Sunset Deck"],
    roomsAvailable: [
      { type: "Lakeside Chalet", price: 9800, maxGuests: 2, bed: "1 Canopy King Bed" },
      { type: "Mountain View Villa", price: 15500, maxGuests: 4, bed: "2 Bedroom Villa" }
    ],
    featured: true
  },
  {
    id: "h6",
    name: "Nizam Heritage Palace",
    location: "Banjara Hills, Hyderabad",
    city: "Hyderabad",
    rating: 4.9,
    reviewsCount: 310,
    starRating: 5,
    tagline: "Princely elegance & timeless royal Nizami luxury",
    description: "Immerse yourself in authentic royal Nizami hospitality. Featuring crystal chandeliers, peacocks roaming Italian marble courtyards, authentic Hyderabadi dum biryani, and private butler service.",
    pricePerNight: 15400,
    roomType: "Nizami Royal Suite",
    category: "Heritage Stays",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Marble Courtyard Pool", "Private Butler", "Royal Dining", "Heritage Garden", "Complimentary High Tea"],
    roomsAvailable: [
      { type: "Nizami Suite", price: 15400, maxGuests: 2, bed: "1 Imperial King Bed" },
      { type: "Grand Nizam Palace Suite", price: 32000, maxGuests: 4, bed: "2 Master Suites + Private Dining" }
    ],
    featured: true
  }
];

export const DESTINATIONS = [
  {
    id: "d1",
    name: "Mumbai",
    subtitle: "Coastal Elegance & Vibrant Glamour",
    staysCount: "180+ Luxury Stays",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    popularTag: "Trending City"
  },
  {
    id: "d2",
    name: "Goa",
    subtitle: "Sun-Kissed Beaches & Party Resorts",
    staysCount: "240+ Beach Villas",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    popularTag: "Top Coastal Escape"
  },
  {
    id: "d3",
    name: "Pune",
    subtitle: "Cultural Hub & Lush Hill Retreats",
    staysCount: "120+ Resort Stays",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    popularTag: "Lakeside Getaways"
  },
  {
    id: "d4",
    name: "Kolhapur",
    subtitle: "Heritage Palaces & Historic Charm",
    staysCount: "85+ Heritage Stays",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    popularTag: "Royal Culture"
  },
  {
    id: "d5",
    name: "Hyderabad",
    subtitle: "City of Pearls & Nizami Splendor",
    staysCount: "150+ Royal Palaces",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=800&q=80",
    popularTag: "Heritage Luxury"
  },
  {
    id: "d6",
    name: "Bengaluru",
    subtitle: "Garden City & Ultra-Modern Living",
    staysCount: "210+ Tech Suites",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    popularTag: "Urban Luxury"
  }
];

export const OFFERS = [
  {
    id: "o1",
    title: "Weekend Getaway Deal",
    badge: "25% OFF",
    code: "WEEKEND25",
    description: "Book Friday to Sunday stays at any 5-star property and enjoy 25% off plus complimentary gourmet breakfast for two.",
    validity: "Valid till Sep 30, 2026",
    colorGradient: "linear-gradient(135deg, #6B1D2F 0%, #3D241E 100%)",
    perks: ["Free Breakfast", "Late Check-out (2 PM)", "25% Instant Savings"]
  },
  {
    id: "o2",
    title: "Couple Romantic Escape",
    badge: "ROMANCE PKG",
    code: "ROMANCE20",
    description: "Indulge in a romantic escape with 20% off luxury villas, candlelit beachfront dinner, and complimentary couple spa voucher.",
    validity: "Valid year-round",
    colorGradient: "linear-gradient(135deg, #4A121E 0%, #2C1A16 100%)",
    perks: ["Candlelight Dinner", "Couples Spa Access", "Champagne Welcome"]
  },
  {
    id: "o3",
    title: "Luxury Suite Special",
    badge: "3 NIGHTS FOR 2",
    code: "LUXURY3FOR2",
    description: "Stay 3 consecutive nights in any Royal Suite or Penthouse and get the 3rd night completely complimentary with free airport luxury transfer.",
    validity: "Limited time offer",
    colorGradient: "linear-gradient(135deg, #3D241E 0%, #6B1D2F 100%)",
    perks: ["3rd Night Free", "BMW Airport Transfer", "24/7 Butler Access"]
  }
];

export const REVIEWS = [
  {
    id: "r1",
    name: "Ananya Deshmukh",
    city: "Mumbai",
    hotelStayed: "The Grand Horizon Palace",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "BookoraX made booking our wedding anniversary trip effortless! The room upgrade and seamless check-in were beyond our expectations. Truly a 5-star experience."
  },
  {
    id: "r2",
    name: "Vikramaditya Rao",
    city: "Pune",
    hotelStayed: "Villa Sereno & Spa, Goa",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "The Best Price Guarantee on BookoraX is genuine! Saved over ₹6,000 on our Goa beach villa. Their 24/7 phone support team helped us with customized late check-out."
  },
  {
    id: "r3",
    name: "Priya Sharma",
    city: "Bengaluru",
    hotelStayed: "The Royal Heritage Manor, Kolhapur",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "Exquisite interface and ultra-transparent pricing! No hidden surprise charges at payment. Received instant SMS & PDF confirmation within seconds."
  }
];

export const WHY_US_FEATURES = [
  {
    icon: "Tag",
    title: "Best Price Guarantee",
    text: "Find great stays at competitive prices with zero hidden charges or booking markups."
  },
  {
    icon: "Zap",
    title: "Easy & Instant Booking",
    text: "Reserve your luxury room quickly and easily in under 60 seconds with instant confirmation."
  },
  {
    icon: "ShieldCheck",
    title: "Secure 256-Bit Payments",
    text: "Your booking details and payment transactions are fully protected by military-grade SSL encryption."
  },
  {
    icon: "Headphones",
    title: "24/7 Concierge Support",
    text: "Get dedicated travel consultants ready to assist you anytime via phone, chat, or email."
  }
];
