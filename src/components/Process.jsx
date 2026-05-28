const STEPS = [
  { num: '01', name: 'Inquiry', desc: '의뢰 접수\n브랜드 브리핑' },
  { num: '02', name: 'Analysis', desc: '시장·경쟁사\n데이터 분석' },
  { num: '03', name: 'Strategy', desc: 'IMC 전략\n크리에이티브 기획' },
  { num: '04', name: 'Execution', desc: '캠페인 실행\n매체 운영' },
  { num: '05', name: 'Report', desc: '성과 리포트\n지속 최적화' },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-head process-head reveal">
          <div>
            <div className="eyebrow">HOW WE WORK</div>
            <h2 className="section-title">의뢰부터 리포트까지,<br />5단계 검증된 프로세스</h2>
          </div>
        </div>

        <div className="process-grid reveal">
          <div className="process-line"></div>
          {STEPS.map((step, i) => (
            <div className="process-step" key={i}>
              <div className="process-num">{step.num}</div>
              <div className="process-name">{step.name}</div>
              <div className="process-desc">
                {step.desc.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
