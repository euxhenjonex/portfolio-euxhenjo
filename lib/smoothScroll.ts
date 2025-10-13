export function initSmoothScroll() {
  // Handle both /#section and #section anchor links with smooth scroll
  const handleClick = (e: Event) => {
    const anchor = e.currentTarget as HTMLAnchorElement;
    const href = anchor.getAttribute('href');
    if (!href) return;

    // Extract hash from /#section or #section
    const hash = href.includes('#') ? href.split('#')[1] : '';
    if (!hash || hash === '') return;

    const target = document.getElementById(hash);
    if (target) {
      e.preventDefault();

      // Calculate offset for fixed header (80px header height + 20px margin)
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL without jumping
      const newUrl = window.location.pathname === '/' ? `#${hash}` : `/#${hash}`;
      history.pushState(null, '', newUrl);
    }
  };

  // Select both /#section and #section patterns
  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener('click', handleClick);
  });
}
