import { about } from '../content/siteContent';
import { getIcon } from './icons';
import { Container, SectionHeading } from './ui';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-[72px] bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4 text-[17px] leading-[1.85] text-ink">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <ol className="divide-y divide-line rounded-xl border border-line bg-white">
          {about.values.map((v, i) => {
            const Icon = getIcon(v.icon);
            return (
              <li key={v.title} className="flex gap-5 p-6 sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gold-700">
                    <span className="sr-only">가치 </span>0{i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy-900 sm:text-xl">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
