import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Destinations() {
  const { ref, isVisible } = useScrollReveal()
  const destinations = siteContent.destinations

  return (
    <section id="destinations" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-brand-accent" />
            <span className="section-label">Top Destinations</span>
            <span className="w-8 h-px bg-brand-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Kashmir Awaits
          </motion.h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? 'md:row-span-2 md:col-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? undefined : '4/3', minHeight: i === 0 ? '400px' : undefined }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
                onError={(event) => {
                  if (dest.fallback && event.currentTarget.src !== dest.fallback) {
                    event.currentTarget.src = dest.fallback
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent" />
              <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <div className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent mb-1">
                  {dest.tagline}
                </div>
                <div className={`font-display text-brand-light leading-none ${i === 0 ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
                  {dest.name}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <span className="text-white text-xs">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
