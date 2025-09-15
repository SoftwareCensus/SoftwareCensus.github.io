// sc.js

// smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
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
