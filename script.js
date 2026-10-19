"use strict";
(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const button = document.querySelector("[data-copy-email]");
  const status = document.querySelector("[data-copy-status]");
  const email = "subkhanmasudi8@gmail.com";
  if (!button || !status) return;
  button.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("clipboard-unavailable");
      await navigator.clipboard.writeText(email);
      status.textContent = "Alamat email tersalin.";
    } catch (_) {
      status.textContent = "Salin email ini: " + email;
    }
  });
})();
