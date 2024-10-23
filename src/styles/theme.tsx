"use client";

import { createTheme, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: string]: string;
  }
  interface Palette {
    black: PaletteColor;
  }
  interface PaletteOptions {
    black?: PaletteColorOptions;
  }
}

const Theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    black: {
      main: "#000",
    },
  },
  typography: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {},
  transitions: {},
  components: {},
});

export default Theme;
