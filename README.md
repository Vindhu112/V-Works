# V-Works

A React website for V-Works — a service brand of **Vishwakarma Ventures & Innovations LLP**.

Built with **Vite + React + Tailwind CSS + Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The build output goes to `dist/` — drop it on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

---

## Contact form → email setup (1 minute)

Contact form submissions are delivered to **pramood.karthik@gmail.com** using [Web3Forms](https://web3forms.com), a free service that requires no backend.

### Step 1 — Get an access key

1. Go to https://web3forms.com
2. Enter `pramood.karthik@gmail.com` in the field on their homepage
3. Click **Create Access Key**
4. Check that inbox — you'll receive an access key (a UUID-style string)

That email address is permanently bound to the key. Every form submission using this key will be delivered there.

### Step 2 — Wire it in

Either edit `src/config.js` directly:

```js
export const WEB3FORMS_ACCESS_KEY = 'paste-your-key-here'
```

Or (preferred) create a `.env` file at the project root:

```
VITE_WEB3FORMS_ACCESS_KEY=paste-your-key-here
```

Restart `npm run dev` after creating/editing `.env`.

### Step 3 — Verify

Submit the form on the live site. You should see a success message and an email in your inbox within seconds.

Until the key is added, the form shows a friendly notice instead of failing silently.

---

## What you should update before going live

Open `src/config.js` and replace:

- `CONTACT.email` — the public contact email shown on the site
- `CONTACT.phoneDisplay` / `phoneE164` — the displayed and dialable phone numbers
- `CONTACT.whatsappNumber` — the WhatsApp number (E.164 without the `+`)
- `CONTACT.gstin` — the actual GSTIN displayed in the footer

---

## Project structure

```
src/
├── App.jsx                # Page composition
├── main.jsx               # React entry
├── index.css              # Tailwind + base styles
├── config.js              # Contact + Web3Forms config
└── components/
    ├── Navbar.jsx         # Sticky nav, mobile menu
    ├── Hero.jsx           # Hero section
    ├── Services.jsx       # Core services cards
    ├── WhyUs.jsx          # Why-us + About bento grid
    ├── Contact.jsx        # Contact info + form
    ├── Footer.jsx         # Footer
    ├── WhatsAppFloat.jsx  # Floating WhatsApp button
    └── Reveal.jsx         # Scroll-reveal wrapper (Framer Motion)
```

---

## Design system

All design tokens (colors, type scale, spacing, radii) are mirrored from the original `DESIGN.md` brief into `tailwind.config.js`. The visual language stays unchanged — Framer Motion was added strictly for subtle, professional enhancements (scroll reveals, hover micro-interactions, animated mobile menu) consistent with the "Restrained Confidence" tone.
