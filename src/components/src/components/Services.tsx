import { Check, Info } from 'lucide-react';
import { services } from '../content/siteContent';
import { getIcon } from './icons';
import { Container, SectionHeading } from './ui';

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-[72px] bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.items.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <li
                key={s.no}
                className="flex flex-col rounded-xl border border-line bg-white p-7 transition-colors hover:border-navy-200 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-3xl font-bold text-navy-100" aria-hidden="true">
                    {s.no}
                  </span>
                </div>
                <p className="mt-6 text-sm font-semibold text-gold-700">{s.tag}</p>
                <h3 className="mt-1.5 text-xl font-bold leading-snug text-navy-900">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-ink">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-navy-700" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex gap-3 rounded-lg bg-surface px-5 py-4 text-[15px] leading-relaxed text-ink">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" aria-hidden="true" />
          <ul className="space-y-1">
            {services.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
