const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// === Tema salvo no localStorage ===
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️"; // Sol = modo claro
}

// === Alternar tema e salvar no localStorage ===
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙"; // Alterna ícone
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// === Inicializa animações com AOS.js ===
AOS.init({
  duration: 1000, // duração da animação (ms)
  once: true      // anima só uma vez ao entrar na tela
});

// === Manipula envio do formulário ===
document.getElementById("petForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Aqui você pode futuramente validar dados, enviar via backend, etc.
  alert("Inscrição recebida com sucesso! 🐾 Vamos cuidar do seu pet com muito carinho!");

  this.reset(); // limpa o formulário
});
