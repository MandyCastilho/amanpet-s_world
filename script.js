
AOS.init({
  duration: 1000,
  once: true,
});

document.getElementById("petForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("mensagemSucesso");
  msg.style.display = "block";
  msg.classList.add("mostrar");

  // Some com a mensagem depois de 4 segundos
  setTimeout(() => {
    msg.classList.remove("mostrar");
    msg.style.display = "none";
  }, 4000);

  this.reset();
});