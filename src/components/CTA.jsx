import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function CTAStrip() {
  const { brand } = siteContent

  return (
    <section className="relative overflow-hidden py-20 bg-brand-accent">
      {/* Animated background */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-primary/20 pointer-events-none"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(26,58,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,42,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-brand-primary/70 mb-3">
              Ready to travel?
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-brand-primary leading-none">
              Your Kashmir<br />Story Starts Now.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary text-brand-light font-heading font-semibold tracking-wider uppercase text-sm px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle size={16} /> WhatsApp Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-heading font-semibold tracking-wider uppercase text-sm px-8 py-4 transition-all duration-300 hover:bg-brand-primary hover:text-brand-light hover:-translate-y-0.5"
            >
              Plan Your Trip <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
