document.addEventListener('DOMContentLoaded', () => {
  /* -----------------------------
     Mobile nav toggle
  ----------------------------- */
  const burger = document.querySelector('.menu-toggle');
  const navList = document.querySelector('#topnav ul');

  burger.addEventListener('click', () => {
    navList.classList.toggle('show');

    // Toggle aria-expanded for accessibility
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isExpanded));
  });

  /* -----------------------------
     FAQ aria-expanded toggling
  ----------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const summary = item.querySelector('summary');

    // Set initial state
    summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');

    // Update aria-expanded whenever the <details> opens/closes
    item.addEventListener('toggle', () => {
      summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
    });
  });
});
