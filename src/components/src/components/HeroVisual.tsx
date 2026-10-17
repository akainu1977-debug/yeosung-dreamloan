/**
 * 히어로 비주얼 — 도시 오피스와 금융 문서를 단순화한 일러스트 (SVG, 외부 이미지 불필요)
 * 실제 오피스 사진을 사용하려면 이 컴포넌트를 <img loading="eager" ... /> 로 교체하세요.
 * 은행 로고, 대출 승인 화면, 통장 잔액 등 오해 소지가 있는 소재는 사용하지 않습니다.
 */
export function HeroVisual() {
  const windows = (x: number, y: number, cols: number, rows: number, gap = 14) =>
    Array.from({ length: cols * rows }, (_, i) => (
      <rect
        key={`${x}-${y}-${i}`}
        x={x + (i % cols) * gap}
        y={y + Math.floor(i / cols) * 18}
        width={7}
        height={9}
        rx={1}
        fill="#FFFFFF"
        opacity={(i * 7) % 5 === 0 ? 0.32 : 0.1}
      />
    ));

  return (
    <svg
      viewBox="0 0 560 520"
      role="img"
      aria-labelledby="hero-visual-title"
      className="h-auto w-full"
    >
      <title id="hero-visual-title">도시의 오피스 빌딩과 금융 문서를 표현한 일러스트</title>
      <defs>
        <clipPath id="panel">
          <rect x="0" y="0" width="560" height="520" rx="20" />
        </clipPath>
      </defs>

      <g clipPath="url(#panel)">
        <rect width="560" height="520" fill="#0B1F3A" />
        {/* 은은한 격자 */}
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="520" stroke="#FFFFFF" opacity="0.04" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="560" y2={i * 48} stroke="#FFFFFF" opacity="0.04" />
        ))}

        {/* 골드 아크 */}
        <circle cx="430" cy="130" r="92" fill="none" stroke="#C9A86A" strokeWidth="1.5" opacity="0.7" />
        <circle cx="430" cy="130" r="60" fill="#C9A86A" opacity="0.12" />

        {/* 빌딩 스카이라인 */}
        <g>
          <rect x="34" y="250" width="96" height="290" fill="#14305A" />
          {windows(46, 266, 6, 13)}
          <rect x="140" y="170" width="118" height="370" fill="#1A3966" />
          <rect x="140" y="170" width="118" height="6" fill="#C9A86A" opacity="0.55" />
          {windows(152, 192, 7, 17)}
          <rect x="268" y="300" width="84" height="240" fill="#14305A" />
          {windows(280, 316, 5, 11)}
          <rect x="362" y="220" width="106" height="320" fill="#183560" />
          {windows(374, 238, 6, 15)}
          <rect x="478" y="330" width="70" height="210" fill="#122B52" />
          {windows(488, 346, 4, 9)}
        </g>
        <rect x="0" y="470" width="560" height="50" fill="#071427" />
      </g>

      {/* 문서 카드 */}
      <g transform="translate(292 286)">
        <rect x="6" y="10" width="236" height="196" rx="14" fill="#071427" opacity="0.35" />
        <rect width="236" height="196" rx="14" fill="#FFFFFF" />
        <rect x="22" y="24" width="96" height="10" rx="5" fill="#0B1F3A" />
        <rect x="22" y="44" width="150" height="7" rx="3.5" fill="#D7DEE8" />
        <line x1="22" y1="68" x2="214" y2="68" stroke="#E3E8EF" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(22 ${86 + i * 30})`}>
            <rect width="18" height="18" rx="4" fill="#F2F5F9" stroke="#C3CDDA" />
            <path d="M5 9.5l3 3 5.5-6" fill="none" stroke="#8F6F3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="30" y="5" width={[132, 108, 120][i]} height="8" rx="4" fill="#D7DEE8" />
          </g>
        ))}
      </g>

      {/* 작은 차트 카드 */}
      <g transform="translate(40 92)">
        <rect width="188" height="112" rx="12" fill="#FFFFFF" opacity="0.97" />
        <rect x="18" y="18" width="70" height="8" rx="4" fill="#0B1F3A" />
        {[34, 52, 44, 66, 58].map((h, i) => (
          <rect key={i} x={20 + i * 30} y={94 - h} width="16" height={h} rx="3" fill={i === 3 ? '#C9A86A' : '#C3CDDA'} />
        ))}
        <line x1="18" y1="94.5" x2="170" y2="94.5" stroke="#E3E8EF" />
      </g>
    </svg>
  );
}
