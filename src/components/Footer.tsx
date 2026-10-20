import type { ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';
import { company, placeholders, toTelHref, type CompanyInfo } from '../config/company';
import { generalDisclaimers, lendingTermPlaceholders, lendingTerms, warningNotices } from '../config/legal';
import { navItems } from '../content/siteContent';
import { Logo } from './Logo';
import { Container, Placeholder, ValueOrPlaceholder } from './ui';

type Field = Exclude<keyof CompanyInfo, 'name'>;

/** 푸터에 표시할 회사·등록 정보 (값이 없으면 자리표시자) */
const infoFields: { label: string; field: Field }[] = [
  { label: '대표자', field: 'ceo' },
  { label: '사업자등록번호', field: 'businessRegistrationNumber' },
  { label: '주소', field: 'address' },
];

const lendingLabels: Record<keyof typeof lendingTermPlaceholders, string> = {

};

function InfoItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li>
      <span className="text-navy-300">{label}</span> <span className="text-navy-100">{children}</span>
    </li>
  );
}

function PolicyLink({ label, url, placeholder }: { label: string; url: string | null; placeholder: string }) {
  if (!url) {
    return (
      <span className="text-navy-100">
        {label} <Placeholder label={placeholder} tone="dark" />
      </span>
    );
  }
  return (
    <a href={url} className="font-semibold text-white underline-offset-4 hover:underline">
      {label}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const telHref = toTelHref(company.phone);
  const activeWarnings = warningNotices.filter((w) => w.enabled);

  return (
    <footer className="bg-navy-950 text-navy-100">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-md">
            <Logo tone="light" />
            <p className="mt-5 leading-relaxed">
              개인의 신용과 소득 상황을 고려한 금융 정보와 제1금융권 대출 상품 관련 컨설팅을 안내합니다.
            </p>
          </div>
          <nav aria-label="하단 메뉴">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 회사·등록 정보 */}
        <section aria-label="회사 정보" className="mt-10 border-t border-white/10 pt-8">
          <p className="text-base font-semibold text-white">{company.name}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px] leading-relaxed">
            {infoFields.map((f) => (
              <InfoItem key={f.field} label={f.label}>
                <ValueOrPlaceholder value={company[f.field]} placeholder={placeholders[f.field]} tone="dark" />
              </InfoItem>
            ))}
            {lendingTerms.enabled &&
              (Object.keys(lendingLabels) as (keyof typeof lendingLabels)[]).map((key) => (
                <InfoItem key={key} label={lendingLabels[key]}>
                  <ValueOrPlaceholder value={lendingTerms[key]} placeholder={lendingTermPlaceholders[key]} tone="dark" />
                </InfoItem>
              ))}
          </ul>
        </section>

        {/* 경고 문구 — 작은 글씨로 숨기지 않도록 본문 크기로 표시 */}
        {activeWarnings.length > 0 && (
          <ul aria-label="경고 문구" className="mt-6 space-y-1.5 rounded-lg border border-white/15 px-5 py-4">
            {activeWarnings.map((w) => (
              <li key={w.id} className="flex gap-2 text-base font-semibold leading-relaxed text-white">
                <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                {w.text}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
        </div>

        <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-navy-100">
          {generalDisclaimers.map((d) => (
            <li key={d}>· {d}</li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-navy-200">
          © {year} {company.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
