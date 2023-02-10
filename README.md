# colored_console

Deixe seus console logs mais coloridos!

## Instalação

```json
//settings.json
{
  "dependencies": {
    "colored_console": "git+https://github.com/gugacarbo/colored_consolegit"
  }
}
```

## Uso

```js
const ConsoleColors = require("colored_console;
ConsoleColors();
//add global.console.color()

console.color(
  msg,
  (color = "white"), // Cor da fonte
  (bgColor = "black"), // Cor do fundo
  (icon = undefined), // Ícone no Início
  (style = undefined) // Estilo do texto
);
```

## Exemplos

### Mensagem Inteira

```js
//Ex. 1 (Texto Preto, Fundo Branco e Ícone azul)
console.color("Mensagem", "black", "white", "blue");
//Ex. 2 (Texto Amarelo, Fundo Preto e Ícone Amarelo, Mais Claro)
console.color("Mensagem", "yellow", "black", "yellow", "bright");
```

![img](https://github.com/gugacarbo/colored_consoleblob/master/readme/messageEx1_Ex2.jpeg?raw=true)

### Parte da Mensagem

```js
// [c:cor]
// [bg:fundo]
// [s:estilo]
// [i:icone]

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
```

![img](https://github.com/gugacarbo/colored_consoleblob/master/readme/messageEx3_Ex4.jpeg?raw=true)

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
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
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
