const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.toggleAttribute('data-open', !isOpen);
  });
}

const consent = document.querySelector('[data-cookie-consent]');
const consentButtons = document.querySelectorAll('[data-cookie-choice]');

if (consent && !localStorage.getItem('actualTextilesCookieChoice')) {
  consent.removeAttribute('hidden');
}

consentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.setItem('actualTextilesCookieChoice', button.dataset.cookieChoice || 'managed');
    consent?.setAttribute('hidden', '');
  });
});

const revealItems = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-visible', 'true');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.setAttribute('data-visible', 'true'));
}
