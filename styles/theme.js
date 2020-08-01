import { addOpacityToColor } from "./utils";

export const breakpoints = {
  mobile: "520px"
};

export const fonts = {
  base:
    "system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
};

export const colors = {
  primary: "#0099ff",
  secondary: "1c5480",
  white: "#ffffff",
  black: "#000000"
};

export const colorsTrans = {
  primary: `${addOpacityToColor(colors.primary, 0.3)}`,
  black: `${addOpacityToColor(colors.black, 0.1)}`
};
