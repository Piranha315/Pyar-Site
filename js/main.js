// Reveal-on-scroll
const reveals = document.querySelectorAll('.section-head, .ex-card, .pillar, .founder-feature, .work, .event, .tier, .press-item');
reveals.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => io.observe(el));

function openTickets() {
  document.getElementById('tickets-overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}

function closeTickets() {
  document.getElementById('tickets-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeTickets();
});
