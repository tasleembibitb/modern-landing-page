// Noor Boutique — landing page interactions
// 1) Mobile menu  2) FAQ accordion  3) Order form validation

// --- Mobile menu ---
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- FAQ accordion (one open at a time) ---
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

// --- Order form validation ---
const form = document.getElementById('orderForm');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');
form.addEventListener('submit', event => {
  event.preventDefault();
  formError.textContent = '';
  formSuccess.textContent = '';
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const product = document.getElementById('product').value;
  const address = document.getElementById('address').value.trim();

  if (name.length < 3) {
    formError.textContent = 'Please enter your full name.';
    return;
  }
  // Pakistani mobile: 03xx-xxxxxxx or 03xxxxxxxxx, digits only after removing - and spaces
  const digits = phone.replace(/[\s-]/g, '');
  if (!/^03\d{9}$/.test(digits)) {
    formError.textContent = 'Please enter a valid Pakistani mobile number, e.g. 03xx-xxxxxxx.';
    return;
  }
  if (!product) {
    formError.textContent = 'Please choose a product.';
    return;
  }
  if (address.length < 10) {
    formError.textContent = 'Please enter a complete delivery address (at least 10 characters).';
    return;
  }
  // Demo only — no real order is placed. In production, send to WhatsApp / backend here.
  formSuccess.textContent = `Thank you, ${name}! Your order for "${product}" has been noted (demo). We will confirm on ${phone}.`;
  form.reset();
});
