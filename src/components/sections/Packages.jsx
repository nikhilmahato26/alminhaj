import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Hotel, Utensils, Map, Car, MapPin, Phone, Eye, X, MessageCircle } from 'lucide-react'

export default function Packages() {
  const { ref, isVisible } = useScrollReveal()
  const { packages, brand } = siteContent
  const [selectedItinerary, setSelectedItinerary] = useState(null)

  return (
    <section id="packages" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-brand-accent" />
            <span className="section-label">Popular Deals</span>
            <span className="w-8 h-px bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-center"
          >
            Popular Kashmir Tour Packages
          </motion.h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pack, i) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-brand-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Header Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={pack.image}
                  alt={pack.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* 18% OFF or Custom Discount Badge */}
                {pack.price.badge && (
                  <div className="absolute top-4 left-4 bg-[#E03157] text-white font-heading font-bold text-xs w-12 h-12 rounded-full flex items-center justify-center shadow-lg uppercase leading-tight text-center z-10 animate-pulse-slow">
                    {pack.price.badge}
                  </div>
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />

                {/* Package Name overlay (bottom) */}
                <div className="absolute bottom-4 left-4 right-4 text-white font-display text-3xl md:text-4xl tracking-wide drop-shadow-md">
                  {pack.title.toUpperCase()}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                
                {/* Duration & Price Row */}
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="font-body text-xs text-brand-muted">Duration:</span>
                    <span className="block font-heading text-lg font-bold text-brand-primary tracking-wider">
                      {pack.duration}
                    </span>
                  </div>
                  <div className="text-right">
                    {pack.price.original && (
                      <span className="font-body text-xs text-brand-muted/70 line-through mr-2">
                        {pack.price.original}
                      </span>
                    )}
                    <span className="font-heading text-2xl font-bold text-[#E03157]">
                      {pack.price.current}
                    </span>
                    <span className="font-body text-[10px] text-brand-muted block mt-0.5 uppercase tracking-wider">
                      / {pack.price.unit}
                    </span>
                  </div>
                </div>

                {/* Pricing notes */}
                <div className="flex justify-end mb-4">
                  <span className="text-[10px] text-brand-muted/80 font-body">
                    {pack.price.note}
                  </span>
                </div>

                {/* Staying locations list (Map Pin Tags) */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {pack.stays.map((stay, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-[#FFF0F2] text-[#E03157] text-[11px] font-semibold px-3 py-1.5 rounded-sm"
                    >
                      <MapPin size={11} className="text-[#E03157] shrink-0" />
                      {stay}
                    </div>
                  ))}
                </div>

                {/* Inclusions Grid */}
                <div className="grid grid-cols-4 gap-1 py-4 border-t border-b border-brand-primary/5 mb-6 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                      <Hotel size={15} className="text-[#2E7D32]" />
                    </div>
                    <span className="text-[10px] font-heading font-bold tracking-wider text-brand-primary uppercase mt-1">Hotel</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                      <Utensils size={15} className="text-[#2E7D32]" />
                    </div>
                    <span className="text-[10px] font-heading font-bold tracking-wider text-brand-primary uppercase mt-1">Breakfast</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                      <Map size={15} className="text-[#2E7D32]" />
                    </div>
                    <span className="text-[10px] font-heading font-bold tracking-wider text-brand-primary uppercase mt-1">Sightseeing</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                      <Car size={15} className="text-[#2E7D32]" />
                    </div>
                    <span className="text-[10px] font-heading font-bold tracking-wider text-brand-primary uppercase mt-1">Transport</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedItinerary(pack)}
                    className="flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary font-heading font-bold tracking-widest uppercase text-xs py-3.5 transition-all duration-300 hover:bg-brand-primary hover:text-brand-light"
                  >
                    <Eye size={14} /> View Itinerary
                  </button>
                  <a
                    href={`https://wa.me/${brand.whatsapp}?text=Hello%20Al%20Minhaj%20Tour%20%26%20Travels%2C%20I'd%20like%20to%20enquire%20about%20the%20"${pack.title}"%20(${pack.duration})%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-bold tracking-widest uppercase text-xs py-3.5 transition-all duration-300 hover:bg-[#20ba59] hover:shadow-lg"
                  >
                    <MessageCircle size={14} /> Enquire Now
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Itinerary Modal Popup */}
      <AnimatePresence>
        {selectedItinerary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/65 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-brand-light border border-brand-accent/20 w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="bg-brand-primary text-brand-light p-6 border-b border-brand-accent/20 flex justify-between items-start">
                <div>
                  <span className="font-heading text-xs font-semibold tracking-widest uppercase text-brand-accent mb-1 block">
                    {selectedItinerary.duration} Itinerary
                  </span>
                  <h3 className="font-display text-3xl tracking-wide uppercase leading-none text-brand-light">
                    {selectedItinerary.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItinerary(null)}
                  className="p-1 text-brand-light/70 hover:text-brand-accent transition-colors outline-none"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6 scrollbar-thin">
                {selectedItinerary.itinerary.map((dayPlan, idx) => (
                  <div key={idx} className="flex gap-4 border-l border-brand-accent/20 pl-5 ml-2 relative">
                    {/* Glowing Bullet point */}
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-brand-accent rounded-full border border-brand-primary" />
                    
                    <div>
                      <div className="font-heading text-xs font-bold tracking-widest uppercase text-brand-accent mb-1">
                        {dayPlan.day}
                      </div>
                      <h4 className="font-heading text-base font-semibold text-brand-primary tracking-wide mb-2 uppercase">
                        {dayPlan.title}
                      </h4>
                      <p className="font-body text-sm text-brand-primary/80 leading-relaxed">
                        {dayPlan.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-brand-primary/10 bg-white flex justify-between items-center gap-4">
                <div className="hidden sm:block">
                  <span className="font-body text-xs text-brand-muted">Starting Price:</span>
                  <div className="font-heading text-xl font-bold text-[#E03157]">
                    {selectedItinerary.price.current}
                  </div>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedItinerary(null)}
                    className="flex-1 sm:flex-initial border border-brand-primary text-brand-primary font-heading font-bold tracking-widest uppercase text-xs px-6 py-3"
                  >
                    Close
                  </button>
                  <a
                    href={`https://wa.me/${brand.whatsapp}?text=Hello%20Al%20Minhaj%2C%20I'd%20like%20to%20book%20the%20"${selectedItinerary.title}"%20(${selectedItinerary.duration})%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-bold tracking-widest uppercase text-xs px-6 py-3 hover:bg-[#20ba59] transition-colors"
                  >
                    <MessageCircle size={14} /> Book Now
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
