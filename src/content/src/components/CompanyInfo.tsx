import type { ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';
import { company, placeholders, toTelHref, type CompanyInfo as Info } from '../config/company';
import {
  SHOW_REVIEW_NOTES,
  lendingTerms,
  lendingTermPlaceholders,
  warningNotices,
} from '../config/legal';
import { Container, ReviewNote, SectionHeading, ValueOrPlaceholder } from './ui';

type Field = Exclude<keyof Info, 'name'>;

const companyRows: { label: string; field: Field }[] = [
  { label: '대표자', field: 'ceo' },
  { label: '사업자등록번호', field: 'businessRegistrationNumber' },
  { label: '사업장 주소', field: 'address' },
  { label: '개인정보 보호책임자', field: 'privacyOfficer' },
];

const registrationRows: { label: string; field: Field }[] = [
  { label: '대부업 등록번호', field: 'lendingRegistrationNumber' },
  { label: '대부중개업 등록번호', field: 'brokerageRegistrationNumber' },
  { label: '등록기관', field: 'registrationAuthority' },
];

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
      <dt className="text-[15px] font-medium text-muted">{label}</dt>
      <dd className="text-base font-medium text-ink">{children}</dd>
    </div>
  );
}

function PhoneValue() {
  const href = toTelHref(company.phone);
  if (!href) return <ValueOrPlaceholder value={null} placeholder={placeholders.phone} />;
  return (
    <span>
      <a href={href} className="font-semibold text-navy-900 underline-offset-4 hover:underline">
        {company.phone}
      </a>
      {company.phoneHours && <span className="ml-2 text-muted">({company.phoneHours})</span>}
    </span>
  );
}

export function CompanyInfo() {
  const activeWarnings = warningNotices.filter((w) => w.enabled);

  return (
    <section id="company" aria-labelledby="company-title" className="scroll-mt-[72px] bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading id="company-title" eyebrow="Company" title="회사 정보" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* 기업 정보 */}
          <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-navy-900">기업 정보</h3>
            <dl className="mt-3 border-t border-line">
              <InfoRow label="상호">{company.name}</InfoRow>
              {companyRows.map((r) => (
                <InfoRow key={r.field} label={r.label}>
                  <ValueOrPlaceholder value={company[r.field]} placeholder={placeholders[r.field]} />
                </InfoRow>
              ))}
              <InfoRow label="대표 전화번호">
                <PhoneValue />
              </InfoRow>
            </dl>
          </div>

          {/* 등록 정보 및 법정 표시사항 — 법률 검토 영역 */}
          <div
            className="rounded-xl border border-navy-200 bg-white p-6 sm:p-8"
            aria-labelledby="legal-title"
            role="group"
            data-legal-area
          >
            <h3 id="legal-title" className="text-lg font-bold text-navy-900">
              대부업·대부중개업 등록 및 표시사항
            </h3>
            {SHOW_REVIEW_NOTES && (
              <div className="mt-3">
                <ReviewNote>
                  이 영역은 법정 표시사항 영역입니다. 게시 전 최신 법령과 관할 기관 안내를 기준으로 항목과
                  문구를 확인해 주세요. (설정: src/config/legal.ts)
                </ReviewNote>
              </div>
            )}

            <dl className="mt-3 border-t border-line">
              {registrationRows.map((r) => (
                <InfoRow key={r.field} label={r.label}>
                  <ValueOrPlaceholder value={company[r.field]} placeholder={placeholders[r.field]} />
                </InfoRow>
              ))}
              {lendingTerms.enabled &&
                (Object.keys(lendingTermPlaceholders) as (keyof typeof lendingTermPlaceholders)[]).map((key) => (
                  <InfoRow
                    key={key}
                    label={
                      {
                        interestRate: '대부이자율',
                        overdueInterestRate: '연체이자율',
                        additionalCosts: '이자 외 추가비용',
                        earlyRepaymentTerms: '조기상환 조건',
                      }[key]
                    }
                  >
                    <ValueOrPlaceholder value={lendingTerms[key]} placeholder={lendingTermPlaceholders[key]} />
                  </InfoRow>
                ))}
            </dl>

            {activeWarnings.length > 0 && (
              <ul className="mt-6 space-y-2.5 rounded-lg border border-navy-900 bg-navy-50 p-5" aria-label="경고 문구">
                {activeWarnings.map((w) => (
                  <li key={w.id} className="flex gap-2.5 text-base font-bold leading-relaxed text-navy-900">
                    <TriangleAlert className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                    {w.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
