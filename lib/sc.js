// sc.js

// smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
            });
        }
      }
    });
  });
});

// form hidden iframe and response modal
const iframe = document.getElementById("hiddenFrame");
const formResponseModal = document.getElementById('formResponseModal');
function openFormResponse() {
    formResponseModal.show();
    console.log("The 403 error from script.googleusercontent.com is returned after a 302/redirect because we hide the response in an iframe. Not a real problem.");
}
function closeFormResponse() {
    formResponseModal.close();
}
iframe.addEventListener("load", () => {
    closeWaitModal();
    openFormResponse();
    contactForm.reset()
});

 // Get user's timezone and language
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const language = navigator.language || navigator.userLanguage;

// Populate hidden fields
document.getElementById("userTimezone").value = timezone;
document.getElementById("userLanguage").value = language;

// Define allowed values
const allowedTimezone = ["Europe/Stockholm"]; // CET/CEST
const allowedLanguages = ["sv", "sv-SE", "sv-FI", "en", "en-US", "en-Latn-US"];

// Check conditions
const isTimezoneValid = timezone === allowedTimezone;
const isLanguageValid = allowedLanguages.includes(language);

// Disable form if both conditions fail
if (!isTimezoneValid && !isLanguageValid) {
    const form = document.getElementById("contactForm");
    Array.from(form.elements).forEach(el => el.disabled = true);
    form.insertAdjacentHTML("beforeend", "<p>Form disabled: Software Census services not available in your region/language.</p>");
}

// wait modal
const waitModal = document.getElementById('waitModal');
const contactForm = document.getElementById('contactForm');
function openWaitModal() {
    if (contactForm.checkValidity()) {
        waitModal.showModal();
    } else {
        contactForm.reportValidity();
    }
}
function closeWaitModal() {
    waitModal.close();
}

// terms modal
const termsModal = document.getElementById('termsModal');
function openTerms() {
    termsModal.showModal();
}
function closeTerms() {
    termsModal.close();
}

// sec policy modal
const secPolicyModal = document.getElementById('secPolicyModal');
function openSecPolicy() {
    secPolicyModal.showModal();
}
function closeSecPolicy() {
    secPolicyModal.close();
}
