const LOGOS = [
  { src: '/images/logo1.png', alt: 'TRIPEAN' },
  { src: '/images/logo2.png', alt: 'Incruit' },
  { src: '/images/logo3.png', alt: 'FORTNITE' },
  { src: '/images/logo4.png', alt: 'MYCLE' },
  { src: '/images/logo5.png', alt: 'DASHU' },
  { src: '/images/logo6.png', alt: 'modenedu' },
  { src: '/images/logo7.png', alt: 'TURU' },
  { src: '/images/logo8.png', alt: 'CELLONIX' },
]

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">TRUSTED BY</div>
            <h2 className="section-title">145개 브랜드와 함께한 18년</h2>
          </div>
          <div className="section-meta">CLIENTS · 24+ logos</div>
        </div>

        <div className="clients-unified-grid reveal">
          <img
            src="https://cdn.imweb.me/thumbnail/20230314/3d9be7983b2e9.png"
            alt="REMAKE와 함께한 클라이언트 24개 브랜드"
            loading="lazy"
          />
          <div className="clients-logos-extra">
            {LOGOS.map((logo, i) => (
              <div className="logo-cell" key={i}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="clients-cta reveal">
          <a href="https://www.remakedigital.com/" className="link-btn">전체 클라이언트 보기 →</a>
        </div>
      </div>
    </section>
  )
}
