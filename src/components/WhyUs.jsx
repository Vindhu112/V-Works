import { motion } from 'framer-motion'
import Reveal from './Reveal'

const POINTS = [
  {
    icon: 'architecture',
    title: 'Structured Delivery',
    body:
      'We employ rigorous project management methodologies ensuring predictable timelines and transparent milestone tracking.',
  },
  {
    icon: 'gavel',
    title: 'Registered Legal Entity',
    body:
      'Operating under complete legal compliance, offering clients absolute contractual security and accountability.',
  },
  {
    icon: 'receipt_long',
    title: 'GST Registered',
    body:
      'Fully compliant for B2B transactions, providing clear tax invoices for seamless integration into your corporate accounting.',
  },
  {
    icon: 'security',
    title: 'Data Security',
    body:
      'Institutional-grade security practices implemented across all development phases to protect intellectual property.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-unit-xxl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <Reveal className="lg:col-span-8 bg-white border border-[#E2E8F0] rounded-xl p-unit-lg md:p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-low rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
          <h2 className="text-h2 text-on-surface mb-6 relative z-10">
            Why Choose V-Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden
                  >
                    {p.icon}
                  </span>
                  <h3 className="text-[18px] font-semibold text-on-surface">
                    {p.title}
                  </h3>
                </div>
                <p className="text-body-md text-on-surface-variant">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="lg:col-span-4 bg-[#0F172A] text-white rounded-xl p-unit-lg md:p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div
            id="about"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDBMMTQgMTRNMTQgMEwwIDE0IiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=\")",
            }}
          />
          <div className="relative z-10">
            <span
              className="material-symbols-outlined text-[32px] text-white/80 mb-6 block"
              aria-hidden
            >
              corporate_fare
            </span>
            <h2 className="text-h3 text-white mb-4">About V-Works</h2>
            <p className="text-body-md text-white/80 leading-relaxed">
              V-Works is a specialized IT service brand operating under the
              umbrella of{' '}
              <strong className="text-white font-semibold">
                Vishwakarma Ventures &amp; Innovations LLP
              </strong>
              .
            </p>
            <p className="text-body-md text-white/80 leading-relaxed mt-4">
              We bridge the gap between innovative technology and pragmatic
              business requirements, acting as a reliable technical partner for
              enterprise growth.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
