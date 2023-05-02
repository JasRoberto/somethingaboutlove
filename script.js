const botao1 = document.querySelector(".btn-1");
const botao2 = document.querySelector(".btn-2");
const botao3 = document.querySelector(".btn-3");
const box1 = document.querySelector(".box-1");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const musica = document.getElementById("musica");
const box3 = document.querySelector(".box-3");
console.log(box1);

botao1.addEventListener("click", moverBtn);
function moverBtn() {
  const contaWidth = Math.floor(Math.random() * (-800 + 200 + 30)) + 200;
  const contaHeight = Math.floor(Math.random() * (-400 - 100 + 40)) + 200;
  box1.style.top = contaWidth + "px";
  box1.style.left = contaHeight + "px";
}
botao2.addEventListener("click", alertBtn);

function alertBtn() {
  alert("BETCHY, É SERIO ISSO? Vamos tentar de novo. Só aperta 'OK', Gata!");
  box3.classList.add("ativo");
}
botao3.addEventListener("click", showModal);
function showModal() {
  modal.showModal();
  musica.play();
  musica.volume(0.1);
}
closeModal.addEventListener("click", () => {
  modal.close();
});
