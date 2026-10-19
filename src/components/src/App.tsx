import { useEffect, useState } from 'react';
import { navItems } from './content/siteContent';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Principles } from './components/Principles';
import { Faq } from './components/Faq';
import { CompanyInfo } from './components/CompanyInfo';
import { Footer } from './components/Footer';

/** 현재 화면에 보이는 섹션을 추적해 메뉴에 표시합니다. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((n) => n.id);

export default function App() {
  const active = useActiveSection(sectionIds);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        본문 바로가기
      </a>
      <Header activeId={active} />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Principles />
        <Faq />
        <CompanyInfo />
      </main>
      <Footer />
    </>
  );
}
