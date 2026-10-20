import { TriangleAlert } from 'lucide-react';
import { company, toTelHref } from '../config/company';
import { generalDisclaimers, lendingTerms, warningNotices } from '../config/legal';
import { navItems } from '../content/siteContent';
import { Logo } from './Logo';
import { Container, Placeholder } from './ui';

/* ================================================================
 * 푸터에 보여줄 항목 목록
 * ----------------------------------------------------------------
 * - 빼고 싶은 항목은 그 줄을 통째로 지우면 됩니다. (오류 나지 않음)
 * - 값은 src/config/company.ts, src/config/legal.ts 에서 입력합니다.
 * - 값이 null 이면 [OO 입력] 점선 칸으로 보입니다.
 * ================================================================ */

/** 회사 정보 */
const infoItems: { label: string; value: string | null; placeholder: string }[] = [
  { label: '대표자', value: company.ceo, placeholder: '대표자명 입력' },
  { label: '사업자등록번호', value: company.businessRegistrationNumber, placeholder: '사업자등록번호 입력' },
  
  { label: '주소', value: company.address, placeholder: '사업장 주소 입력' },
  { label: '개인정보 보호책임자', value: company.privacyOfficer, placeholder: '해당 시 입력' },
  
];

/** 이자율 항목 — legal.ts 에서 enabled: false 로 바꾸면 전부 숨겨집니다 */
const lendingItems: { label: string; value: string | null; placeholder: string }[] = [
  
];

/** 정책 링크 — 주소(URL)를 입력한 것만 보입니다 */
const policyLinks: { label: string; url: string | null }[] = [
  { label: '개인정보 처리방침', url: company.privacyPolicyUrl },
  { label: '이용약관', url: company.termsUrl },
];

/* ================================================================ */

function Item({ label, value, placeholder }: { label: string; value: string | null; placeholder: string }) {
  const tel = label === '대표전화' ? toTelHref(value) : null;
  return (
    <li>
      <span className="text-navy-300">{label}</span>{' '}
      <span className="text-navy-100">
        {value ? (
          tel ? (
            <a href={tel} className="font-semibold text-white hover:underline">
              {value}
            </a>
          ) : (
            value
          )
        ) : (
          <Placeholder label={placeholder} tone="dark" />
        )}
      </span>
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const items = lendingTerms.enabled ? [...infoItems, ...lendingItems] : infoItems;
  const activeWarnings = warningNotices.filter((w) => w.enabled);
  const activePolicies = policyLinks.filter((p) => p.url);

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
          {items.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px] leading-relaxed">
              {items.map((it) => (
                <Item key={it.label} {...it} />
              ))}
            </ul>
          )}
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

        {activePolicies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {activePolicies.map((p) => (
              <a key={p.label} href={p.url as string} className="font-semibold text-white underline-offset-4 hover:underline">
                {p.label}
              </a>
            ))}
          </div>
        )}

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