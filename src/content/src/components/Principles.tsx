import { principles } from '../content/siteContent';
import { getIcon } from './icons';
import { Container, SectionHeading } from './ui';

export function Principles() {
  return (
    <section aria-labelledby="principles-title" className="bg-navy-900 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="principles-title"
          eyebrow={principles.eyebrow}
          title={principles.title}
          intro={principles.intro}
          tone="dark"
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-3">
          {principles.items.map((p) => {
            const Icon = getIcon(p.icon);
            return (
              <li key={p.title} className="bg-navy-900 p-7 sm:p-9">
                <Icon className="h-8 w-8 text-gold-300" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-100">{p.body}</p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 border-l-2 border-gold-300 pl-4 text-base leading-relaxed text-navy-100">
          {principles.commitment}
        </p>
      </Container>
    </section>
  );
}
