import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import PrivacyPolicy from './company_pages/privacy_policy'

const isPrivacyRoute = () => window.location.hash === '#privacy-policy'

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(() =>
    typeof window !== 'undefined' ? isPrivacyRoute() : false,
  )
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : '',
  )

  useEffect(() => {
    const onHashChange = () => setShowPrivacy(isPrivacyRoute())
      
    const syncHash = () => setHash(window.location.hash)

    onHashChange()
    syncHash()
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  useEffect(() => {
    if (showPrivacy) return
    if (!hash || hash === '#') return

    const targetId = hash.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ block: 'start' })
      })
    }
  }, [hash, showPrivacy])

  return (
    <div className="bg-[#F8FAFC] text-on-surface antialiased min-h-screen">
      {showPrivacy ? (
        <PrivacyPolicy onBackHome={() => { window.location.hash = '#' }} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <WhyUs />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <WhatsAppFloat />
    </div>
  )
}
