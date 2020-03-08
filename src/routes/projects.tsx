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
                <CardContent className="project-card-content">
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

                  <Typography variant="body1" className="project-description">
                    {project.description}
                  </Typography>

                  {project.stack ? (
                    <Grid container className="project-section-heading">
                      {Object.keys(project.stack).map((key: StackAreas, idx) =>
                        project.stack[key].length ? (
                          <Grid item xs={12} sm>
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
                          </Grid>
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
    title: "Interwebd",
    subtitle: "This very site you're on right now!",
    description: `A portfolio site to showcase some of my skills and a chance to get to know Preact.js.
      Preact is a 3kB React alternative, so this site it super small in footprint
       ...which helps make it super fast!`,
    link: "https://interwebd.com",
    image: interwebdImg,
    stack: {
      frontend: ["preact", "Material-UI", "TypeScript"]
    },
    type: "website"
  },
  {
    title: "Finishes - Public Marketing Site",
    subtitle: "Customised WordPress site using the Divi theme-builder",
    link: "https://finishes.app",
    image: finishesImg,
    description:
      "A personal project to build my first SaaS application. First version of application built with Node.js with Express, Passport.js, MongoDB, and a HTML/CSS/jQuery front-end.",
    stack: {
      elements: [
        "WordPress",
        "responsive",
        "divi",
        "css",
        "forms",
        "illustrations"
      ]
    },
    type: "website"
  },
  {
    title: "Finishes - Application",
    subtitle:
      "A custom SaaS solution for material selection in the construction industry",
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
        // "Styled-Components",
        "TypeScript"
      ],
      backend: [
        "Firebase",
        "Authentication",
        "Firestore",
        "Storage",
        "Typescript",
        "Node"
      ]
    },
    type: "web application"
  },
  {
    title: "Simple GatsbyJS Website",
    subtitle: "Getting to know GatsbyJS and Server-side-rendering"
    link: "https://marklewis01.github.io/simple-gatsby-site",
    image: gatsbyImg,
    description:
      "Getting to know server-side rendering. GatsbyJS static generated site",
    stack: {
      frontend: ["Gatsby", "JSS", "Material-UI", "SASS"]
    },
    type: "template"
  },
  {
    title: "Firebase Starter",
    subtitle:
      "A starter template with authentication, protected routes, and some local state management.",
    link: "https://material-ui-mobx-starter.firebaseapp.com",
    image: firebaseImg,
    description:
      "A starter template with authentication, login and protected routes.",
    stack: {
      frontend: ["Unstated.js", "Material-UI"],
      backend: ["Firebase", "Authentication", "Firestore"]
    },
    type: "template"
  },
  {
    title: "Junglefy Pty Ltd",
    subtitle: "A customized WordPress site",
    link: "https://junglefy.com.au",
    image: junglefyImg,
    description:
      "Based on Client-supplied UI designs and graphics, I configured an off-the-shelf WordPress theme to the Client's specification.",
    stack: {
      elements: ["WordPress", "Customized Theme"]
    },
    type: "website"
  }
];
