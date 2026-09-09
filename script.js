"use strict";
// Content stays visible when animations are unsupported or disabled.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.06});
  document.querySelectorAll('.about-grid, .credential-band, .project-feature, .project-card, .skills-layout, .career-grid').forEach((el) => {
    el.classList.add('reveal-ready');
    observer.observe(el);
  });
}
