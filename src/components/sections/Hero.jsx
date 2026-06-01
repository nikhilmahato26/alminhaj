import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteContent } from '../../data/siteContent'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { hero, brand } = siteContent

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt="Kashmir landscape"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Layered overlays for industrial feel */}
        <div className="absolute inset-0 bg-brand-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(200,168,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-brand-accent" />
            <span className="font-heading text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            {hero.headline.map((line, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={i + 1}
              >
                <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] text-brand-light leading-[0.9] tracking-tight">
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="font-body text-brand-light/75 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="flex flex-wrap gap-4"
          >
            <a href={hero.cta.href} className="btn-primary">
              {hero.cta.label} <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/50 text-white font-heading font-semibold tracking-wider uppercase text-sm px-7 py-4 transition-all duration-300 hover:bg-[#25D366] hover:-translate-y-0.5"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-16 pt-8 border-t border-brand-light/20 flex flex-wrap gap-8 md:gap-16"
        >
          {hero.stats.map(stat => (
            <div key={stat.label}>
              <div className="font-display text-4xl text-brand-accent">{stat.value}</div>
              <div className="font-heading text-xs font-semibold tracking-widest uppercase text-brand-light/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-brand-light/40 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-brand-accent/60"
        />
      </motion.div>
    </section>
  )
}
