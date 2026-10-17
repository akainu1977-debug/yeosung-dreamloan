import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { navItems } from '../content/siteContent';
import { company, toTelHref } from '../config/company';
import { Container } from './ui';
import { Logo } from './Logo';

export function Header({ activeId }: { activeId: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const telHref = toTelHref(company.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow ${
        scrolled || open ? 'shadow-[0_1px_0_0_var(--color-line)]' : ''
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#top" className="rounded-sm" aria-label="여성드림론 홈으로 이동">
          <Logo />
        </a>

        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`relative rounded-md px-4 py-2 text-[15px] font-medium transition-colors hover:text-navy-900 ${
                      active ? 'text-navy-900' : 'text-muted'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-opacity ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {telHref && (
            <a
              href={telHref}
              className="hidden items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900 sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
          )}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 hover:bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="모바일 메뉴"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <Container>
          <ul className="py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3.5 text-base font-medium text-ink hover:bg-surface"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {telHref && (
              <li className="mt-2 border-t border-line pt-3">
                <a
                  href={telHref}
                  className="flex items-center gap-2 rounded-md px-2 py-3.5 text-base font-semibold text-navy-900"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  대표전화 {company.phone}
                </a>
              </li>
            )}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
