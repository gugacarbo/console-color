# vibrant-console

`Em Desenvolvimento.`

Deixe seus console logs mais coloridos!

## Instalação

```bas
yarn add vibrant-console
```

## Uso

```js
const vibrantConsole = require("vibrant-console");

//Inicialização
vibrantConsole(); //global.console.color = vibrantConsole()

//Cor Única
//Passando cores por parametro
//Afeta toda a mensagem, menos o ícone
console.color(
  msg,
  (color = "white"), // Cor da fonte
  (bgColor = "black"), // Cor do fundo
  (icon = undefined), // Ícone no Início
  (style = undefined) // Estilo do texto
);

/*Passando cores por string
 * [c:cor]
 * [bg:fundo]
 * [s:estilo]
 * [i:icone]
 */
console.color("Estilo Padrão [c:green][bg:white] Texto verde com fundo branco");
console.color(
  "[c:black][bg:purple]Texto preto com fundo roxo [c:cyan][bg:gray] [i:error] Ícone de erro texto ciano, fundo cinza"
);
```

## Exemplos

```js
//Ex. 1
console.color(
  "Texto Preto, Fundo Branco e Ícone azul",
  "black",
  "white",
  "blue"
);
```

![img](https://github.com/gugacarbo/vibrant-console/blob/master/readme/ex1.png?raw=true)

```js
//Ex. 2
console.color(
  "Texto Amarelo, Fundo Preto e Ícone Amarelo, Negrito",
  "yellow",
  "red",
  "yellow",
  "bold"
);
```

![img](https://github.com/gugacarbo/vibrant-console/blob/master/readme/ex2.png?raw=true)

```js
//Ex. 3
console.color(
  "[c:black][bg:purple]Texto preto com fundo roxo [c:cyan][bg:gray] [i:error] Ícone de erro texto ciano, fundo cinza"
);
```

![img](https://github.com/gugacarbo/vibrant-console/blob/master/readme/ex3.png?raw=true)

```js
//Ex. 4
console.color("Texto vermelho com fundo azul,[s:inverse] e aqui invertido");
```

![img](https://github.com/gugacarbo/vibrant-console/blob/master/readme/ex4.png?raw=true)

**Cores**

```js
const colors = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  purple: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};
```

**Backgrounds**

```js
const bgColors = {
  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  purple: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
  gray: "\x1b[100m",
};
```

**Estilos**

```js
const fontStyles = {
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  invert: "\x1b[7m",
  hidden: "\x1b[8m",
  italic: "\x1b[3m",
  strikethrough: "\x1b[9m",
};
```

**Ícones**

```js
const mainIcons = {
  ⭕ info: `\u{2B55}`,
  🔥 execution: `\u{1F525}`,
  ✅ success: `\u{2705}`,
  🟡 warning: `\u{1F7E1}`,
  ❌ error: `\u{274C}`,
  🔵 blue: `\u{1F535}`,
  🔴 red: `\u{1F534}`,
  🟢 green: `\u{1F7E2}`,
  🟡 yellow: `\u{1F7E1}`,
  ⚪ white: `\u{26AA}`,
};
```
