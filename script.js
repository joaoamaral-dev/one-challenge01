function criptografar(frase) {
  return frase
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografar(frase) {
  return frase
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");
}

function executarAcao(acao, frase) {
  let resultado;

  if (acao === "criptografar") {
    resultado = criptografar(frase);
  } else if (acao === "descriptografar") {
    resultado = descriptografar(frase);
  }

  let outputElement = document.getElementById("output");
  outputElement.innerHTML = `<div id="resultado-container">
                                <p class="resultado-estilizado" id="resultado">${resultado}</p>
                                <button class="botao" id="botao-copiar">Copiar</button>
                             </div>`;

  document.getElementById("area-de-texto").value = "";

  if (resultado !== "") {
    const botaoCopiar = document.getElementById("botao-copiar");

    botaoCopiar.addEventListener("click", copiarTexto);

    botaoCopiar.style.visibility = "visible";
  } else {
    const botaoCopiar = document.getElementById("botao-copiar");
    botaoCopiar.style.visibility = "hidden";
  }
}

function copiarTexto() {
  const resultadoElement = document.getElementById("resultado");

  const textarea = document.createElement("textarea");
  textarea.value = resultadoElement.innerText;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);
}

// Dark mode

let imgAtual = "./assets/logo-claro.png";
let imgDark = "./assets/logo-escuro.png";

let mainImgAtual = "./assets/img-modoclaro.png";
let mainImgDark = "./assets/img-modoescuro.png";

let modoEscuroAtivo = false;

function mudarEstilo() {
  modoEscuroAtivo = !modoEscuroAtivo;

  if (modoEscuroAtivo) {
    document.body.style.backgroundColor = "#0a3871";
    document.getElementById("modo-escuro").textContent = "Ativar Modo Claro";
    document.getElementById("logo-alura").src = imgDark;
    document.getElementById("footer").style.backgroundColor = "#022045";
    document.getElementById("img-section").src = mainImgDark;
    document.getElementById("output").style.backgroundColor = "#022045";
    document.getElementById("title").style.color = "#fff";
    document.getElementById("description").style.color = "#fff";
    document.getElementById("attention").style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#d5e5f3";
    document.getElementById("modo-escuro").textContent = "Ativar Modo Escuro";
    document.getElementById("logo-alura").src = imgAtual;
    document.getElementById("footer").style.backgroundColor = "#0a3871";
    document.getElementById("img-section").src = mainImgAtual;
    document.getElementById("output").style.backgroundColor = "#fff";
    document.getElementById("title").style.color = "rgb(44, 44, 44)";
    document.getElementById("description").style.color = "rgb(44, 44, 44)";
    document.getElementById("attention").style.color = "rgb(44, 44, 44)";
  }
}
