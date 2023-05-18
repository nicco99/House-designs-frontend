import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// #668550
// #f3eeed
// #9da98f
// #3e5f2e
// #353333

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      dark: "hsl(100, 35%, 28%)", // heading/ h1
      main: "hsl(95, 25%, 42%)", // body
      light: "#A4BE7B", // input
    },
    secondary: {
      main: "#9da98f", // buttons and icons
      dark: "#353333", // tag text
      light: "#f3eeed", // lighter buttons
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    icon: "#A7A7A7",
    bgcolor: {
      main: "#F5F5F5",
      lightGray: "hsl(10, 20%, 94%)", //our
      accentLighterDark: "hsla(177, 68%, 80%, 0.75)", // #01CFC5
    },
    text: {
      primary: "#4D4D4D",
    },
    greys: {
      light: "hsl(88, 13%, 61%)",
      dark: "hsl(0, 2%, 20%)",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      // welcome to caregive spot
      fontWeight: 600,
      fontSize: 18,
      lineHeight: "22px",
      letterSpacing: "-0.41px",
      "@media (min-width: 600px)": {
        fontSize: 24,
      },
      "@media (min-width: 900px)": {
        fontSize: 28,
      },
      "@media (min-width: 1200px)": {
        fontSize: 36,
      },
    },
    subtitle1: {
      // center text choose level/ category
      fontWeight: 600,
      fontSize: 18,
      lineHeight: "22px",
      letterSpacing: "-0.41px",
      "@media (min-width: 600px)": {
        fontSize: 20,
      },
      "@media (min-width: 900px)": {
        fontSize: 24,
      },
      "@media (min-width: 1200px)": {
        fontSize: 26,
      },
    },
    h4: {
      // level
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "22px",
      letterSpacing: "-0.41px",
      "@media (min-width: 600px)": {
        fontSize: 18,
      },
      "@media (min-width: 900px)": {
        fontSize: 20,
      },
      "@media (min-width: 1200px)": {
        fontSize: 24,
      },
    },
    h6: {
      // requirements
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "24px",
      letterSpacing: "-0.41px",
    },
    bodyLarge: {
      // large
      fontSize: 16,
      lineHeight: "20px",
      letterSpacing: "0.59px",
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.59px",
    },
    body1: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      letterSpacing: "0.59px",
    },
  },
});

export default theme;
