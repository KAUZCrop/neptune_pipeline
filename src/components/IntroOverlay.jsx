import { useState, useEffect } from 'react'

export default function IntroOverlay() {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem('remake_intro_played')) {
        setGone(true)
        return
      }
      sessionStorage.setItem('remake_intro_played', '1')
    } catch (e) {}

    const timer = setTimeout(() => setGone(true), 7900)
    return () => clearTimeout(timer)
  }, [])

  if (gone) return null

  return (
    <div className="intro-overlay" id="introOverlay" aria-hidden="true">
      <div className="intro-floor"></div>
      <div className="intro-drift">
        <div className="intro-drift-line d1"></div>
        <div className="intro-drift-line d2"></div>
        <div className="intro-drift-line d3"></div>
        <div className="intro-drift-line d4"></div>
      </div>
      <div className="intro-dots">
        <span className="intro-dot d1"></span><span className="intro-dot d2"></span>
        <span className="intro-dot d3"></span><span className="intro-dot d4"></span>
        <span className="intro-dot d5"></span><span className="intro-dot d6"></span>
        <span className="intro-dot d7"></span><span className="intro-dot d8"></span>
        <span className="intro-dot d9"></span><span className="intro-dot d10"></span>
      </div>
      <div className="intro-vignette"></div>

      <div className="intro-corner tl">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 14 V2 H14" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>
      <div className="intro-corner tr">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 14 V2 H14" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>
      <div className="intro-corner bl">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 14 V2 H14" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>
      <div className="intro-corner br">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 14 V2 H14" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      <div className="intro-counter">FRAME <span>007 / 145</span></div>
      <div className="intro-label">SEQ · INTRO</div>

      <div className="intro-stage">
        <div className="intro-hairline"></div>
        <div className="intro-eyebrow">PERFORMANCE MARKETING · SINCE 2007</div>

        <div className="intro-logo-wrap">
          <span className="intro-side-bracket left"></span>
          <div className="intro-logo" aria-label="REMAKE">
            <span className="intro-letter l1">R</span>
            <span className="intro-letter l2">E</span>
            <span className="intro-letter l3">M</span>
            <span className="intro-letter l4">A</span>
            <span className="intro-letter l5">K</span>
            <span className="intro-letter l6 e-svg" aria-hidden="true">
              <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
                <g transform="skewX(-12)">
                  <rect className="e-bar b1" x="0" y="8" width="92" height="22" rx="2"/>
                  <rect className="e-bar b2" x="0" y="59" width="74" height="22" rx="2"/>
                  <rect className="e-bar b3" x="0" y="110" width="92" height="22" rx="2"/>
                </g>
              </svg>
            </span>
            <div className="intro-scan"></div>
          </div>
          <span className="intro-side-bracket right"></span>
        </div>

        <div className="intro-accent"></div>
        <div className="intro-tagline">We Remake the Result.</div>
        <div className="intro-stats">
          <span className="intro-stat"><span className="intro-stat-num">18</span>YEARS</span>
          <span className="intro-stat-sep"></span>
          <span className="intro-stat"><span className="intro-stat-num">145+</span>CLIENTS</span>
          <span className="intro-stat-sep"></span>
          <span className="intro-stat"><span className="intro-stat-num">#1</span>SOLUTION</span>
        </div>
      </div>

      <div className="intro-flash-soft"></div>

      <div className="intro-wave w1">
        <svg viewBox="0 0 800 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E24B4A" stopOpacity="0"/>
              <stop offset="12%" stopColor="#E24B4A" stopOpacity="0.35"/>
              <stop offset="28%" stopColor="#E24B4A" stopOpacity="0.75"/>
              <stop offset="48%" stopColor="#E24B4A" stopOpacity="1"/>
              <stop offset="100%" stopColor="#E24B4A" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad1)">
            <animate attributeName="d" dur="2.6s" repeatCount="indefinite"
              values="M 100 0 C 130 70, 60 140, 100 210 C 140 280, 50 350, 90 420 C 130 490, 60 560, 100 630 C 140 700, 50 770, 90 840 C 130 910, 60 970, 100 1000 L 800 1000 L 800 0 Z;M 110 0 C 140 80, 70 150, 110 220 C 150 290, 60 360, 100 430 C 140 500, 70 570, 110 640 C 150 710, 60 780, 100 850 C 140 920, 70 980, 110 1000 L 800 1000 L 800 0 Z;M 90 0 C 120 60, 50 130, 90 200 C 130 270, 40 340, 80 410 C 120 480, 50 550, 90 620 C 130 690, 40 760, 80 830 C 120 900, 50 960, 90 1000 L 800 1000 L 800 0 Z;M 100 0 C 130 70, 60 140, 100 210 C 140 280, 50 350, 90 420 C 130 490, 60 560, 100 630 C 140 700, 50 770, 90 840 C 130 910, 60 970, 100 1000 L 800 1000 L 800 0 Z"
            />
          </path>
        </svg>
      </div>

      <div className="intro-wave w2">
        <svg viewBox="0 0 800 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="550" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ef5e5d" stopOpacity="0"/>
              <stop offset="18%" stopColor="#ef5e5d" stopOpacity="0.55"/>
              <stop offset="40%" stopColor="#E24B4A" stopOpacity="0.95"/>
              <stop offset="65%" stopColor="#E24B4A" stopOpacity="1"/>
              <stop offset="100%" stopColor="#E24B4A" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad2)">
            <animate attributeName="d" dur="2.2s" repeatCount="indefinite"
              values="M 70 0 C 50 80, 110 150, 80 220 C 50 290, 120 360, 80 430 C 50 500, 110 570, 80 640 C 50 710, 120 780, 80 850 C 50 920, 110 980, 80 1000 L 800 1000 L 800 0 Z;M 80 0 C 60 90, 120 160, 90 230 C 60 300, 130 370, 90 440 C 60 510, 120 580, 90 650 C 60 720, 130 790, 90 860 C 60 930, 120 990, 90 1000 L 800 1000 L 800 0 Z;M 60 0 C 40 70, 100 140, 70 210 C 40 280, 110 350, 70 420 C 40 490, 100 560, 70 630 C 40 700, 110 770, 70 840 C 40 910, 100 970, 70 1000 L 800 1000 L 800 0 Z;M 70 0 C 50 80, 110 150, 80 220 C 50 290, 120 360, 80 430 C 50 500, 110 570, 80 640 C 50 710, 120 780, 80 850 C 50 920, 110 980, 80 1000 L 800 1000 L 800 0 Z"
            />
          </path>
        </svg>
      </div>

      <div className="intro-wave w3">
        <svg viewBox="0 0 800 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="foamFade" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,200,200,0)"/>
              <stop offset="60%" stopColor="rgba(255,200,200,0.65)"/>
              <stop offset="100%" stopColor="rgba(255,200,200,0)"/>
            </linearGradient>
          </defs>
          <path fill="none" stroke="url(#foamFade)" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="d" dur="2s" repeatCount="indefinite"
              values="M 60 0 C 90 70, 30 140, 70 210 C 110 280, 20 350, 60 420 C 100 490, 30 560, 70 630 C 110 700, 20 770, 60 840 C 100 910, 30 970, 60 1000;M 70 0 C 100 80, 40 150, 80 220 C 120 290, 30 360, 70 430 C 110 500, 40 570, 80 640 C 120 710, 30 780, 70 850 C 110 920, 40 980, 70 1000;M 50 0 C 80 60, 20 130, 60 200 C 100 270, 10 340, 50 410 C 90 480, 20 550, 60 620 C 100 690, 10 760, 50 830 C 90 900, 20 960, 50 1000;M 60 0 C 90 70, 30 140, 70 210 C 110 280, 20 350, 60 420 C 100 490, 30 560, 70 630 C 110 700, 20 770, 60 840 C 100 910, 30 970, 60 1000"
            />
          </path>
        </svg>
      </div>
    </div>
  )
}
