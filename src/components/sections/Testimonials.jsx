import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Testimonials() {
  const { testimonials } = siteContent
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-brand-accent" />
            <span className="section-label">Travellers Say</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title max-w-lg"
          >
            Real Journeys,<br />Real Stories.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white border border-brand-primary/10 p-7 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <Quote size={28} className="text-brand-accent/25" />
              </div>

              <p className="font-body text-brand-primary/70 leading-relaxed text-sm flex-1">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-brand-primary/10">
                <div className="font-heading text-sm font-semibold tracking-widest uppercase text-brand-primary">
                  {t.name}
                </div>
                <div className="font-body text-xs text-brand-muted mt-0.5">{t.location}</div>
                <div className="font-heading text-[10px] tracking-widest uppercase text-brand-accent mt-2">
                  {t.trip}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
