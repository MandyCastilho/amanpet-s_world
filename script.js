// script.js
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Carrega tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Alterna tema e salva no localStorage
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// AOS init
AOS.init({
  duration: 1000,
  once: true,
});

// Formulário - só exibe alerta básico por enquanto
document.getElementById("petForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Inscrição recebida com sucesso! 🐾 Vamos cuidar do seu pet com muito carinho!");
  this.reset();
});
