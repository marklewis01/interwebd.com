import { h, render } from "preact";

// Mui
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

// custom comps
import App from "./App";

// styles
import theme from "./theme";

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
