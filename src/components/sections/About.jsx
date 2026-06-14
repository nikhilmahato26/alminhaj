import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CheckCircle2, MapPin, Sparkles } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('kashmir')
  const { about } = siteContent
  const { ref, isVisible } = useScrollReveal()

  const currentContent = activeTab === 'kashmir' ? about.kashmir : about.agency

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="relative p-1 bg-brand-dark/50 border border-brand-light/10 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('kashmir')}
              className={`relative z-10 px-6 md:px-8 py-3 rounded-full text-xs font-heading font-bold tracking-widest uppercase transition-colors duration-300 ${
                activeTab === 'kashmir' ? 'text-brand-primary font-bold' : 'text-brand-light/60 hover:text-brand-light'
              }`}
            >
              {activeTab === 'kashmir' && (
                <motion.span
                  layoutId="activeTabBackground"
                  className="absolute inset-0 bg-brand-accent rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              About Kashmir
            </button>
            <button
              onClick={() => setActiveTab('agency')}
              className={`relative z-10 px-6 md:px-8 py-3 rounded-full text-xs font-heading font-bold tracking-widest uppercase transition-colors duration-300 ${
                activeTab === 'agency' ? 'text-brand-primary font-bold' : 'text-brand-light/60 hover:text-brand-light'
              }`}
            >
              {activeTab === 'agency' && (
                <motion.span
                  layoutId="activeTabBackground"
                  className="absolute inset-0 bg-brand-accent rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              Our Agency
            </button>
          </div>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            {/* Image side */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src={currentContent.image}
                  alt={activeTab === 'kashmir' ? 'Kashmir Valley' : 'Al Minhaj Travels'}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Decorative frame */}
                <div className="absolute inset-0 border border-brand-accent/30" />
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-accent/20 -z-10" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-accent p-5 md:p-6"
              >
                {activeTab === 'kashmir' ? (
                  <>
                    <div className="font-display text-4xl md:text-5xl text-brand-primary flex items-center gap-1">
                      <Sparkles className="w-6 h-6 fill-current text-brand-primary shrink-0 animate-pulse-slow" />
                      HEAVEN
                    </div>
                    <div className="font-heading text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-primary/70 mt-1">
                      Paradise on Earth
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-display text-4xl md:text-5xl text-brand-primary">10+</div>
                    <div className="font-heading text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-primary/70 mt-1">
                      Years of Trust
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            {/* Text side */}
            <div ref={ref}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-accent" />
                <span className="section-label">{currentContent.badge}</span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl text-brand-light leading-none mb-8">
                {currentContent.headline.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>

              {currentContent.body.map((para, i) => (
                <p
                  key={i}
                  className="font-body text-brand-light/65 leading-relaxed mb-5 text-sm md:text-base"
                >
                  {para}
                </p>
              ))}

              {/* Unique Features for Agency */}
              {activeTab === 'agency' && currentContent.features && (
                <div className="mt-8 pt-8 border-t border-brand-light/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentContent.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                      <span className="font-body text-sm text-brand-light/80 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Callout Outro */}
              <div className="mt-8 p-6 bg-brand-dark/40 border border-brand-accent/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                  <MapPin className="w-24 h-24 text-brand-accent" />
                </div>
                <p className="font-body text-sm text-brand-light/95 leading-relaxed italic relative z-10">
                  {currentContent.outro}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
