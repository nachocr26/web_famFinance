/**
 * FamFinance P2P — Interactive Landing Page Script
 * Features: Dynamic Navbar, Screenshot Tabs, FAQ Accordion, Direct Email Contact Form, Mobile Menu
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

  // 4. Contact Form Handler (Directo a nachocr26@gmail.com sin servicios caídos ni redirecciones)
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

      // Abre el cliente de correo del sistema (Gmail app, Mail, Thunderbird, etc.)
      window.location.href = mailtoUrl;

      if (contactSuccess) {
        contactSuccess.style.display = 'block';
        contactSuccess.innerHTML = `
          <strong>✅ ¡Mensaje preparado!</strong> Se ha abierto tu aplicación de correo para enviar a <strong>nachocr26@gmail.com</strong>.<br />
          <span style="font-size: 0.85rem; opacity: 0.9;">Si utilizas Gmail en el navegador web, pulsa en el botón <strong>"Abrir en Gmail Web"</strong> para enviar en 1 clic.</span>
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
        contactSuccess.innerHTML = `<strong>✅ Pestaña de Gmail abierta.</strong> Puedes revisar y enviar tu mensaje directamente a <strong>nachocr26@gmail.com</strong>.`;
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
