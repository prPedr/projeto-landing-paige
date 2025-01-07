var Esquerda = window.document.getElementById("esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var Direita = window.document.getElementById("direita")

function paraDireita() {
    Leonardo.style = "display: none"
    Bruna.style = "display: flex; margin-right: 100px"
    Samantha.style = "display: flex; margin-right: 60px"
    Direita.style = "display: none"
    Esquerda.style = "display: flex"
}

function paraEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    Direita.style = "display: flex"
    Esquerda.style = "display: none"
}
