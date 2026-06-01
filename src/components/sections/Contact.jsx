import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { siteContent } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Contact() {
  const { brand } = siteContent
  const { ref, isVisible } = useScrollReveal()

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', service: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit number'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Please describe your travel plan'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setStatus('loading')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setForm({ name: '', phone: '', email: '', message: '', service: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const fieldClass = (name) =>
    `w-full bg-brand-light border ${
      errors[name] ? 'border-red-400' : 'border-brand-primary/20 focus:border-brand-accent'
    } px-4 py-3.5 font-body text-sm text-brand-primary placeholder-brand-muted/60 outline-none transition-all duration-200 focus:bg-white`

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Left info — 2 cols */}
          <div className="md:col-span-2" ref={ref}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-brand-accent" />
              <span className="section-label">Get In Touch</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title mb-6"
            >
              Plan Your<br />Dream Trip.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body text-brand-muted leading-relaxed mb-10"
            >
              Fill in the form or reach us directly. We'll get back within a few hours with a personalised quote.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-5"
            >
              {[
                { icon: Phone, label: 'Phone', value: brand.phone.join(' / '), href: `tel:${brand.phone[0]}` },
                { icon: MessageCircle, label: 'WhatsApp', value: `+91 ${brand.phone[0]}`, href: `https://wa.me/${brand.whatsapp}` },
                { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
                { icon: MapPin, label: 'Location', value: brand.address, href: null },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 bg-brand-primary shrink-0 flex items-center justify-center">
                    <item.icon size={15} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-heading text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-muted mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="font-body text-sm text-brand-primary hover:text-brand-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body text-sm text-brand-primary">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${brand.whatsapp}?text=Hello%20Al%20Minhaj%2C%20I'd%20like%20to%20enquire%20about%20a%20Kashmir%20tour%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white font-heading font-semibold tracking-wider uppercase text-sm px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </motion.a>
          </div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 bg-white border border-brand-primary/10 p-8 md:p-10"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 gap-4"
              >
                <CheckCircle2 size={48} className="text-brand-accent" />
                <h3 className="font-display text-4xl text-brand-primary">All Set!</h3>
                <p className="font-body text-brand-muted max-w-xs">
                  Your enquiry has been received. We'll contact you within a few hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      className={fieldClass('name')}
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      className={fieldClass('phone')}
                      placeholder="Phone Number *"
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <input
                    className={fieldClass('email')}
                    placeholder="Email Address (optional)"
                    type="email"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                </div>

                <div>
                  <select
                    className={`${fieldClass('service')} appearance-none cursor-pointer`}
                    value={form.service}
                    onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  >
                    <option value="">Select a Service</option>
                    <option>Kashmir Holiday Package</option>
                    <option>Honeymoon Package</option>
                    <option>Group Tour</option>
                    <option>Flight Booking</option>
                    <option>Hotel / Houseboat</option>
                    <option>International Travel</option>
                    <option>Custom Itinerary</option>
                  </select>
                </div>

                <div>
                  <textarea
                    className={`${fieldClass('message')} resize-none`}
                    placeholder="Describe your travel plan, dates, group size... *"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-light/40 border-t-brand-light rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <><Send size={16} /> Send Enquiry</>
                  )}
                </button>

                <p className="font-body text-xs text-brand-muted text-center">
                  We typically reply within a few hours · No spam
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
