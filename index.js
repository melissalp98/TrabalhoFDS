
const botao = document.createElement("button");


botao.textContent = "Clique para ver uma mensagem!";


const container = document.getElementById("botao-container");
container.appendChild(botao);


const texto = document.createElement("p");
texto.textContent = "Prazer em conhecer você!";


texto.style.display = "none";


container.appendChild(texto);


botao.addEventListener("click", () => {

  texto.style.display = "block";
});
