import Reveal from './Reveal'
import { CONTACT } from '../config'

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 w-full py-unit-xxl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col gap-unit-lg">
        <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="text-h3 font-bold text-on-surface flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined icon-filled text-primary"
                aria-hidden
              >
                developer_board
              </span>
              V-Works
            </div>
            <p className="text-body-md text-on-surface-variant max-w-sm">
              V-Works is a service brand of{' '}
              <strong>Vishwakarma Ventures &amp; Innovations LLP</strong>.
            </p>
            <div className="text-body-md text-on-surface-variant flex flex-col gap-1 mt-2">
              <span className="font-medium text-on-surface">
                GSTIN:{' '}
                <span className="font-normal text-on-surface-variant">
                  {CONTACT.gstin}
                </span>
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-[0.05em] text-[12px] leading-4 text-on-surface">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3 text-body-md">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                  href={`mailto:${CONTACT.email}`}
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden>
                    mail
                  </span>{' '}
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                  href={`tel:${CONTACT.phoneE164}`}
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden>
                    call
                  </span>{' '}
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-[0.05em] text-[12px] leading-4 text-on-surface">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-body-md">
              <li>
                <a
                  href="#privacy-policy"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
             
            </ul>
          </div>
        </Reveal>

        <div className="pt-8 mt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-md text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} V-Works IT Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
