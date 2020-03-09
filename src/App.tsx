import { h } from "preact";
import { Router } from "preact-router";

// Mui
import { Grid, Typography } from "@material-ui/core";

// custom comps
import { Nav } from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";

// routes/pages
import { Contact, Resume, Projects } from "./routes";

// styles
import "./styles.scss";

const Home = () => <Typography variant="h2">Home Page</Typography>;
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
          <Projects path="/" />
          <Contact path="/contact" />
          <Resume path="resume" />
          {/* <Error default /> */}
        </Router>
        <ScrollToTop />
      </div>
    </Grid>
  );
}
