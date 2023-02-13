const suportAnsi = process.stdout.isTTY;
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

const fontStyles = {
  dim: "\x1b[2m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  invert: "\x1b[7m",
  hidden: "\x1b[8m",
  italic: "\x1b[3m",
  bold: "\x1b[1m",
  strikethrough: "\x1b[9m",
};

const icons = {
  info: `\u{2B55}`,
  fire: `\u{1F525}`,
  success: `\u{2705}`,
  warning: `\u{1F7E1}`,
  error: `\u{274C}`,
  blue: `\u{1F535}`,
  red: `\u{1F534}`,
  green: `\u{1F7E2}`,
  yellow: `\u{1F7E1}`,
  white: `\u{26AA}`,
};

const noColors = (msg) =>
  msg
    .replace(/\[c:(.*?)]/g, "")
    .replace(/\[bg:(.*?)]/g, "")
    .replace(/\[i:(.*?)]/g, "")
    .replace(/\[s:(.*?)]/g, "")
    .replace(/\[r:]/g, "");

function handleColors(msg, color = "", bgColor = "", icon = "", style = "") {
  if (!suportAnsi) {
    return noColors(msg);
  }
  const options = {
    color: color.toLowerCase(),
    bgColor: bgColor.toLowerCase(),
    icon: icon.toLowerCase(),
    style: style.toLowerCase(),
  };

  const icon_ = icons[options.icon] ? icons[options.icon] + " " : "";
  const style_ = fontStyles[options.style] ? fontStyles[options.style] : "";
  const color_ = colors[options.color] ? colors[options.color] : "";
  const bgColor_ = bgColors[options.bgColor] ? bgColors[options.bgColor] : "";

  let newMsg = msg;

  var colorRegex = /\[c:(.*?)]/g;
  newMsg = newMsg.replace(colorRegex, (_, c) => (colors[c] ? colors[c] : ""));

  var backgroundColorRegex = /\[bg:(.*?)]/g;
  newMsg = newMsg.replace(backgroundColorRegex, (_, bg) =>
    bgColors[bg] ? bgColors[bg] : ""
  );

  var iconRegex = /\[i:(.*?)]/g;
  newMsg = newMsg.replace(iconRegex, (_, i) => (icons[i] ? icons[i] : ""));

  var styleRegex = /\[s:(.*?)]/g;
  newMsg = newMsg.replace(styleRegex, (_, s) =>
    fontStyles[s] ? fontStyles[s] : ""
  );

  var resetRegex = /\[r:]/g;
  newMsg = newMsg.replace(resetRegex, colors.reset);

  return `${colors.reset}${icon_}${colors.reset}${style_}${color_}${bgColor_}${newMsg}${colors.reset}`;
}

const consoleColor = (msg, color = "", bg = "", i = "", s = "") =>
  console.log(handleColors(msg, color, bg, i, s));

const consoleSuccess = (msg) =>
  consoleColor(msg, "green", "", "success", "bold");

const consoleError = (msg) => {
  var error = new Error();
  Error.captureStackTrace(error, consoleError);
  let errorStack = error.stack.split("\n").splice(0, 6).join("\n");
  console.error(handleColors(`${msg}`, "red", "black", "error", "bright"));
  console.error(
    handleColors(`${errorStack}[r:]`, "red", "black", "error", "bright")
  );
};

const consoleWarn = (msg) => {
  var error = new Error();
  Error.captureStackTrace(error, consoleError);
  let errorStack = error.stack.split("\n").splice(0, 6).join("\n");
  return console.warn(
    handleColors(
      `${msg}\n${errorStack}[r:]\n`,
      "yellow",
      "black",
      "warning",
      "bright"
    )
  );
};

function helper() {
  consoleColor(
    " Col[c:blue]ors [c:white][c:]",
    "purple",
    "black",
    "fire",
    "bold"
  );
  Object.keys(colors).map((c) => {
    consoleColor(`${c}`, c);
  });
  consoleColor(
    " Background [c:red]colors [c:white][c:]",
    "blue",
    "black",
    "fire",
    "bold"
  );
  Object.keys(bgColors).map((c) => {
    consoleColor(c, "", c);
  });
  consoleColor(" Icons ", "purple", "black", "fire", "bold");

  Object.keys(icons).map((c) => {
    consoleColor(c, "", "", c);
  });
  consoleColor(" Font [c:yellow]Styles ", "green", "black", "fire", "bold");

  Object.keys(fontStyles).map((c) => {
    console.log(
      suportAnsi && c == "hidden" ? " hidden" : "",
      handleColors(c, "", "", "", c)
    );
  });
}

module.exports = (help = false) => {
  if (suportAnsi) {
    //O sistema suporta códigos ANSI.
    global.console.color = consoleColor;
    global.console.success = consoleSuccess;
    global.console.warn = consoleWarn;
    global.console.error = consoleError;
  } else {
    //O sistema NÃO suporta códigos ANSI.
    console.log(
      "\nvibrant-console:",
      "ANSI codes are not supported on this system. No colors.\n"
    );
    global.console.color = noColors;
    global.console.success = noColors;

    const w = global.console.warn;
    global.console.warn = (msg) => {
      w(noColors(msg));
    };

    const e = global.console.error;
    global.console.error = (msg) => {
      e(noColors(msg));
    };
  }
  help && helper();
};
