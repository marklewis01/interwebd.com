import { h, Li } from "preact";
import { useState } from "preact/hooks";

// Mui
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Tooltip,
  Typography
} from "@material-ui/core";

// Assets
import junglefyImg from "../assets/projects/junglefy-hero.png";
import finishesImg from "../assets/projects/finishes-hero.png";
import finishesApp from "../assets/projects/finishes-app-v1.png";
import firebaseImg from "../assets/projects/firebase-starter-hero.png";
import gatsbyImg from "../assets/projects/gatsby-hero.png";
import interwebdImg from "../assets/projects/interwebd-hero.png";

// TS
interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image?: any;
  link: string;
  codebase?: string;
  stack?: {
    [key in StackAreas]?: string[];
  };
  type?: "website" | "web application" | "mobile app" | "template";
}
type StackAreas = "frontend" | "backend" | "elements";

export const Projects = ({ path }: { path: string }) => {
  return (
    <div>
      <Typography variant="h1">Projects</Typography>
      <Box className="content">
        <Grid container spacing={3} alignItems="stretch">
          {projects.map(project => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className="timeline--animate entry bounce-in"
            >
              <Card variant="outlined" className="project-card">
                <a
                  href={project.link}
                  target="_blank"
                  title={`Open ${project.title} in new tab`}
                >
                  <CardMedia
                    className="project-card-media"
                    image={
                      project.image ||
                      "https://source.unsplash.com/random/800x500"
                    }
                  />
                </a>
                <CardContent>
                  <Grid
                    container
                    alignItems="center"
                    className="project-title-wrapper"
                  >
                    <Typography
                      display="inline"
                      variant="h3"
                      className="project-title"
                    >
                      {project.title}
                    </Typography>
                    {project.type ? (
                      <Chip
                        label={project.type}
                        size="small"
                        color="secondary"
                        classes={{ colorSecondary: "project-type-chip" }}
                      />
                    ) : null}
                  </Grid>
                  {project.subtitle ? (
                    <Typography variant="h4" className="project-subtitle">
                      {project.subtitle}
                    </Typography>
                  ) : null}

                  <Typography
                    variant="caption"
                    component="p"
                    className="project-link"
                  >
                    <a href={project.link} target="_blank">
                      {project.link}
                    </a>
                  </Typography>

                  <Typography variant="body1">{project.description}</Typography>

                  {project.stack ? (
                    <div className="project-section-heading">
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
};

const projects: Project[] = [
  {
    title: "Finishes - Public Marketing Site",
    subtitle:
      "Custom SaaS solution for material selection in the construction industry",
    link: "https://finishes.app",
    image: finishesImg,
    description:
      "A personal project to build my first SaaS application. First version of application built with Node.js with Express, Passport.js, MongoDB, and a HTML/CSS/jQuery front-end.",
    stack: {
      elements: [
        "WordPress",
        "responsive",
        "illustrations",
        "screen captures",
        "forms"
      ]
    },
    type: "website"
  },
  {
    title: "Finishes - Application",
    subtitle:
      "Custom SaaS solution for material selection in the construction industry",
    link: "https://my.finishes.app",
    image: finishesApp,
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
    image: gatsbyImg,
    description:
      "A project to get to know server-side rendering. GatsbyJS static generated site",
    stack: {
      frontend: ["Gatsby", "JSS", "Material-UI", "SASS"],
      backend: ["ssr"]
    },
    type: "template"
  },
  {
    title: "Firebase Starter",
    subtitle:
      "A starter template with authentication, login and protected routes.",
    link: "https://material-ui-mobx-starter.firebaseapp.com",
    image: firebaseImg,
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
    subtitle: "A ",
    link: "https://junglefy.com.au",
    image: junglefyImg,
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
    description: `This very site. A portfolio site to showcase some of my skill, build with Preact.js.
      Preact is a 3kB React alternative, so this site it super small in footprint
       ...which helps make it super fast!`,
    link: "https://interwebd.com",
    image: interwebdImg,
    stack: {
      frontend: ["preact", "Material-UI"]
    },
    type: "website"
  }
];
