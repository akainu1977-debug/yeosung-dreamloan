import { Phone, RotateCcw } from 'lucide-react';
import { company, toTelHref } from '../config/company';
import { Container } from './ui';

/**
 * 강조 배너 (고객 후기 위)
 * 문구를 바꾸려면 아래 따옴표 ' ' 안의 글자만 수정하세요.
 * 보상·지급·승인 보장 문구는 넣지 마세요.
 */
const banner = {
  badge: '부결 고객 재상담',
  title: ['대출이 부결되셨나요?', '다시 상담받아 보세요'],
  text: '대출 부결시 1000만원 지급',
  text: '회사에 예치된 금액으로 부결시 1000만원 지급',
  text: '100% 승인으로 자신 있습니다',   
  tags: [],
  note: '대출 승인과 금리·한도는 금융기관 심사에 따라 결정됩니다.',
};

export function Banner() {
  const telHref = toTelHref(company.phone);

  return (
    <section aria-labelledby="banner-title" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-10 sm:px-12 sm:py-14">
          {/* 장식 */}
          <span
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold-300/40"
          />
          <span aria-hidden="true" className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-gold-300/10" />
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gold-300" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-3.5 py-1.5 text-sm font-bold text-navy-900">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {banner.badge}
              </p>
              <h2
                id="banner-title"
                className="mt-5 text-[1.75rem] font-bold leading-snug tracking-tight text-white sm:text-4xl"
              >
                {banner.title[0]}
                <br />
                <span className="text-gold-300">{banner.title[1]}</span>
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-navy-100 sm:text-lg">{banner.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="상담 가능 대상">
                {banner.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-[15px] font-medium text-white"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {telHref && (
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-300 px-7 py-4 text-lg font-bold text-navy-900 transition-colors hover:bg-gold-200"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                전화 상담하기
              </a>
            )}
          </div>

          <p className="relative mt-8 border-t border-white/10 pt-4 text-sm text-navy-200">{banner.note}</p>
        </div>
      </Container>
    </section>
  );
}
