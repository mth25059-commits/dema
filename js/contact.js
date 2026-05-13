const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) { showNotice('Please fill in all required fields.', 'error'); return; }
    if (!isValidEmail(email))         { showNotice('Please enter a valid email address.', 'error'); return; }

    const btn = contactForm.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      showNotice('Message sent! I\'ll be in touch within 2 business days.', 'success');
      contactForm.reset();
      btn.textContent = 'Send message →';
      btn.disabled = false;
    }, 1800);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotice(msg, type) {
  document.querySelector('.form-notice')?.remove();
  const notice = document.createElement('p');
  notice.className = 'form-notice';
  notice.textContent = msg;
  notice.style.cssText = `
    grid-column: span 2; padding: 0.875rem 1rem; border-radius: 6px;
    font-size: 0.875rem; font-weight: 500;
    background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
    color: ${type === 'success' ? '#155724' : '#721c24'};
    border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
  `;
  contactForm.appendChild(notice);
  setTimeout(() => notice.remove(), 6000);
}
