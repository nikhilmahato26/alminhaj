export const siteContent = {
  brand: {
    name: 'Al Minhaj',
    tagline: 'Tour & Travels',
    logo: 'AM',
    phone: ['7006615883', '7780890083'],
    whatsapp: '917006615883',
    email: 'alminhajtourandtravels@gmail.com',
    address: 'Kanelwan Bijbehara, Anantnag, Kashmir — 192124',
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    badge: 'Kashmir\'s Trusted Travel Partner',
    headline: ['Experience', 'Kashmir,', 'Crafted for You.'],
    subheadline:
      'From the valleys of Gulmarg to the lakes of Dal — we plan every detail so you only have to breathe it in.',
    cta: { label: 'Plan Your Trip', href: '#contact' },
    ctaSecondary: { label: 'View Packages', href: '#services' },
    image:
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80',
    stats: [
      { value: '2000+', label: 'Happy Travellers' },
      { value: '50+', label: 'Destinations' },
      { value: '10+', label: 'Years Experience' },
    ],
  },

  services: [
    {
      id: 1,
      icon: 'Plane',
      title: 'Flight Bookings',
      description:
        'Domestic and international air ticketing at the best fares, with flexible date options and group discounts.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 2,
      icon: 'Mountain',
      title: 'Kashmir Packages',
      description:
        'Expertly crafted Kashmir holiday & honeymoon packages covering Srinagar, Gulmarg, Pahalgam, and Sonamarg.',
      image:
        'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80',
    },
    {
      id: 3,
      icon: 'Hotel',
      title: 'Hotel & Houseboat',
      description:
        'Hand-picked hotels, luxury houseboats on Dal Lake, and cosy guesthouses across Kashmir and beyond.',
      image:
        'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80',
    },
    {
      id: 4,
      icon: 'Map',
      title: 'Sightseeing & Transport',
      description:
        'Comfortable, reliable cabs and guided local tours across all major attractions at every destination.',
      image:
        'https://images.unsplash.com/photo-1706353222367-d0b0fb602f07?q=80',
    },
    {
      id: 5,
      icon: 'Users',
      title: 'Group Tours',
      description:
        'Tailored group itineraries for families, corporate outings, pilgrimages, and school excursions.',
      image:
        'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80&auto=format&fit=crop',
    },
    {
      id: 6,
      icon: 'Globe',
      title: 'International Travel',
      description:
        'Visa assistance, international packages, and full travel solutions for your global journeys.',
      image:
        'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80&auto=format&fit=crop',
    },
  ],

  destinations: [
    {
      name: 'Gulmarg',
      tagline: 'Meadow of Flowers',
      image:
        'https://images.unsplash.com/photo-1631693558359-f7afa9e8e883?q=80',
      fallback:
        'https://images.unsplash.com/photo-1631693558359-f7afa9e8e883?q=80',
    },
    {
      name: 'Pahalgam',
      tagline: 'Valley of Shepherds',
      image:
        'https://images.unsplash.com/photo-1668173443752-bdec2fbb3c79?q=80',
      fallback:
        'https://images.unsplash.com/photo-1668173443752-bdec2fbb3c79?q=80&auto=format&fit=crop',
    },
    {
      name: 'Sonamarg',
      tagline: 'Meadow of Gold',
      image:
        'https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?q=80&w=2070&auto=format&fit=crop',
      fallback:
        'https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Dal Lake',
      tagline: 'Jewel of Kashmir',
      image:
        'https://images.unsplash.com/photo-1614591276564-7b3e69347a48?q=80&w=2074&auto=format&fit=crop',
      fallback:
        'https://images.unsplash.com/photo-1614591276564-7b3e69347a48?q=80&w=2074&auto=format&fit=crop',
    },
  ],

  about: {
    badge: 'Our Story',
    headline: 'Rooted in Kashmir,\nConnected to the World.',
    body: [
      'Founded in the heart of Anantnag, Al Minhaj Tour & Travels was built on one belief — that every journey should feel effortless, personal, and unforgettable.',
      'For over a decade, we\'ve been the trusted travel partner for thousands of families, honeymooners, pilgrims, and adventurers exploring the breathtaking landscapes of Kashmir and beyond.',
    ],
    pillars: [
      { label: 'Reliable', desc: 'Punctual, transparent, and always reachable.' },
      { label: 'Affordable', desc: 'Best prices without compromising on quality.' },
      { label: '24/7 Support', desc: 'We are with you before, during, and after.' },
    ],
    image:
      'https://images.unsplash.com/photo-1623612175509-30e97f5aa195?q=80&w=1035&auto=format&fit=crop',
  },

  testimonials: [
    {
      id: 1,
      name: 'Arjun Mehta',
      location: 'Delhi',
      rating: 5,
      text: 'Absolutely seamless experience. From the airport pickup to the houseboat on Dal Lake — every detail was handled perfectly. Al Minhaj made our honeymoon unforgettable.',
      trip: 'Honeymoon Package · Kashmir',
    },
    {
      id: 2,
      name: 'Fatima Sheikh',
      location: 'Mumbai',
      rating: 5,
      text: 'We were a group of 15 and they managed everything flawlessly. The Gulmarg snow experience was once-in-a-lifetime. Highly recommend for group tours!',
      trip: 'Group Tour · Kashmir + Sonamarg',
    },
    {
      id: 3,
      name: 'Rajesh Nair',
      location: 'Bangalore',
      rating: 5,
      text: 'The team was incredibly responsive on WhatsApp. Got our flights changed last minute and they sorted it out within an hour. True 24/7 service!',
      trip: 'Family Vacation · Kashmir',
    },
  ],

  faqs: [
    {
      q: 'What is the best time to visit Kashmir?',
      a: 'March to October is generally ideal. Spring (April–May) for blossoms, Summer (June–August) for green valleys, and Winter (December–February) for snow enthusiasts. Gulmarg skiing is best in Jan–Feb.',
    },
    {
      q: 'Do you offer customized packages?',
      a: 'Absolutely. Every itinerary we create is tailored to your group size, budget, interests, and duration. Just reach out via WhatsApp or our contact form.',
    },
    {
      q: 'Is Kashmir safe to travel?',
      a: 'Kashmir is a popular tourist destination and millions visit every year without incident. We stay updated on ground conditions and will always advise you transparently.',
    },
    {
      q: 'Do you assist with visa for international travel?',
      a: 'Yes, we provide visa documentation guidance and connect you with visa consultants for international destinations including UAE, Malaysia, Thailand, and Europe.',
    },
    {
      q: 'What modes of payment do you accept?',
      a: 'We accept UPI, bank transfer (NEFT/IMPS), and cash. Booking confirmation is shared on WhatsApp immediately after payment.',
    },
  ],
}
