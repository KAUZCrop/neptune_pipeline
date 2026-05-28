export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">REMAKE<span>.</span></div>
            <div className="footer-tagline">
              퍼포먼스 마케팅은 전체 캠페인 플랜 안에서 조화롭게 설계되어야 합니다.
              캠페인 성공을 위한 디지털 마케팅의 Best Way를 찾아드립니다.
            </div>
            <div className="social-row">
              <a className="social-icon" href="https://www.instagram.com/remakedigital/" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a className="social-icon" href="https://remakedigitalagency.notion.site/REMAKE-Blog-a7f9798b056a43228fc9c0c60dadd154" aria-label="Notion Blog">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="3" width="16" height="18" rx="2"/>
                  <line x1="8" y1="7" x2="16" y2="7"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                  <line x1="8" y1="17" x2="13" y2="17"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">EXPLORE</div>
            <div className="footer-list">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="https://www.remakedigital.com/story">Story</a>
              <a href="https://www.remakedigital.com/career">Career</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">CONTACT</div>
            <div className="footer-list">
              <a href="mailto:contact@remakedigital.com">contact@remakedigital.com</a>
              <a href="https://drive.google.com/file/d/1qYJHJX22tdWyW9R6H4n3RqC_zrm28KVx/view">회사 소개서 ↓</a>
              <a href="#contact">광고 문의하기 →</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">OFFICE</div>
            <div className="footer-list">
              <span>서울 강남구<br />언주로 428, 9F~15F</span>
              <span>주식회사 넵튠</span>
              <span>대표이사 강율빈</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Neptune Company, Ltd. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
