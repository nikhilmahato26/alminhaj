import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`border-b border-brand-primary/15 transition-colors duration-300 ${isOpen ? 'border-brand-accent/30' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className={`font-heading text-base font-semibold tracking-wide uppercase transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-brand-primary group-hover:text-brand-accent'}`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-brand-muted'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-brand-muted leading-relaxed pb-6 text-sm">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { faqs } = siteContent
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Left */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-brand-accent" />
              <span className="section-label">Common Questions</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title mb-6"
            >
              Got a<br />Question?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body text-brand-muted leading-relaxed mb-8"
            >
              Can't find your answer here? Reach us directly on WhatsApp — we typically respond within minutes.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="btn-primary"
            >
              Ask Us Directly
            </motion.a>
          </div>

          {/* Right — Accordion */}
          <div className="border-t border-brand-primary/15">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
