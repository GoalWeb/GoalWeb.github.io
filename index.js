// script.js (uprośczony kod JavaScript)

document.addEventListener("DOMContentLoaded", function () {
  // Przycisk przewijania do kontaktu
  const btn = document.getElementById("contactBtn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  // Formularz kontaktowy
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Proszę uzupełnić wszystkie pola.");
    } else {
      alert("Dziękujemy za wiadomość, " + name + "!");
      form.reset();
    }
  });
});