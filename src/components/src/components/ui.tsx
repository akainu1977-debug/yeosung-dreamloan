import type { ReactNode } from 'react';
import type { Nullable } from '../config/company';

/** 실제 정보가 입력되지 않은 항목을 눈에 띄게 표시하는 자리표시자 */
export function Placeholder({ label, tone = 'light' }: { label: string; tone?: 'light' | 'dark' }) {
  return (
    <span
      data-placeholder
      className={
        tone === 'dark'
          ? 'rounded-sm border border-dashed border-gold-300/70 bg-gold-300/10 px-1.5 py-0.5 text-gold-200'
          : 'rounded-sm border border-dashed border-gold-500 bg-gold-50 px-1.5 py-0.5 text-gold-700'
      }
    >
      [{label}]
    </span>
  );
}

/** 값이 있으면 값을, 없으면 자리표시자를 보여줍니다. */
export function ValueOrPlaceholder({
  value,
  placeholder,
  tone,
}: {
  value: Nullable<string>;
  placeholder: string;
  tone?: 'light' | 'dark';
}) {
  return value ? <>{value}</> : <Placeholder label={placeholder} tone={tone} />;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}) {
  const dark = tone === 'dark';
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${dark ? 'text-gold-300' : 'text-gold-700'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-[1.75rem] font-bold leading-snug tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-navy-100' : 'text-muted'}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** 법률 검토가 필요한 영역에 붙는 안내 배지 */
export function ReviewNote({ children }: { children: ReactNode }) {
  return (
    <p
      data-review-note
      className="flex items-start gap-2 rounded-md border border-dashed border-gold-500 bg-gold-50 px-3 py-2 text-sm leading-relaxed text-gold-800"
    >
      <span aria-hidden="true" className="mt-px font-bold">
        !
      </span>
      <span>{children}</span>
    </p>
  );
}
