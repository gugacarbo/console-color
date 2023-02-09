const Colors = require("./index")
Colors()

//Ex. 1 (Texto Preto, Fundo Branco e Ícone azul)
console.color("Mensagem", "black", "white", "blue");

//Ex. 2 (Texto Amarelo, Fundo Preto e Ícone Amarelo, Mais Claro)
console.color("Mensagem", "yellow", "black", "yellow", "bright");