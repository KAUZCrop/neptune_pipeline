export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('문의가 접수되었습니다.')
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="eyebrow">CONTACT</div>
            <h2 className="section-title">다음 성장의<br />파트너가 되겠습니다.</h2>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-row">
                <input className="form-input" type="text" placeholder="회사명" required />
                <input className="form-input" type="text" placeholder="담당자명" required />
              </div>
              <div className="form-row">
                <input className="form-input" type="email" placeholder="이메일" required />
                <input className="form-input" type="tel" placeholder="연락처" />
              </div>
              <select className="form-select" required>
                <option value="">문의 유형 선택</option>
                <option>퍼포먼스 마케팅</option>
                <option>크리에이티브 제작</option>
                <option>마케팅 인프라 구축</option>
                <option>데이터브러쉬</option>
                <option>기타 문의</option>
              </select>
              <textarea className="form-textarea" placeholder="문의 내용을 입력해주세요"></textarea>
              <label className="form-check">
                <input type="checkbox" required />
                개인정보 수집 및 이용에 동의합니다.
              </label>
              <button type="submit" className="form-submit">문의 보내기 →</button>
            </form>
          </div>

          <div className="contact-right reveal">
            <div className="map-box">
              <svg className="map-svg" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="280" fill="#f3f3f3"/>
                <path d="M 0 140 L 400 110" stroke="#dadada" strokeWidth="1"/>
                <path d="M 0 70 L 400 50" stroke="#dadada" strokeWidth="1"/>
                <path d="M 0 210 L 400 220" stroke="#dadada" strokeWidth="1"/>
                <path d="M 80 0 L 90 280" stroke="#dadada" strokeWidth="1"/>
                <path d="M 200 0 L 230 280" stroke="#dadada" strokeWidth="1"/>
                <path d="M 320 0 L 310 280" stroke="#dadada" strokeWidth="1"/>
                <rect x="160" y="100" width="100" height="60" fill="#e8e8e8"/>
                <rect x="90" y="170" width="80" height="50" fill="#e8e8e8"/>
                <circle cx="200" cy="140" r="22" fill="#E24B4A"/>
                <circle cx="200" cy="140" r="10" fill="#fff"/>
                <text x="148" y="200" fontFamily="sans-serif" fontSize="11" fill="#777">언주로 428, 9F~15F</text>
              </svg>
            </div>

            <div className="info-label">OFFICE · CONTACT</div>
            <div className="info-list">
              <div className="info-row">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="info-main">서울특별시 강남구 언주로 428, 9F~15F</div>
                  <div className="info-sub">Remake Digital Agency, part of Neptune Company</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="info-main">contact@remakedigital.com</div>
                  <div className="info-sub">광고 문의 · 제휴 · 채용</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                  </svg>
                </div>
                <div>
                  <div className="info-main">주식회사 넵튠</div>
                  <div className="info-sub">대표이사 강율빈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
