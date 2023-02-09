# console-colors

Deixe seus console logs mais coloridos!

**Instalação**

```json
//settings.json
{
  "dependencies": {
    "console-colors": "git+https://github.com/gugacarbo/console-colors.git"
  }
}
```

**Utilização**

```js
const ConsoleColors = require("console-colors");
ConsoleColors();
//add global.console.color()

console.color(
  msg,
  (color = "white"), // Cor da fonte
  (bgColor = "black"), // Cor do fundo
  (icon = undefined), // Ícone no Início
  (style = undefined) // Estilo do texto
);

//Ex. 1 (Texto Preto, Fundo Branco e Ícone azul)
console.color("Mensagem", "black", "white", "blue");

//Ex. 2 (Texto Amarelo, Fundo Preto e Ícone Amarelo, Mais Claro)
console.color("Mensagem", "yellow", "black", "yellow", "bright");
```

![img](https://github.com/gugacarbo/react-simple-snap/blob/master/WhatsApp%20Image%202023-02-09%20at%2020.39.35.jpeg?raw=true)

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
