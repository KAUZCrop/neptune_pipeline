import { useRef, useEffect } from 'react'

const CASES = [
  {
    bg: '#87CEEB',
    img: 'https://cdn.imweb.me/upload/S20200507cb83570ab92ba/b0dc1540919f5.jpg',
    imgStyle: { objectPosition: 'center 35%' },
    brand: '쿠팡', brandSub: '쿠팡친구',
    tag: 'COUPANG · PERFORMANCE',
    title: '쿠팡친구 퍼포먼스 캠페인',
    statValue: '1.6배', statLabel: 'CPA 개선',
  },
  {
    bg: '#ffffff',
    img: '/images/솔드아웃.png',
    brand: '무신사', brandSub: '솔드아웃', light: true,
    tag: 'MUSINSA · APP PERFORMANCE',
    title: '솔드아웃 퍼포먼스 캠페인',
    statValue: '-20%', statLabel: '앱 설치/가입 단가 개선',
  },
  {
    bg: '#3a3a3a',
    img: '/images/다슈.png',
    brand: '다슈', brandSub: '헤어 케어', light: true,
    tag: 'DASHU · HAIR CARE',
    title: '구매 증진 / ROAS 개선 캠페인',
    statValue: '증가', statLabel: '매출 성장',
  },
  {
    bg: '#bcdaf5',
    img: '/images/cellonix_clean.jpg',
    brand: '셀로닉스', brandSub: '건강기능식품',
    tag: 'CELLONIX · DTC COMMERCE',
    title: '구매 증진 / ROAS 개선 캠페인',
    statValue: '상승', statLabel: 'ROAS 개선',
  },
  {
    bg: '#1c1c1c',
    img: '/images/mycle_clean.jpg',
    brand: '마이클', brandSub: '차량관리', light: true,
    tag: 'MICHAEL · CAR MANAGEMENT',
    title: '앱 O2O 서비스 퍼포먼스 캠페인',
    statValue: '개선', statLabel: 'CPI 효율화',
  },
  {
    bg: '#ffffff',
    img: '/images/인크루트.png',
    brand: '인크루트', brandSub: '채용 플랫폼',
    tag: 'INCRUIT · RECRUITMENT PLATFORM',
    title: '회원가입 증대 퍼포먼스 캠페인',
    statValue: '-15%', statLabel: 'CPA 개선',
  },
  {
    bg: '#1a1a1a',
    img: '/images/하림.png',
    brand: '하림', brandSub: '더미식', light: true,
    tag: 'HARIM · BRANDING & PERFORMANCE',
    title: '더미식 브랜딩 / 퍼포먼스 캠페인',
    statValue: '300만봉', statLabel: '런칭 1개월 판매',
  },
  {
    bg: '#eeeeee',
    img: 'https://cdn.imweb.me/thumbnail/20230313/bbc7143821641.png',
    brand: '넥슨', brandSub: 'FIFA 모바일',
    tag: 'NEXON · BRANDING & APP',
    title: 'FIFA 모바일 브랜딩 / 퍼포먼스 캠페인',
    statValue: '1위', statLabel: '앱스토어 인기 순위',
  },
  {
    bg: '#FFD63A',
    img: 'https://cdn.imweb.me/upload/S20200507cb83570ab92ba/d6f9db7b96f3d.jpg',
    brand: '카카오엔터테인먼트', brandSub: '타파스',
    tag: 'KAKAO ENTERTAINMENT · IMC',
    title: '타파스 글로벌 퍼포먼스 캠페인',
    statValue: '1위', statLabel: '미국 도서 카테고리 매출',
  },
  {
    bg: '#5c2d8c',
    img: 'https://cdn.imweb.me/upload/S20200507cb83570ab92ba/703d1994cddf5.jpg',
    brand: '카카오게임즈', brandSub: 'World Flipper', light: true,
    tag: 'KAKAO GAMES · GLOBAL APP',
    title: '월드플리퍼 글로벌 퍼블리싱 캠페인',
    statValue: '10위', statLabel: '미국 구글플레이 인기',
  },
  {
    bg: '#0d0d0d',
    img: 'https://cdn.imweb.me/thumbnail/20230314/1e2ee576ab428.jpg',
    imgStyle: { transform: 'scale(1.15)' },
    fitContain: true,
    brand: '펄어비스', brandSub: '검은사막 모바일', light: true,
    tag: 'PEARL ABYSS · SEA APP',
    title: '검은사막 모바일 동남아 캠페인',
    statValue: '1위', statLabel: '동남아 인기 순위',
  },
  {
    bg: '#1a1a1a',
    img: 'https://cdn.imweb.me/upload/S20200507cb83570ab92ba/ad49a9c3b53a3.jpg',
    brand: '컴투스', brandSub: '서머너즈워', light: true,
    tag: 'COM2US · GLOBAL APP',
    title: '서머너즈워 브랜딩 / 퍼포먼스 캠페인',
    statValue: '9위', statLabel: '미국 앱스토어 매출',
  },
  {
    bg: '#f5f7fa',
    img: 'https://cdn.imweb.me/thumbnail/20230313/9b77c92964e7c.png',
    fitContain: true,
    brand: '아임웹', brandSub: '쇼핑몰 플랫폼',
    tag: 'IMWEB · WEB PERFORMANCE',
    title: '아임웹 퍼포먼스 캠페인',
    statValue: '+4%', statLabel: '결제 금액 증가',
  },
  {
    bg: '#cdb8a0',
    img: '/images/인스턴트핑크.jpg',
    brand: '인스턴트펑크', brandSub: '브랜드 캠페인',
    tag: 'INSTANTFUNK · COMMERCE',
    title: '인스턴트펑크 퍼포먼스 캠페인',
    statValue: '최대', statLabel: '연간 매출 달성',
  },
]

export default function CaseStudies() {
  const viewportRef = useRef(null)
  const dotsRef = useRef(null)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const prev = document.querySelector('.case-prev')
    const next = document.querySelector('.case-next')
    const dots = dotsRef.current?.querySelectorAll('.case-dot')
    const cards = viewport.querySelectorAll('.case-card')

    const cardsPerView = () => {
      const w = window.innerWidth
      if (w <= 640) return 1
      if (w <= 1024) return 2
      return 3
    }

    const stepSize = () => {
      const card = cards[0]
      if (!card) return viewport.clientWidth
      const track = viewport.querySelector('.case-track')
      const gap = parseFloat(getComputedStyle(track).gap) || 20
      return (card.offsetWidth + gap) * cardsPerView()
    }

    const handlePrev = () => viewport.scrollBy({ left: -stepSize(), behavior: 'smooth' })
    const handleNext = () => viewport.scrollBy({ left: stepSize(), behavior: 'smooth' })

    prev?.addEventListener('click', handlePrev)
    next?.addEventListener('click', handleNext)

    dots?.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth
        const target = (maxScroll / (dots.length - 1)) * i
        viewport.scrollTo({ left: target, behavior: 'smooth' })
      })
    })

    let scrollTimer
    const handleScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth
        if (maxScroll <= 0) return
        const ratio = viewport.scrollLeft / maxScroll
        const active = Math.min(dots.length - 1, Math.max(0, Math.round(ratio * (dots.length - 1))))
        dots?.forEach((d, i) => d.classList.toggle('active', i === active))
      }, 50)
    }

    viewport.addEventListener('scroll', handleScroll)

    return () => {
      prev?.removeEventListener('click', handlePrev)
      next?.removeEventListener('click', handleNext)
      viewport.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="case-section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">OUR WORK</div>
            <h2 className="section-title">전문성을 퍼포먼스로<br />증명합니다.</h2>
          </div>
          <span className="link-btn">프로젝트 전체 보기 →</span>
        </div>

        <div className="case-slider-wrap reveal">
          <button className="case-nav case-prev" aria-label="이전 케이스">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="case-viewport" id="caseViewport" ref={viewportRef}>
            <div className="case-track">
              {CASES.map((c, i) => (
                <div key={i} className="case-card">
                  <div className={`case-visual${c.fitContain ? ' fit-contain' : ''}`} style={{ background: c.bg }}>
                    <img src={c.img} alt={`${c.brand} ${c.brandSub}`} loading="lazy" style={c.imgStyle || {}} />
                    <div className="case-brand">
                      <div className={`case-brand-name${c.light ? ' light' : ''}`}>{c.brand}</div>
                      <div className={`case-brand-sub${c.light ? ' light' : ''}`}>{c.brandSub}</div>
                    </div>
                  </div>
                  <div className="case-body">
                    <div className="case-tag">{c.tag}</div>
                    <div className="case-title">{c.title}</div>
                    <div className="case-stats">
                      <div className="case-stat">
                        <div className="case-stat-value">{c.statValue}</div>
                        <div className="case-stat-label">{c.statLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="case-nav case-next" aria-label="다음 케이스">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="case-dots-wrap reveal" id="caseDots" ref={dotsRef}>
          <button className="case-dot active" aria-label="페이지 1"></button>
          <button className="case-dot" aria-label="페이지 2"></button>
          <button className="case-dot" aria-label="페이지 3"></button>
          <button className="case-dot" aria-label="페이지 4"></button>
          <button className="case-dot" aria-label="페이지 5"></button>
        </div>
      </div>
    </section>
  )
}
