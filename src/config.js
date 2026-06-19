// Centralized site configuration.
// Update these values for your environment.

// Web3Forms is used to deliver contact form submissions to your inbox.
// Submissions will be emailed to: pramood.karthik@gmail.com
//
// SETUP STEPS (one-time, ~1 minute):
//   1. Go to https://web3forms.com
//   2. Enter "pramood.karthik@gmail.com" and click "Create Access Key"
//   3. Check that inbox for the access key (a UUID string)
//   4. Paste it below in place of the placeholder, OR set it via
//      a Vite env variable: VITE_WEB3FORMS_ACCESS_KEY in a .env file.
//
// Until a real key is added, the form will display a friendly notice
// instead of attempting (and failing) to submit.
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'

export const CONTACT = {
  email: 'contact@vworks.dev',
  phoneDisplay: '+91 80740 25380',
  phoneE164: '+918074025380',
  whatsappNumber: '918074025380', // E.164 without the +
  gstin: '37ABAFV9465H1ZN',
}

export const NOTIFY_EMAIL = 'pramood.karthik@gmail.com'
