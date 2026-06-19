import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { CONTACT, WEB3FORMS_ACCESS_KEY, NOTIFY_EMAIL } from '../config'

const PROJECT_TYPES = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'ai', label: 'Machine Learning / AI Solutions' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'other', label: 'Other' },
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: 'web',
  message: '',
  botcheck: '', // honeypot
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status.state === 'loading') return

    const keyMissing =
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'

    if (keyMissing) {
      setStatus({
        state: 'error',
        message:
          'Form is not yet connected. Add a Web3Forms access key in src/config.js — see README.md for the 1-minute setup.',
      })
      return
    }

    setStatus({ state: 'loading', message: '' })

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New V-Works inquiry from ${form.name || 'website visitor'}`,
        from_name: 'V-Works Website',
        // The Web3Forms account is configured to deliver to NOTIFY_EMAIL,
        // but we also include it as a hint:
        to_email: NOTIFY_EMAIL,
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        project_type:
          PROJECT_TYPES.find((p) => p.value === form.projectType)?.label ||
          form.projectType,
        message: form.message,
        botcheck: form.botcheck,
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        setStatus({
          state: 'success',
          message:
            "Thank you. Your inquiry has been received — we'll respond shortly.",
        })
        setForm(initialForm)
      } else {
        setStatus({
          state: 'error',
          message:
            data.message ||
            'Submission failed. Please try again or email us directly.',
        })
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message:
          'Network error. Please try again, or reach us via email or WhatsApp.',
      })
    }
  }

  const inputCls =
    'w-full border border-[#E2E8F0] rounded-lg px-4 py-2 text-body-md focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-[#F8FAFC]'

  return (
    <section
      id="contact"
      className="w-full bg-white py-unit-xxl border-t border-[#E2E8F0]"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-unit-xl">
          {/* Left: Contact Info */}
          <Reveal className="w-full md:w-5/12 flex flex-col gap-8">
            <div>
              <h2 className="text-h2 text-on-surface mb-2">Initiate a Project</h2>
              <p className="text-body-md text-on-surface-variant">
                Reach out for a structured consultation regarding your technical
                requirements.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <ContactRow
                href={`mailto:${CONTACT.email}`}
                icon="mail"
                label="Email Us"
                value={CONTACT.email}
              />
              <ContactRow
                href={`tel:${CONTACT.phoneE164}`}
                icon="call"
                label="Call Us"
                value={CONTACT.phoneDisplay}
              />
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 bg-[#f0f9f4] border border-[#d1e8dc] rounded-lg hover:border-[#25D366] transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#25D366] shadow-sm">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-[0.05em] text-[12px] leading-4 text-on-surface-variant">
                    Chat on WhatsApp
                  </p>
                  <p className="text-body-md text-on-surface font-medium">
                    Fastest response
                  </p>
                </div>
              </motion.a>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.1} className="w-full md:w-7/12">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-unit-lg md:p-8 shadow-[0px_4px_24px_rgba(15,23,42,0.03)]">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6"
              >
                {/* Honeypot — invisible to humans */}
                <input
                  type="text"
                  name="botcheck"
                  value={form.botcheck}
                  onChange={onChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Company" name="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Email" name="email" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone" name="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="Project Type" name="projectType">
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={onChange}
                    className={`${inputCls} appearance-none cursor-pointer pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2345464d'><path d='M7 10l5 5 5-5z'/></svg>\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '20px',
                    }}
                  >
                    {PROJECT_TYPES.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" name="message" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className={`${inputCls} resize-y`}
                  />
                </Field>

                <AnimatePresence mode="wait">
                  {status.state !== 'idle' && status.state !== 'loading' && (
                    <motion.div
                      key={status.state}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      role={status.state === 'error' ? 'alert' : 'status'}
                      className={`text-body-md px-4 py-3 rounded-lg border ${
                        status.state === 'success'
                          ? 'bg-[#f0f9f4] border-[#d1e8dc] text-[#1a6b3a]'
                          : 'bg-error-container/40 border-error/30 text-on-error-container'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ y: status.state === 'loading' ? 0 : -1 }}
                  whileTap={{ scale: status.state === 'loading' ? 1 : 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="bg-primary text-on-primary text-body-md font-medium px-8 py-3 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 shadow-sm w-full sm:w-auto self-start mt-2 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 min-w-[180px]"
                >
                  {status.state === 'loading' ? (
                    <>
                      <Spinner /> Sending…
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ href, icon, label, value }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      href={href}
      className="flex items-center gap-4 group p-4 border border-[#E2E8F0] rounded-lg hover:border-primary transition-colors"
    >
      <div className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined" aria-hidden>
          {icon}
        </span>
      </div>
      <div>
        <p className="font-bold uppercase tracking-[0.05em] text-[12px] leading-4 text-on-surface-variant">
          {label}
        </p>
        <p className="text-body-md text-on-surface font-medium">{value}</p>
      </div>
    </motion.a>
  )
}

function Field({ label, name, required, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-caption text-on-surface-variant font-medium"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      {children}
    </div>
  )
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
      />
    </svg>
  )
}

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
