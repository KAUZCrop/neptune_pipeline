import { useEffect } from 'react'
import IntroOverlay from './components/IntroOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import CaseStudies from './components/CaseStudies'
import Clients from './components/Clients'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach(r => io.observe(r))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <IntroOverlay />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <CaseStudies />
      <Clients />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <FloatingButton />
    </>
  )
}
