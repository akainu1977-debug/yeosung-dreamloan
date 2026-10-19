import { useEffect, useRef, useState } from 'react';
import { Quote, X } from 'lucide-react';
import { reviews, reviewsSection } from '../content/reviews';
import { Container, SectionHeading } from './ui';

/** 고객 후기 — 입력된 후기가 없으면 아무것도 표시하지 않습니다. */
export function Reviews() {
  // 팝업으로 크게 보여줄 사진 (없으면 null = 팝업 닫힘)
  const [popup, setPopup] = useState<{ src: string; alt: string } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // 팝업이 열려 있을 때: ESC 키로 닫기, 뒤 화면 스크롤 막기
  useEffect(() => {
    if (!popup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPopup(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [popup]);

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
          {reviews.map((r, i) => {
            const alt = `${r.author} 고객 후기 사진`;
            return (
              <li key={i}>
                <figure className="flex h-full flex-col rounded-xl border border-line bg-surface p-7">
                  {r.image ? (
                    <button
                      type="button"
                      onClick={() => setPopup({ src: r.image as string, alt })}
                      className="mb-5 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-line bg-white"
                      aria-label={`${alt} 크게 보기`}
                    >
                      <img
                        src={r.image}
                        alt={alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </button>
                  ) : null}
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
            );
          })}
        </ul>

        <p className="mt-8 text-[15px] leading-relaxed text-muted">{reviewsSection.notice}</p>
      </Container>

      {/* 사진 팝업 — 바깥(어두운 배경)을 누르거나 X 버튼, ESC 키로 닫힙니다 */}
      {popup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={popup.alt}
          onClick={() => setPopup(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setPopup(null)}
            aria-label="사진 닫기"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <img
            src={popup.src}
            alt={popup.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}