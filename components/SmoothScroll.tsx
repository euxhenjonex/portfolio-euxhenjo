'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Handle smooth scroll for hash links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.includes('#')) return;

      // Extract hash from /#section or #section
      const hash = href.split('#')[1];
      if (!hash) return;

      const element = document.getElementById(hash);
      if (element && pathname === '/') {
        e.preventDefault();

        // Calculate offset for fixed header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL
        window.history.pushState(null, '', `#${hash}`);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
}
