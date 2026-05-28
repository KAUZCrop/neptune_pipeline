export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">OUR CAPABILITIES</div>
            <h2 className="section-title">성과를 만드는<br />3개의 역량</h2>
          </div>
          <div className="section-meta">3 SERVICES + 1 PROPRIETARY</div>
        </div>

        <div className="services-grid reveal">
          <div className="svc-card">
            <div className="svc-visual beige">
              <div className="svc-tag">01 / PERFORMANCE</div>
              <svg viewBox="0 0 400 240" style={{width:'100%',height:'100%'}}>
                <rect x="50" y="50" width="130" height="130" fill="#111"/>
                <rect x="135" y="80" width="130" height="110" fill="#E24B4A"/>
                <circle cx="295" cy="105" r="28" fill="#111"/>
                <rect x="265" y="160" width="80" height="28" fill="#E24B4A"/>
              </svg>
            </div>
            <div className="svc-body">
              <div className="svc-name">Performance<br />Marketing</div>
              <p className="svc-desc">시장 분석부터 KPI 설계, 매체·크리에이티브 테스트까지. 성과 극대화를 위한 전략 운영의 모든 것.</p>
              <div className="svc-meta">시장 분석 · KPI 설계 · 매체 운영 · A/B 테스트</div>
            </div>
          </div>

          <div className="svc-card">
            <div className="svc-visual palered">
              <div className="svc-tag palered-bg">02 / CREATIVE</div>
              <svg viewBox="0 0 400 240" style={{width:'100%',height:'100%'}}>
                <circle cx="135" cy="120" r="65" fill="#111"/>
                <circle cx="240" cy="120" r="65" fill="#E24B4A"/>
                <rect x="170" y="70" width="40" height="105" fill="#fff"/>
                <rect x="80" y="200" width="220" height="8" fill="#111"/>
              </svg>
            </div>
            <div className="svc-body">
              <div className="svc-name">Creative<br />Production</div>
              <p className="svc-desc">데이터로 검증하고 'Hook · A-ha!' 기법으로 전환을 만드는 퍼포먼스 최적 크리에이티브.</p>
              <div className="svc-meta">소재 기획 · Hook 설계 · 테스트 운영 · 개선 로드맵</div>
            </div>
          </div>

          <div className="svc-card">
            <div className="svc-visual dark">
              <div className="svc-tag dark-bg">03 / INFRASTRUCTURE</div>
              <svg viewBox="0 0 400 240" style={{width:'100%',height:'100%'}}>
                <rect x="50" y="130" width="28" height="70" fill="#fff" opacity="0.4"/>
                <rect x="84" y="95" width="28" height="105" fill="#fff" opacity="0.6"/>
                <rect x="118" y="65" width="28" height="135" fill="#fff" opacity="0.8"/>
                <rect x="152" y="40" width="28" height="160" fill="#E24B4A"/>
                <rect x="186" y="75" width="28" height="125" fill="#fff" opacity="0.85"/>
                <rect x="220" y="100" width="28" height="100" fill="#fff" opacity="0.95"/>
                <rect x="254" y="55" width="28" height="145" fill="#fff"/>
                <rect x="288" y="80" width="28" height="120" fill="#fff" opacity="0.85"/>
                <line x1="40" y1="202" x2="328" y2="202" stroke="#fff" strokeWidth="0.5" opacity="0.4"/>
              </svg>
            </div>
            <div className="svc-body">
              <div className="svc-name">Marketing<br />Infrastructure</div>
              <p className="svc-desc">어트리뷰션·어낼리틱스 구축과 데이터 기준 정립으로 올바른 의사결정의 토대를 만듭니다.</p>
              <div className="svc-meta">어트리뷰션 · 어낼리틱스 · 데이터 거버넌스</div>
            </div>
          </div>
        </div>

        <div className="section-head reveal section-head-mid">
          <div>
            <div className="eyebrow">ONLY REMAKE</div>
            <h2 className="section-title">성과를 완성하는<br /><em>리메이크만의 무기</em></h2>
          </div>
          <div className="section-meta">PROPRIETARY ASSETS</div>
        </div>

        <div className="databrush reveal">
          <svg className="databrush-bg" viewBox="0 0 600 500">
            <rect x="40" y="80" width="80" height="200" fill="#E24B4A"/>
            <rect x="140" y="120" width="80" height="180" fill="#fff"/>
            <rect x="240" y="40" width="80" height="240" fill="#E24B4A" opacity="0.5"/>
            <rect x="340" y="160" width="80" height="160" fill="#fff" opacity="0.5"/>
            <rect x="440" y="80" width="80" height="200" fill="#E24B4A"/>
          </svg>
          <div className="databrush-inner">
            <div>
              <div className="db-badge">ONLY REMAKE · PROPRIETARY</div>
              <h3 className="db-title">DataBrush<span className="dot">.</span></h3>
              <p className="db-desc">
                REMAKE가 자체 개발한 디자인 자동화 SaaS.<br />
                불가능했던 속도와 볼륨의 소재 제작을 가능하게 합니다.
              </p>
              <a href="#" className="db-cta">데이터브러쉬 보기 →</a>
            </div>
            <div className="db-metrics">
              <div className="db-metric">
                <div className="db-metric-label">제작 속도</div>
                <div className="db-metric-value">×<span className="red">12</span></div>
              </div>
              <div className="db-metric">
                <div className="db-metric-label">자동화</div>
                <div className="db-metric-value">100<span className="red">%</span></div>
              </div>
              <div className="db-metric wide">
                <div className="db-metric-label">CATEGORY</div>
                <div className="db-metric-value">자체 개발 SaaS · 디자인 자동화 솔루션</div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-dash reveal">
          <svg className="cd-bg" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="80" width="80" height="220" fill="#E24B4A" opacity="0.25"/>
            <rect x="140" y="120" width="80" height="180" fill="#fff" opacity="0.7"/>
            <rect x="240" y="40" width="80" height="260" fill="#E24B4A" opacity="0.2"/>
            <rect x="340" y="160" width="80" height="160" fill="#fff" opacity="0.7"/>
            <rect x="440" y="80" width="80" height="220" fill="#E24B4A" opacity="0.25"/>
          </svg>
          <div className="cd-inner">
            <div>
              <div className="cd-badge">ONLY REMAKE · CLIENT EXCLUSIVE</div>
              <h3 className="cd-title">Custom<br />Dashboard<span className="dot">.</span></h3>
              <p className="cd-desc">
                오직 리메이크 광고주만을 위한 커스터마이즈 대시보드.<br />
                데일리 리포트로 확인이 어려운 성과를 시각화된 대시보드로 확인 가능합니다.<br />
                일별·월별 데이터, 예산 진도율, 소재별·매체별 효율을 직관적으로 확인하세요.
              </p>
              <a href="#" className="cd-cta">대시보드 더 알아보기 →</a>
            </div>
            <div className="cd-visuals-stack">
              <div className="cd-visual">
                <svg viewBox="0 0 480 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <text x="0" y="12" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#888" letterSpacing="2">MEDIA MIX · 채널별 효율 분포</text>
                  <g transform="translate(0, 22)">
                    <path d="M74,72 A46,46 0 0,1 82.78,44.95 L98.97,56.71 A26,26 0 0,0 94,72 Z" fill="#FBE9E6"/>
                    <path d="M82.78,44.95 A46,46 0 0,1 105.79,28.25 L111.97,47.27 A26,26 0 0,0 98.97,56.71 Z" fill="#F09595"/>
                    <path d="M105.79,28.25 A46,46 0 0,1 134.21,28.25 L128.03,47.27 A26,26 0 0,0 111.97,47.27 Z" fill="#E24B4A"/>
                    <path d="M134.21,28.25 A46,46 0 0,1 157.22,44.95 L141.03,56.71 A26,26 0 0,0 128.03,47.27 Z" fill="#B85042"/>
                    <path d="M157.22,44.95 A46,46 0 0,1 166,72 L146,72 A26,26 0 0,0 141.03,56.71 Z" fill="#2C2C2A"/>
                    <text x="120" y="64" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="800" fill="#111" textAnchor="middle" letterSpacing="-0.5">98</text>
                  </g>
                  <g transform="translate(220, 30)">
                    <text x="0" y="0" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#888" letterSpacing="1.5">TOP CHANNELS</text>
                    <g transform="translate(0, 14)">
                      <circle cx="4" cy="6" r="3.5" fill="#E24B4A"/>
                      <text x="14" y="9" fontFamily="system-ui, sans-serif" fontSize="10" fill="#444">Meta</text>
                      <text x="240" y="9" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#111" textAnchor="end">28%</text>
                    </g>
                    <g transform="translate(0, 32)">
                      <circle cx="4" cy="6" r="3.5" fill="#F09595"/>
                      <text x="14" y="9" fontFamily="system-ui, sans-serif" fontSize="10" fill="#444">Google</text>
                      <text x="240" y="9" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#111" textAnchor="end">22%</text>
                    </g>
                    <g transform="translate(0, 50)">
                      <circle cx="4" cy="6" r="3.5" fill="#B85042"/>
                      <text x="14" y="9" fontFamily="system-ui, sans-serif" fontSize="10" fill="#444">TikTok</text>
                      <text x="240" y="9" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#111" textAnchor="end">18%</text>
                    </g>
                  </g>
                </svg>
              </div>

              <div className="cd-visual">
                <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <text x="0" y="12" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#888" letterSpacing="2">REMAKE DASHBOARD · MAY 2026</text>
                  <text x="0" y="32" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#111" letterSpacing="-0.3">캠페인 성과 리포트</text>
                  <text x="0" y="56" fontFamily="system-ui, sans-serif" fontSize="9" fill="#888" letterSpacing="0.5">월간 ROAS</text>
                  <text x="0" y="82" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="800" fill="#111" letterSpacing="-1">340%</text>
                  <rect x="84" y="64" width="52" height="20" rx="10" fill="#FCEDEB"/>
                  <text x="110" y="78" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="700" fill="#E24B4A" textAnchor="middle">▲ +22%</text>
                  <g transform="translate(0, 100)">
                    <line x1="0" y1="0" x2="480" y2="0" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2 3"/>
                    <line x1="0" y1="30" x2="480" y2="30" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2 3"/>
                    <line x1="0" y1="60" x2="480" y2="60" stroke="#f0f0f0" strokeWidth="1"/>
                    <rect x="0" y="40" width="32" height="20" fill="#FCEDEB" rx="3"/>
                    <rect x="44" y="32" width="32" height="28" fill="#FCEDEB" rx="3"/>
                    <rect x="88" y="24" width="32" height="36" fill="#FCEDEB" rx="3"/>
                    <rect x="132" y="30" width="32" height="30" fill="#FCEDEB" rx="3"/>
                    <rect x="176" y="18" width="32" height="42" fill="#FCEDEB" rx="3"/>
                    <rect x="220" y="22" width="32" height="38" fill="#E24B4A" rx="3"/>
                    <rect x="264" y="14" width="32" height="46" fill="#FCEDEB" rx="3"/>
                    <rect x="308" y="10" width="32" height="50" fill="#FCEDEB" rx="3"/>
                    <rect x="352" y="8" width="32" height="52" fill="#FCEDEB" rx="3"/>
                    <rect x="396" y="4" width="32" height="56" fill="#FCEDEB" rx="3"/>
                    <rect x="440" y="2" width="32" height="58" fill="#FCEDEB" rx="3"/>
                    <polyline points="16,38 60,28 104,20 148,26 192,14 236,18 280,12 324,8 368,6 412,4 456,2"
                      stroke="#111" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
                    <circle cx="236" cy="18" r="4" fill="#E24B4A"/>
                  </g>
                  <g transform="translate(0, 174)">
                    <rect x="0" y="0" width="148" height="40" rx="8" fill="#fafafa"/>
                    <text x="12" y="14" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#888" letterSpacing="1">예산 진도율</text>
                    <text x="12" y="32" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="800" fill="#111">87%</text>
                    <rect x="58" y="24" width="78" height="4" rx="2" fill="#eee"/>
                    <rect x="58" y="24" width="68" height="4" rx="2" fill="#E24B4A"/>
                    <rect x="160" y="0" width="148" height="40" rx="8" fill="#fafafa"/>
                    <text x="172" y="14" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#888" letterSpacing="1">매체 효율 TOP</text>
                    <text x="172" y="32" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#111">Meta</text>
                    <text x="210" y="32" fontFamily="system-ui, sans-serif" fontSize="10" fill="#888">· Google · TikTok</text>
                    <rect x="320" y="0" width="152" height="40" rx="8" fill="#fafafa"/>
                    <text x="332" y="14" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#888" letterSpacing="1">CPA 개선</text>
                    <text x="332" y="32" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="800" fill="#E24B4A">-22%</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
