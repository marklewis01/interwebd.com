import { h } from "preact";
import { Router } from "preact-router";

// Mui
import { Grid } from "@material-ui/core";

// custom comps
import { Nav } from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";

// routes/pages
import { Resume } from "./Resume";

// styles
import "./styles.scss";

const Error = () => <h3>Error</h3>;

export default function App() {
  const handleRouteChange = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <Grid container>
      <Nav />
      <div className="main">
        <Router onChange={handleRouteChange}>
          <Resume path="/" />
          <Error default />
        </Router>
        <ScrollToTop />
      </div>
    </Grid>
  );
}
