/**
 * FamFinance P2P — Interactive Landing Page Script
 * Responsive Design, Smooth Scroll, Real Gallery Tabs, FAQ & Contact
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar on Scroll
  const navbar = document.getElementById('siteNavbar');
  const handleScroll = () => {
    if (window.scrollY > 25) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Menu Toggle with Animated Hamburger Icon
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  const burgerSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  const closeSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';

  const closeMobileMenu = () => {
    navbar?.classList.remove('menu-open');
    if (mobileToggle) {
      mobileToggle.innerHTML = burgerSvg;
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('no-scroll');
  };

  if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navbar.classList.toggle('menu-open');
      mobileToggle.innerHTML = isOpen ? closeSvg : burgerSvg;
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    });

    // Close on navigation link click
    navLinks?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close when clicking outside the navbar
    document.addEventListener('click', (e) => {
      if (navbar.classList.contains('menu-open') && !navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbar.classList.contains('menu-open')) {
        closeMobileMenu();
      }
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

  // 4. Contact Form Handler (Directo a nachocr26@gmail.com)
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  const btnGmailWeb = document.getElementById('btnGmailWeb');

  function getEmailPayload() {
    const name = document.getElementById('contactName')?.value.trim() || 'Usuario';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const subjectChoice = document.getElementById('contactSubject')?.value || 'Consulta FamFinance';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    const subject = `[FamFinance] ${subjectChoice} - ${name}`;
    const body = `Hola Nacho,\n\n${message}\n\n---\nRemitente: ${name}\nCorreo de respuesta: ${email}`;

    return { name, email, subject, body };
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const { subject, body } = getEmailPayload();
      const mailtoUrl = `mailto:nachocr26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      if (contactSuccess) {
        contactSuccess.style.display = 'block';
        contactSuccess.innerHTML = `
          <strong>✓ ¡Mensaje preparado!</strong> Se ha abierto tu cliente de correo para enviar a <strong>nachocr26@gmail.com</strong>.<br />
          <span style="font-size: 0.85rem; opacity: 0.9;">Si utilizas Gmail en el navegador web, pulsa en el botón <strong>"Abrir en Gmail Web"</strong> para redactar en 1 clic.</span>
        `;
      }
    });
  }

  if (btnGmailWeb) {
    btnGmailWeb.addEventListener('click', (e) => {
      e.preventDefault();
      const { subject, body } = getEmailPayload();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nachocr26@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(gmailUrl, '_blank');

      if (contactSuccess) {
        contactSuccess.style.display = 'block';
        contactSuccess.innerHTML = `<strong>✓ Pestaña de Gmail abierta.</strong> Puedes revisar y enviar tu mensaje directamente a <strong>nachocr26@gmail.com</strong>.`;
      }
    });
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
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
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        alert('¡Enlace de FamFinance copiado al portapapeles!');
      }).catch(() => {
        prompt('Copia este enlace para compartir:', url);
      });
    } else {
      prompt('Copia este enlace para compartir:', url);
    }
  };
});
