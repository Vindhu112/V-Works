import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-unit-xxl md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-unit-xl">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full md:w-7/12 flex flex-col gap-6 order-2 md:order-1"
      >
        <motion.span
          variants={item}
          className="font-bold uppercase tracking-[0.05em] text-[12px] leading-4 text-primary"
        >
          V-Works
        </motion.span>
        <motion.h1
          variants={item}
          className="text-hero-lg-mobile md:text-hero-lg text-on-surface leading-tight"
        >
          Professional IT solutions for modern businesses.
        </motion.h1>
        <motion.p
          variants={item}
          className="text-body-lg text-on-surface-variant max-w-2xl"
        >
          Delivering web, mobile, and AI solutions with institutional-grade
          reliability. We engineer systems designed for scalability, performance,
          and long-term stability.
        </motion.p>
        <motion.div variants={item} className="pt-4 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            href="#contact"
            className="bg-primary text-on-primary text-body-md px-8 py-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 shadow-sm inline-flex items-center gap-2"
          >
            Get a Quote{' '}
            <span className="material-symbols-outlined text-[18px]" aria-hidden>
              arrow_forward
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="w-full md:w-5/12 order-1 md:order-2"
      >
        <div className="w-full aspect-[4/3] rounded-xl bg-white border border-[#E2E8F0] shadow-sm relative overflow-hidden group">
          <div
            className="bg-cover bg-center w-full h-full grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjJxN9QLpFTefTZag23c3nVXQeAcMlAtH4h_aZ5K4Hd54OX5DwP9ktOglVbFL8a8EeDyQ6MtKjDgZRHRzIae5dGI7DM39bx6QUkqKp6v-JIhONiWz36XxclfFgrmhO1oaPPvvbHt8gZNhyRR30fyxS3K4skgf7JL7DYT7jtjoZtTlzt25spJU2_K1jUjChRWxxK5HfurrcIsmKVCRNAARxyhHBbKPAAN00Z284YIASZDYd9jwb4VS6nBGNfD_RNHBmQRaLS6e9ZEI')",
            }}
            role="img"
            aria-label="Clean, minimalist workspace with multiple monitors displaying code and architecture diagrams."
          />
          <div
            className="absolute inset-0 mix-blend-multiply pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==\")",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
