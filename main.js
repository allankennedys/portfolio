
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-link');
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });

  const sections = document.querySelectorAll('section[id], footer[id]');

  function setActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 100) current = sec.id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + current);
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
})();

(function initReveal() {
  const targets = document.querySelectorAll(
    '.tech-card, .project-card, .stat-card, .section-header, .hero-content, .footer-inner'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
})();

(function initProfileHover() {
  const img  = document.getElementById('profileImg');
  const name = document.querySelector('.hero-name');
  if (!img || !name) return;

  img.addEventListener('mouseenter', () => {
    name.style.transition = 'color 0.3s ease';
    name.style.color = 'var(--accent)';
  });
  img.addEventListener('mouseleave', () => {
    name.style.color = '';
  });
})();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const footerCopy = document.getElementsByClassName('footer-copy')[0];
footerCopy.innerHTML = `© ${new Date().getFullYear()} Allan Kennedy<br>Desenvolvimento focado em experiência, performance e conversão.`