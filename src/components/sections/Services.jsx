import { motion } from 'framer-motion'
import { Plane, Mountain, Hotel, Map, Users, Globe, ArrowUpRight, Compass } from 'lucide-react'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const iconMap = { Plane, Mountain, Hotel, Map, Users, Globe, Compass }

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden bg-white border border-brand-primary/10 hover:border-brand-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/10 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <div className="w-9 h-9 bg-brand-accent flex items-center justify-center">
            <Icon size={16} className="text-brand-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-heading text-xl font-semibold tracking-wide text-brand-primary uppercase">
            {service.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-brand-muted group-hover:text-brand-accent transition-colors duration-300 shrink-0 mt-0.5"
          />
        </div>
        <p className="font-body text-sm text-brand-muted leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-brand-accent" />
              <span className="section-label">What We Offer</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title"
            >
              Complete Travel<br />Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-brand-muted max-w-sm leading-relaxed md:text-right"
          >
            From your first search to your last goodbye — we handle every detail so your journey is nothing but joy.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteContent.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
