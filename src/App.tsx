import { h } from "preact";
import { Router } from "preact-router";

// Mui
import { Grid, Typography } from "@material-ui/core";

// custom comps
import { Nav } from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";

// routes/pages
import { About, Resume, Projects } from "./routes";

// styles
import "./styles.scss";

const Home = () => <Typography variant="h2">Home Page</Typography>;
const Error = () => <h3>Error</h3>;

export default function App() {
  return (
    <Grid container>
      <Nav />
      <div className="main">
        <Router>
          <Home path="/" />
          <Resume path="resume" />
          <Projects path="projects" />
          <About path="about" />
          <Error default />
        </Router>
        <ScrollToTop />
      </div>
    </Grid>
  );
}
