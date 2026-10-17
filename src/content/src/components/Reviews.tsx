import { Quote } from 'lucide-react';
import { reviews, reviewsSection } from '../content/reviews';
import { Container, SectionHeading } from './ui';

/** 고객 후기 — 입력된 후기가 없으면 아무것도 표시하지 않습니다. */
export function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-[72px] bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="reviews-title"
          eyebrow={reviewsSection.eyebrow}
          title={reviewsSection.title}
          intro={reviewsSection.intro}
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <li key={i}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-surface p-7">
                <Quote className="h-7 w-7 text-gold-500" strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-[1.85] text-ink">
                  <p>{r.content}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-line pt-4 text-[15px]">
                  <span className="font-semibold text-navy-900">{r.author}</span>
                  {r.date && <span className="text-muted">{r.date}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[15px] leading-relaxed text-muted">{reviewsSection.notice}</p>
      </Container>
    </section>
  );
}
