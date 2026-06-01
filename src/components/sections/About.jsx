import { motion } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const { about } = siteContent
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={about.image}
                alt="Kashmir valley"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-brand-accent/30" />
              <div className="absolute -top-3 -right-3 w-full h-full border border-brand-accent/20 -z-10" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-accent p-6"
            >
              <div className="font-display text-5xl text-brand-primary">10+</div>
              <div className="font-heading text-xs font-semibold tracking-widest uppercase text-brand-primary/70 mt-1">
                Years of Trust
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-brand-accent" />
              <span className="section-label">{about.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl text-brand-light leading-none mb-8"
            >
              {about.headline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </motion.h2>

            {about.body.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="font-body text-brand-light/65 leading-relaxed mb-5"
              >
                {para}
              </motion.p>
            ))}

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-8 border-t border-brand-light/15 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {about.pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="group"
                >
                  <CheckCircle2 size={20} className="text-brand-accent mb-3" />
                  <div className="font-heading text-sm font-semibold tracking-widest uppercase text-brand-light mb-1.5">
                    {p.label}
                  </div>
                  <div className="font-body text-xs text-brand-light/50 leading-relaxed">{p.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
