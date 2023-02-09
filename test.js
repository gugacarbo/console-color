const Colors = require("./index")
Colors()

//Ex. 3 (Texto Preto/Fundo verde; Texto Verde/Fundo Branco )
console.color("Primeira Parte [c:green][bg:white] Segunda Parte", "black", "green");
//Ex. 4 (Texto Preto/Fundo Roxo, Sublinhado, X Vermelho, Texto Ciano fundo cinza)
console.color(
  "Primeira Parte [c:cyan][bg:gray] [i:error] Segunda Parte",
  "black",
  "purple",
  null,
  "underline"
);