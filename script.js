// script.js

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