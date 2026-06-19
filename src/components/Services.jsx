import { motion } from 'framer-motion'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: 'language',
    title: 'Web Development',
    body:
      'Scalable, responsive web applications built on robust modern frameworks. We deliver platforms that ensure high availability and seamless user experiences across all devices.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    body:
      'Native and cross-platform mobile solutions designed for enterprise deployment. Focus on security, offline capabilities, and intuitive institutional-grade UI/UX.',
  },
  {
    icon: 'memory',
    title: 'Machine Learning / AI',
    body:
      'Practical AI integration for process automation, predictive analytics, and intelligent systems. We deploy models that drive measurable business efficiency.',
  },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white py-unit-xxl border-y border-[#E2E8F0]"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal className="flex flex-col gap-2 mb-unit-xl">
          <h2 className="text-h2 text-on-surface">Core Services</h2>
          <p className="text-body-md text-on-surface-variant max-w-3xl">
            Engineered solutions focusing on business value, performance, and
            maintainability.
          </p>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-unit-lg hover:shadow-[0px_4px_16px_rgba(15,23,42,0.06)] transition-shadow duration-300 flex flex-col gap-4 h-full"
            >
              <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary mb-2">
                <span
                  className="material-symbols-outlined icon-filled"
                  aria-hidden
                >
                  {s.icon}
                </span>
              </div>
              <h3 className="text-h3 text-on-surface">{s.title}</h3>
              <p className="text-body-md text-on-surface-variant flex-grow">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
