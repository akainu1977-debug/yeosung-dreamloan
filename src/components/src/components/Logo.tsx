/** 텍스트 기반 워드마크 로고 (별도 로고 이미지가 준비되면 교체하세요) */
export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const light = tone === 'light';
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill={light ? '#FFFFFF' : '#0B1F3A'} />
        <path
          d="M18 44V20h12a12 12 0 0 1 0 24H18z"
          fill="none"
          stroke={light ? '#0B1F3A' : '#FFFFFF'}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M38 44h8" stroke="#C9A86A" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
          여성드림론
        </span>
        <span
          className={`mt-1 text-[10px] font-medium tracking-[0.2em] ${light ? 'text-navy-200' : 'text-muted'}`}
        >
          FINANCIAL CONSULTING
        </span>
      </span>
    </span>
  );
}
