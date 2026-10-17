import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../content/siteContent';
import { Container, SectionHeading } from './ui';

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const buttonId = `${uid}-q`;
  const panelId = `${uid}-a`;

  return (
    <li className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start gap-4 py-6 text-left"
        >
          <span className="mt-0.5 text-base font-bold text-gold-700" aria-hidden="true">
            Q{index + 1}
          </span>
          <span className="flex-1 text-[17px] font-semibold leading-snug text-navy-900 sm:text-lg">{q}</span>
          <ChevronDown
            className={`mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform motion-reduce:transition-none ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        <div className="flex gap-4 pb-7">
          <span className="text-base font-bold text-navy-300" aria-hidden="true">
            A
          </span>
          <p className="flex-1 leading-[1.8] text-ink">{a}</p>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-[72px] bg-white py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="자주 묻는 질문"
          intro="여성드림론의 서비스와 대출을 알아볼 때 많이 궁금해하시는 내용을 정리했습니다."
        />
        <ul className="border-t-2 border-navy-900">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
