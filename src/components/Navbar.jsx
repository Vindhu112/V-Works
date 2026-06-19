import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/95 border-b border-outline-variant/30'
          : 'bg-surface-container-lowest/80 border-b border-transparent'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <a
          aria-label="V-Works Home"
          href="#"
          className="text-h3 font-bold text-on-surface flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined icon-filled text-primary"
            aria-hidden="true"
          >
            developer_board
          </span>
          V-Works
        </a>

        <ul className="hidden md:flex gap-unit-lg items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-on-surface-variant font-bold uppercase tracking-[0.05em] text-[12px] leading-4 hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            href="#contact"
            className="hidden md:inline-flex bg-primary text-on-primary font-bold uppercase tracking-[0.05em] text-[12px] leading-4 px-6 py-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 items-center justify-center cursor-pointer shadow-sm"
          >
            Get a Quote
          </motion.a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden text-on-surface-variant p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="material-symbols-outlined"
              aria-hidden="true"
            >
              {open ? 'close' : 'menu'}
            </motion.span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-surface-container-lowest border-t border-outline-variant/30 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-margin-mobile gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={close}
                    className="block text-on-surface-variant font-bold uppercase tracking-[0.05em] text-[12px] leading-4 hover:text-primary w-full py-3"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2 mt-2 border-t border-outline-variant/20">
                <a
                  href="#contact"
                  onClick={close}
                  className="block text-center bg-primary text-on-primary font-bold uppercase tracking-[0.05em] text-[12px] leading-4 px-4 py-3 rounded-lg mt-2"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
