import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Globe } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function Footer() {
  const { brand, nav } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-brand-light/70">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-accent flex items-center justify-center">
                <span className="font-display text-lg text-brand-primary leading-none">AM</span>
              </div>
              <div>
                <div className="font-heading font-700 text-base tracking-wider text-brand-light uppercase">Al Minhaj</div>
                <div className="font-body text-[10px] tracking-[0.2em] text-brand-accent uppercase">Tour & Travels</div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-brand-light/50 max-w-sm mb-6">
              Your trusted travel partner for seamless journeys across India and around the world — from Kashmir's snow peaks to global shores.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-heading font-semibold tracking-widest uppercase text-xs px-5 py-3 hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle size={14} /> WhatsApp Us
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={brand.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-light/10 flex items-center justify-center text-brand-light/50 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={brand.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-light/10 flex items-center justify-center text-brand-light/50 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={brand.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-light/10 flex items-center justify-center text-brand-light/50 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
                  aria-label="Google Listing"
                >
                  <Globe size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.25em] uppercase text-brand-accent mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {nav.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-brand-light/50 hover:text-brand-accent transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.25em] uppercase text-brand-accent mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-accent mt-0.5 shrink-0" />
                <div>
                  {brand.phone.map(p => (
                    <a key={p} href={`tel:${p}`} className="block font-body text-sm text-brand-light/50 hover:text-brand-accent transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-brand-accent mt-0.5 shrink-0" />
                <a href={`mailto:${brand.email}`} className="font-body text-xs text-brand-light/50 hover:text-brand-accent transition-colors break-all">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="font-body text-xs text-brand-light/50 leading-relaxed">{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-light/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-brand-light/30">
            © {year} Al Minhaj Tour & Travels. All rights reserved.
          </p>
          <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-brand-light/20">
            Kanelwan Bijbehara · Anantnag · Kashmir
          </p>
        </div>
      </div>
    </footer>
  )
}
