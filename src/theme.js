import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "none"
        }
      }
    }
  },
  palette: {
    primary: { main: "#00bcd4" },
    secondary: { main: "#ffc400" },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    divider: "#e0e0e0"
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 100,
      lineHeight: 1.5
    },
    h2: {
      fontSize: "1.8rem",
      lineHeight: 1.2
    },
    h3: {
      fontSize: "1.2rem",
      lineHeight: 1.5
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.2
    },
    h5: {
      fontSize: ".9rem",
      fontWeight: 500
    },
    body1: {
      fontSize: 14
    }
  }
});

export default theme;
