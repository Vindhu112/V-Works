import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { CONTACT } from '../config'

const SECTIONS = [
	{
		title: 'Information we collect',
		body:
			'We may collect basic contact details you share with us, such as your name, email address, phone number, company name, and project requirements. We may also collect technical information like browser type, device details, and page interactions to help keep the website secure and functioning properly.',
	},
	{
		title: 'How we use your information',
		body:
			'We use your information to respond to inquiries, provide quotes, deliver services, improve our website, maintain records, and meet legal or contractual obligations.',
	},
	{
		title: 'Sharing of information',
		body:
			'We do not sell your personal data. We may share limited information with trusted service providers, such as hosting, analytics, email delivery, or payment partners, only when needed to operate our business and deliver services.',
	},
	{
		title: 'Cookies and analytics',
		body:
			'Our website may use cookies or similar technologies to understand traffic, improve performance, and remember basic preferences. You can control cookies through your browser settings.',
	},
	{
		title: 'Data security and retention',
		body:
			'We use reasonable administrative and technical safeguards to protect your information. We keep personal data only as long as necessary for the purpose it was collected, to comply with legal requirements, or to resolve disputes.',
	},
	{
		title: 'Your choices',
		body:
			'You may request access, correction, or deletion of your personal information by contacting us. You may also opt out of non-essential communications at any time.',
	},
]

export default function PrivacyPolicy({ onBackHome }) {
	return (
		<main id="privacy-policy" className="w-full px-margin-mobile md:px-margin-desktop py-unit-xxl">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					className="bg-white border border-[#E2E8F0] rounded-2xl p-unit-lg md:p-10 shadow-[0px_12px_40px_rgba(15,23,42,0.04)]"
				>
					<div className="flex flex-col gap-4 mb-10">
						<div className="flex items-center justify-between gap-4 flex-wrap">
							<span className="font-bold uppercase tracking-[0.05em] text-[12px] leading-4 text-primary">
								V-Works
							</span>
							<button
								type="button"
								onClick={onBackHome}
								className="text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors"
							>
								Back to website
							</button>
						</div>

						<div>
							<h1 className="text-h1 text-on-surface mb-3">Privacy Policy</h1>
							<p className="text-body-md text-on-surface-variant max-w-3xl">
								This policy explains how V-Works collects, uses, and protects
								information when you visit our website or contact us for IT
								services.
							</p>
							<p className="text-body-sm text-on-surface-variant mt-3">
								Last updated: 19 June 2026
							</p>
						</div>
					</div>

					<div className="space-y-8">
						{SECTIONS.map((section) => (
							<section key={section.title} className="space-y-3">
								<h2 className="text-h3 text-on-surface">{section.title}</h2>
								<p className="text-body-md text-on-surface-variant leading-7">
									{section.body}
								</p>
							</section>
						))}

						<section className="space-y-3">
							<h2 className="text-h3 text-on-surface">Contact us</h2>
							<p className="text-body-md text-on-surface-variant leading-7">
								If you have any questions about this policy or your personal
								data, contact us at{' '}
								<a className="text-primary font-medium" href={`mailto:${CONTACT.email}`}>
									{CONTACT.email}
								</a>{' '}
								or call{' '}
								<a className="text-primary font-medium" href={`tel:${CONTACT.phoneE164}`}>
									{CONTACT.phoneDisplay}
								</a>
								.
							</p>
						</section>
					</div>
				</motion.div>
			</div>

			<div className="mt-unit-xxl">
				<Footer />
			</div>
		</main>
	)
}
