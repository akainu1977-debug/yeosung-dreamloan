import { process } from '../content/siteContent';
import { getIcon } from './icons';
import { Container, SectionHeading } from './ui';

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-[72px] bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="process-title"
          eyebrow={process.eyebrow}
          title={process.title}
          intro={process.intro}
          align="center"
        />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-navy-200 md:block"
          />
          {process.steps.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <li key={s.step} className="relative flex flex-col items-center text-center">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-800">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div className="mt-6 w-full rounded-xl border border-line bg-white px-6 py-7">
                  <p className="text-sm font-bold tracking-[0.14em] text-gold-700">{s.step}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {process.isExample && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-muted">
            {process.exampleNote}
          </p>
        )}
      </Container>
    </section>
  );
}
