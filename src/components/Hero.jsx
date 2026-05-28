export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-anim-bg" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g className="bg-orbit bg-o1" style={{transformOrigin:'200px 220px'}}>
            <circle cx="200" cy="220" r="280" fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.15" strokeDasharray="2 8"/>
            <circle cx="480" cy="220" r="4" fill="#fff" opacity="0.6"/>
            <circle cx="-80" cy="220" r="3" fill="#111" opacity="0.5"/>
          </g>
          <g className="bg-orbit bg-o2" style={{transformOrigin:'1400px 680px'}}>
            <circle cx="1400" cy="680" r="340" fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.16" strokeDasharray="3 7"/>
            <circle cx="1400" cy="340" r="5" fill="#fff" opacity="0.6"/>
            <circle cx="1740" cy="680" r="3" fill="#111" opacity="0.5"/>
          </g>
          <g className="bg-orbit bg-o3" style={{transformOrigin:'800px 100px'}}>
            <circle cx="800" cy="100" r="180" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.12"/>
            <circle cx="980" cy="100" r="3" fill="#fff" opacity="0.5"/>
          </g>
          <circle className="bg-star bg-s1" cx="140" cy="500" r="2.5" fill="#fff"/>
          <circle className="bg-star bg-s2" cx="320" cy="120" r="3" fill="#fff"/>
          <circle className="bg-star bg-s3" cx="600" cy="320" r="2" fill="#111" opacity="0.7"/>
          <circle className="bg-star bg-s4" cx="940" cy="200" r="3" fill="#fff"/>
          <circle className="bg-star bg-s5" cx="1200" cy="420" r="2.5" fill="#111" opacity="0.6"/>
          <circle className="bg-star bg-s6" cx="1480" cy="180" r="3" fill="#fff"/>
          <circle className="bg-star bg-s7" cx="260" cy="720" r="2.5" fill="#fff"/>
          <circle className="bg-star bg-s8" cx="1080" cy="780" r="2.5" fill="#111" opacity="0.6"/>
          <circle className="bg-drift1" cx="500" cy="600" r="3.5" fill="#fff" opacity="0.7"/>
          <circle className="bg-drift2" cx="1100" cy="500" r="3" fill="#111" opacity="0.5"/>
          <circle className="bg-drift3" cx="780" cy="720" r="3" fill="#fff" opacity="0.6"/>
          <circle className="bg-pulse" cx="1300" cy="180" r="18" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle className="bg-pulse p2" cx="1300" cy="180" r="18" fill="none" stroke="#fff" strokeWidth="1"/>
          <circle className="bg-pulse p3" cx="1300" cy="180" r="18" fill="none" stroke="#fff" strokeWidth="1"/>
          <rect x="60" y="60" width="40" height="2" fill="#fff" opacity="0.4"/>
          <rect x="1500" y="820" width="40" height="2" fill="#111" opacity="0.4"/>
          <rect x="1520" y="440" width="60" height="2" fill="#fff" opacity="0.35"/>
          <g className="bg-sweep">
            <rect x="-200" y="0" width="200" height="900" fill="url(#sweepGrad)"/>
          </g>
          <defs>
            <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0"/>
              <stop offset="50%" stopColor="#fff" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <div className="hero-eyebrow">PERFORMANCE · SINCE 2007</div>
            <h1 className="hero-title">Remake<br />the <span className="red">Result.</span></h1>
            <p className="hero-sub">
              디지털 퍼포먼스 마케팅의 새로운 기준을 제시합니다.<br />
              18년간 145개 브랜드와 함께 쌓아온 데이터와 노하우로,<br />
              광고주의 다음 성과를 다시 만듭니다.
            </p>
            <div className="hero-cta-row">
              <a href="#contact" className="btn-primary">프로젝트 문의 →</a>
              <a href="#work" className="btn-secondary">레퍼런스 보기</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <svg viewBox="0 0 600 480" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="100" r="2" fill="#fff" className="hv-twinkle hv-t1"/>
              <circle cx="540" cy="80" r="2.5" fill="#fff" className="hv-twinkle hv-t2"/>
              <circle cx="50" cy="320" r="2" fill="#fff" className="hv-twinkle hv-t3"/>
              <circle cx="560" cy="400" r="2" fill="#fff" className="hv-twinkle hv-t4"/>
              <circle cx="120" cy="430" r="1.6" fill="#111" className="hv-twinkle hv-t5"/>
              <circle cx="480" cy="50" r="1.6" fill="#111" className="hv-twinkle hv-t6"/>
              <circle cx="20" cy="200" r="1.5" fill="#fff" className="hv-twinkle hv-t7"/>
              <circle cx="580" cy="200" r="2" fill="#111" className="hv-twinkle hv-t8"/>

              <g className="hv-orbit hv-o1">
                <circle cx="300" cy="240" r="220" fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.22" strokeDasharray="1 5"/>
                <circle cx="520" cy="240" r="5" fill="#fff" opacity="0.9"/>
                <circle cx="80" cy="240" r="3" fill="#111" opacity="0.8"/>
                <circle cx="300" cy="20" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="300" cy="460" r="2" fill="#111" opacity="0.5"/>
              </g>

              <g className="hv-orbit hv-o2">
                <circle cx="300" cy="240" r="175" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.42"/>
                <circle cx="475" cy="240" r="6" fill="#111"/>
                <circle cx="125" cy="240" r="4" fill="#fff" opacity="0.95"/>
                <circle cx="423" cy="115" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="177" cy="365" r="3" fill="#111" opacity="0.6"/>
                <rect x="295" y="60" width="10" height="2" fill="#fff" opacity="0.6"/>
                <rect x="295" y="418" width="10" height="2" fill="#111" opacity="0.5"/>
              </g>

              <g className="hv-orbit hv-o3">
                <circle cx="300" cy="240" r="130" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.62" strokeDasharray="3 3"/>
                <circle cx="430" cy="240" r="5" fill="#fff"/>
                <circle cx="170" cy="240" r="4" fill="#111" opacity="0.85"/>
                <circle cx="300" cy="110" r="3" fill="#fff" opacity="0.85"/>
                <circle cx="395" cy="332" r="3" fill="#111" opacity="0.7"/>
              </g>

              <g className="hv-orbit hv-o4">
                <circle cx="300" cy="240" r="82" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.9"/>
                <circle cx="382" cy="240" r="6" fill="#111"/>
                <circle cx="218" cy="240" r="4" fill="#fff"/>
                <circle cx="300" cy="158" r="3" fill="#fff" opacity="0.8"/>
              </g>

              <g className="hv-orbit hv-o5">
                <circle cx="300" cy="240" r="50" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.7" strokeDasharray="2 3"/>
                <circle cx="350" cy="240" r="3" fill="#fff"/>
                <circle cx="250" cy="240" r="3" fill="#111"/>
              </g>

              <g>
                <line x1="300" y1="240" x2="510" y2="80" stroke="#fff" strokeWidth="0.6" opacity="0.45" strokeDasharray="4 6" className="hv-ray r1"/>
                <line x1="300" y1="240" x2="90" y2="80" stroke="#fff" strokeWidth="0.6" opacity="0.45" strokeDasharray="4 6" className="hv-ray r2"/>
                <line x1="300" y1="240" x2="510" y2="400" stroke="#fff" strokeWidth="0.6" opacity="0.45" strokeDasharray="4 6" className="hv-ray r3"/>
                <line x1="300" y1="240" x2="90" y2="400" stroke="#fff" strokeWidth="0.6" opacity="0.45" strokeDasharray="4 6" className="hv-ray r4"/>
              </g>

              <circle cx="300" cy="240" r="20" fill="none" stroke="#fff" strokeWidth="2" className="hv-pulse hv-pr1"/>
              <circle cx="300" cy="240" r="20" fill="none" stroke="#fff" strokeWidth="2" className="hv-pulse hv-pr2"/>
              <circle cx="300" cy="240" r="20" fill="none" stroke="#fff" strokeWidth="2" className="hv-pulse hv-pr3"/>

              <circle cx="300" cy="240" r="16" fill="#111" className="hv-core-shadow"/>
              <circle cx="300" cy="240" r="10" fill="#fff" className="hv-core"/>
              <circle cx="300" cy="240" r="3" fill="#111" className="hv-core-dot"/>

              <rect x="30" y="200" width="50" height="2" fill="#fff" opacity="0.6" className="hv-bar hv-b1"/>
              <rect x="520" y="280" width="50" height="2" fill="#111" opacity="0.7" className="hv-bar hv-b2"/>
              <rect x="60" y="60" width="3" height="40" fill="#fff" opacity="0.55" className="hv-bar hv-b3"/>
              <rect x="540" y="380" width="3" height="40" fill="#111" opacity="0.65" className="hv-bar hv-b4"/>

              <circle cx="100" cy="180" r="2" fill="#fff" className="hv-drift hv-d1"/>
              <circle cx="500" cy="320" r="2" fill="#111" className="hv-drift hv-d2"/>
              <circle cx="450" cy="120" r="2.5" fill="#fff" className="hv-drift hv-d3"/>
              <circle cx="150" cy="380" r="2.5" fill="#111" className="hv-drift hv-d4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
