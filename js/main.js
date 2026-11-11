const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Service links preselect the relevant enquiry option.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector('select[name="service"]');
    if (serviceSelect) {
      const desired = link.dataset.service;
      const matchingOption = [...serviceSelect.options].find((option) =>
        option.text.toLowerCase().includes(desired.toLowerCase().split(" ")[0])
      );
      if (matchingOption) serviceSelect.value = matchingOption.value;
    }
  });
});

// This is an enquiry form, not a live booking or payment engine.
// It prepares a WhatsApp message for the business number.
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const data = new FormData(enquiryForm);
    const message = [
      "Hello Emmy Logistics & Travel, I would like to make an enquiry.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Service: ${data.get("service")}`,
      `Request: ${data.get("message")}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/2349072994665?text=${encodeURIComponent(message)}`;
    formStatus.textContent = "Opening WhatsApp with your enquiry details…";
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
