import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function FloatingCTA() {
  const { brand } = siteContent
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="bg-white shadow-2xl border border-brand-primary/10 p-5 w-64 mb-1"
          >
            <p className="font-heading text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Reach Us Directly
            </p>
            <a
              href={`https://wa.me/${brand.whatsapp}?text=Hi%20Al%20Minhaj%2C%20I'd%20like%20to%20enquire%20about%20a%20Kashmir%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 bg-[#25D366] text-white font-heading font-semibold tracking-wide uppercase text-xs mb-3 hover:-translate-y-0.5 transition-transform"
            >
              <MessageCircle size={15} /> WhatsApp Chat
            </a>
            <a
              href={`tel:${brand.phone[0]}`}
              className="flex items-center gap-3 py-3 px-4 bg-brand-primary text-brand-light font-heading font-semibold tracking-wide uppercase text-xs hover:-translate-y-0.5 transition-transform"
            >
              <Phone size={15} /> Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] text-white shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Contact us"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
