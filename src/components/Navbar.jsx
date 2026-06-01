import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const { brand, nav } = siteContent

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map(n => n.href.replace('#', ''))
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-light/95 backdrop-blur-md border-b border-brand-primary/15 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-brand-primary flex items-center justify-center transition-all duration-300 group-hover:bg-brand-accent">
                <span className="font-display text-base text-brand-light leading-none">AM</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-700 text-base tracking-wider text-brand-primary leading-tight uppercase">
                  Al Minhaj
                </div>
                <div className="font-body text-[10px] tracking-[0.2em] text-brand-accent uppercase">
                  Tour & Travels
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {nav.map(item => {
                const id = item.href.replace('#', '')
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`relative font-heading text-sm font-semibold tracking-widest uppercase transition-colors duration-200 group ${
                        activeSection === id ? 'text-brand-accent' : 'text-brand-primary hover:text-brand-accent'
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-brand-accent transition-all duration-300 ${
                          activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${brand.phone[0]}`}
                className="flex items-center gap-2 font-heading text-sm font-semibold tracking-wider uppercase text-brand-primary hover:text-brand-accent transition-colors duration-200"
              >
                <Phone size={14} />
                {brand.phone[0]}
              </a>
              <a href="#contact" className="btn-primary text-xs py-2.5 px-5">
                Book Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-brand-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-brand-light pt-20 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-6 pt-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={item.href}
                    className="font-display text-5xl text-brand-primary hover:text-brand-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-brand-primary/20 flex flex-col gap-3">
              <a href={`tel:${brand.phone[0]}`} className="btn-outline justify-center">
                <Phone size={16} /> Call Us
              </a>
              <a href="#contact" className="btn-primary justify-center" onClick={() => setMenuOpen(false)}>
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
