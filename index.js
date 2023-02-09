module.exports = () => (global.console.color = consoleColor);

function consoleColor(
  msg,
  color__ = "white",
  bgColor__ = "black",
  icon = undefined,
  style = undefined
) {
  const color = color__.toLowerCase();
  const bgColor = bgColor__.toLowerCase();

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
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
  };

  const mainIcons = {
    info: `\u{2B55}`,
    execution: `\u{1F525}`,
    success: `\u{2705}`,
    warning: `\u{1F7E1}`,
    error: `\u{274C}`,
    blue: `\u{1F535}`,
    red: `\u{1F534}`,
    green: `\u{1F7E2}`,
    yellow: `\u{1F7E1}`,
    white: `\u{26AA}`,
  };

  const icon_ = icon && mainIcons[icon] ? mainIcons[icon] : "";
  const style_ = style && fontStyles[style] ? fontStyles[style] : "";

  let result;
  let newMsg = msg;

  var colorRegex = /\[c\:[A-z]+\]/;

  while ((result = colorRegex.exec(newMsg))) {
    const color_ = colors[result[0].replace("[c:", "").replace("]", "")]
      ? colors[result[0].replace("[c:", "").replace("]", "")]
      : colors[color];
    newMsg = newMsg.replaceAll(result[0], color_);
  }

  var backgroundColorRegex = /\[bg\:[A-z]+\]/;

  while ((result = backgroundColorRegex.exec(newMsg))) {
    const bgColor_ = bgColors[result[0].replace("[bg:", "").replace("]", "")]
      ? bgColors[result[0].replace("[bg:", "").replace("]", "")]
      : bgColors[bgColor];
    newMsg = newMsg.replaceAll(result[0], bgColor_);
  }
  var iconRegex = /\[i\:[A-z]+\]/;

  while ((result = iconRegex.exec(newMsg))) {
    const icon_ = mainIcons[result[0].replace("[i:", "").replace("]", "")]
      ? mainIcons[result[0].replace("[i:", "").replace("]", "")]
      : mainIcons["info"];
    newMsg = newMsg.replaceAll(result[0], icon_);
  }
  var styleRegex = /\[s\:[A-z]+\]/;

  while ((result = styleRegex.exec(newMsg))) {
    const style_ = fontStyles[result[0].replace("[s:", "").replace("]", "")]
      ? fontStyles[result[0].replace("[s:", "").replace("]", "")]
      : fontStyles.bright;
    newMsg = newMsg.replaceAll(result[0], style_);
  }

  var resetRegex = /\[r\:[A-z]*\]/;

  while ((result = resetRegex.exec(newMsg))) {
    newMsg = newMsg.replaceAll(result[0], colors.reset);
  }

  console.log(
    `${colors.reset}${icon_} ${colors.reset}${style_}${colors[color]}${bgColors[bgColor]} ${newMsg} ${colors.reset}`
  );
}
