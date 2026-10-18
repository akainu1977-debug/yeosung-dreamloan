import { Check } from 'lucide-react';
import { hero } from '../content/siteContent';
import { Container } from './ui';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[38%] bg-surface lg:block" />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
            <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[1.85rem] font-bold leading-[1.25] tracking-tight text-navy-900 sm:text-4xl sm:leading-[1.2] lg:text-[2.5rem] xl:text-[2.8rem]"
          >
            {hero.title[0]}
            <br />
            <span className="text-navy-700">저희는 모든</span><span className="text-gold-500">1금융<span className="text-navy-700">에서</span><span className="text-gold-500">최대1억,</span><span className="text-gold-500">금리3%<span className="text-navy-700">대로</span></span><span className="text-gold-500">100%</span><span className="text-navy-700">승입됩니다.</span>{hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink sm:text-lg">{hero.lead}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{hero.sub}</p>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6" aria-label="주요 안내 분야">
            {hero.topics.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                <Check className="h-4 w-4 text-gold-700" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[560px]">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
