import { company, placeholders } from '../config/company';
import { generalDisclaimers } from '../config/legal';
import { navItems } from '../content/siteContent';
import { Logo } from './Logo';
import { Container, Placeholder } from './ui';

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

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8 text-[15px]">
          <PolicyLink label="개인정보 처리방침" url={company.privacyPolicyUrl} placeholder={placeholders.privacyPolicyUrl} />
          <PolicyLink label="이용약관" url={company.termsUrl} placeholder={placeholders.termsUrl} />
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
