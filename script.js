/**
 * FamFinance P2P — Interactive Landing Page Script
 * Features: Dynamic Navbar, Live Calculator, Screenshot Tabs, FAQ Accordion, Mobile Menu
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar on Scroll
  const navbar = document.getElementById('siteNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(7, 10, 18, 0.98)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });

    // Close when clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  // 3. Screenshot Tabs Switcher
  const tabBtns = document.querySelectorAll('.tab-btn');
  const galleryViews = document.querySelectorAll('.gallery-view');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      tabBtns.forEach(b => b.classList.remove('active'));
      galleryViews.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.classList.add('active');
      }
    });
  });

  // 4. Interactive Savings Calculator
  const budgetSlider = document.getElementById('calcBudget');
  const membersSlider = document.getElementById('calcMembers');
  const budgetValue = document.getElementById('budgetValue');
  const membersValue = document.getElementById('membersValue');
  const resultAmount = document.getElementById('calcResultAmount');
  const resultSubs = document.getElementById('calcSubsSaved');
  const resultHours = document.getElementById('calcHoursSaved');

  function updateCalculator() {
    if (!budgetSlider || !membersSlider || !resultAmount) return;

    const monthlyExpense = parseFloat(budgetSlider.value) || 2400;
    const members = parseInt(membersSlider.value, 10) || 3;

    if (budgetValue) budgetValue.textContent = `${monthlyExpense.toLocaleString('es-ES')} €`;
    if (membersValue) membersValue.textContent = `${members} ${members === 1 ? 'persona' : 'personas'}`;

    // Calculation model:
    // FamFinance collaborative tracking & budget alerts historically improves household net savings by 7% - 10%.
    // Base estimated annual optimization = monthlyExpense * 12 * 0.085
    const annualSavings = Math.round(monthlyExpense * 12 * 0.085);
    const subsSaved = 59.99 * Math.max(1, Math.round(members / 2)); // Annual subscription cost avoided
    const hoursSaved = Math.round(members * 18); // Time saved with automatic notifications vs manual spreadsheets

    resultAmount.textContent = `${annualSavings.toLocaleString('es-ES')} €`;
    if (resultSubs) resultSubs.textContent = `+${Math.round(subsSaved)} € en suscripciones evitadas`;
    if (resultHours) resultHours.textContent = `${hoursSaved} horas/año ahorradas`;
  }

  if (budgetSlider && membersSlider) {
    budgetSlider.addEventListener('input', updateCalculator);
    membersSlider.addEventListener('input', updateCalculator);
    updateCalculator(); // Initialize on load
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 6. Copy Link Helper
  window.copyShareLink = function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('¡Enlace copiado al portapapeles!');
    }).catch(() => {
      prompt('Copia este enlace:', url);
    });
  };
});
