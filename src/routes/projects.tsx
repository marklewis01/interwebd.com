import { h } from "preact";

// Mui
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography
} from "@material-ui/core";

// TS
interface Project {
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  codebase?: string;
  stack?: {
    [key in StackAreas]?: string[];
  };
  type?: "website" | "web application" | "mobile app" | "template";
}
type StackAreas = "frontend" | "backend" | "other";

export const Projects = ({ path }: { path: string }) => (
  <div>
    <Typography variant="h1">Projects</Typography>
    <Box className="content">
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardMedia
                className="project-card-media"
                image="https://source.unsplash.com/random/800x500"
              />
              <CardContent>
                <Grid container alignItems="center" className="project-title">
                  <Typography display="inline" variant="h3">
                    {project.title}
                  </Typography>
                  {project.type ? (
                    <Chip
                      label={project.type}
                      size="small"
                      color="secondary"
                      className="project-type-chip"
                    />
                  ) : null}
                </Grid>
                {project.subtitle ? (
                  <Typography gutterBottom variant="h4">
                    {project.subtitle}
                  </Typography>
                ) : null}

                <Typography variant="caption">
                  <a href={project.link} target="_blank">
                    {project.link}
                  </a>
                </Typography>

                <Typography variant="body1">{project.description}</Typography>

                {project.stack ? (
                  <div>
                    <Typography variant="h5">Stack & Key Tech:</Typography>
                    {Object.keys(project.stack).map((key: StackAreas, idx) =>
                      project.stack[key].length ? (
                        <div>
                          <Typography variant="body2" className="stack-area">
                            {key}:
                          </Typography>
                          {project.stack[key].map((tech, idx) => (
                            <Chip
                              key={idx}
                              size="small"
                              variant="outlined"
                              label={tech.replace(" ", "-").toLowerCase()}
                              className="stack-area-chip"
                            />
                          ))}
                        </div>
                      ) : null
                    )}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
);

const projects: Project[] = [
  {
    title: "Finishes",
    subtitle:
      "Custom SaaS solution for material selection in the construction industry",
    link: "https://finishes.app",
    description:
      "A personal project to build my first SaaS application. First version of application built with Node.js with Express, Passport.js, MongoDB, and a HTML/CSS/jQuery front-end.",
    stack: {
      frontend: [
        "react",
        "redux",
        "react-router",
        "Material-UI",
        "Styled-Components"
      ],
      backend: [
        "Firebase",
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Storage",
        "Firebase Hosting"
      ]
    },
    type: "web application"
  },
  {
    title: "Simple GatsbyJS Website",
    link: "https://marklewis01.github.io/simple-gatsby-site",
    description:
      "A project to get to know server-side rendering. GatsbyJS static generated site",
    stack: {
      frontend: ["Gatsby", "JSS", "SASS"],
      backend: ["ssr"]
    },
    type: "template"
  },
  {
    title: "Firebase Starter",
    subtitle:
      "A starter template with authentication, login and protected routes.",
    link: "https://material-ui-mobx-starter.firebaseapp.com",
    description:
      "A starter template with authentication, login and protected routes.",
    stack: {
      frontend: ["Unstated.js", "Material-UI"],
      backend: [
        "Firebase",
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Hosting"
      ]
    },
    type: "template"
  },
  {
    title: "Junglefy Pty Ltd",
    subtitle:
      "A starter template with authentication, login and protected routes.",
    link: "https://junglefy.com.au",
    description:
      "A starter template with authentication, login and protected routes.",
    stack: {
      frontend: ["Unstated.js", "Material-UI"],
      backend: ["WordPress", "Customized Theme"]
    },
    type: "website"
  },
  {
    title: "Interwebd",
    description:
      "This very site. A portfolio site to showcase some of my skills.",
    link: "https://interwebd.com",
    type: "website"
  }
];
