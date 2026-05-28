import { useRef, useEffect } from 'react'

export default function FloatingButton() {
  const fabRef = useRef(null)

  useEffect(() => {
    const fab = fabRef.current
    const contact = document.getElementById('contact')

    const updateFab = () => {
      const scrolled = window.scrollY > 400
      const inContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false
      fab?.classList.toggle('show', scrolled && !inContact)
    }

    window.addEventListener('scroll', updateFab, { passive: true })
    updateFab()
    return () => window.removeEventListener('scroll', updateFab)
  }, [])

  return (
    <a href="#contact" className="fab-contact" id="fabContact" ref={fabRef} aria-label="광고 대행 문의하기">
      <span className="fab-pulse" aria-hidden="true"></span>
      <svg className="fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        <circle cx="8" cy="11.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="11.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="11.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
      <span>광고 대행 문의하기</span>
      <svg className="fab-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 6l6 6-6 6"/>
      </svg>
    </a>
  )
}
