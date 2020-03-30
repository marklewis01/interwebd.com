import { h, Fragment } from "preact";
import { useState } from "preact/hooks";

// Mui
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Modal,
  TextField,
  Typography
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

// Icons
import CodeIcon from "@material-ui/icons/Code";
import LanguageIcon from "@material-ui/icons/Language";

// Assets
// import junglefyImg from "../assets/projects/junglefy-hero.png";
// import finishesImg from "../assets/projects/finishes-hero.png";
// import finishesApp from "../assets/projects/finishes-app-v1.png";
// import firebaseImg from "../assets/projects/firebase-starter-hero.png";
// import gatsbyImg from "../assets/projects/gatsby-hero.png";
// import interwebdImg from "../assets/projects/interwebd-hero.png";

// Styles
import {useTheme } from '@material-ui/core/styles'

// Image Carousel
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
const AutoPlaySwipeableViews =  autoPlay(SwipeableViews);

let stackTech = [
  "Auth",
  "Customized Theme",
  "Firebase",
  "Firestore",
  "Gatsby",
  "JSS",
  "Material-UI",
  "Node",
  "Preact",
  "React",
  "React-Router",
  "Redux",
  "SASS",
  "Storage",
  "TypeScript",
  "Unstated.js",
  "WordPress"
] as const;

// TS
interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  link: {
    codebase?: string;
    web?: string;
  };
  codebase?: string;
  stack?: {
    [key in StackAreas]?: StackTech[];
  };
  images?: {
    label: string;
    imgPath: string;
  }[]
  thumbImage?: any;
  type?: "website" | "web application" | "mobile app" | "template";
}
type StackAreas = "frontend" | "backend" | "elements";
type StackTech = typeof stackTech[number];

export const Projects = ({ path }: { path: string }) => {
  const theme = useTheme();
  const [filters, setFilters] = useState<string[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false)
  

  const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  
  const handleChangeFilters = (
    event: React.ChangeEvent<{}>,
    value: string | string[]
  ) => {
    if (typeof value === "string") {
      if (filters.includes(value)) {
        // remove from filters
        setFilters((prevState: string[]) => {
          return prevState.filter( tech => tech !== value)
        })
      } else {
        // add to filters
        setFilters((prevState: string[]) => {
          return prevState.concat(value);
      }
      });
    } else {
      setFilters(value);
    }
  };

  return (
    <Fragment>
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item xs={12} sm={6} lg>
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Autocomplete
            multiple={true}
            id="tech-filters"
            onChange={handleChangeFilters}
            options={stackTech}
            disableCloseOnSelect
            size="small"
            style={{ marginTop: 8, width: "100%" }}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Filter projects by technology"
              />
            )}
            value={filters}
          />
        </Grid>
      </Grid>
      <Box className="content">
        <Grid container spacing={3} alignItems="stretch">
          {projects
            .filter(project => {
              if (filters.length === 0) {
                return project;
              }
              for (const tech of filters) {
                for (const area in project.stack) {
                  if (project.stack[area].includes(tech)) {
                    return project;
                  }
                }
              }
            })
            .map(p => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  xl={4}
                  className="timeline--animate entry bounce-in"
                >
                  <Card className="project-card" >
                    <CardMedia
                      className={p.images ? "project-card-media project-card-media-more" : "project-card-media"}
                      image={
                        p.thumbImage
                      }                      
                      onClick={p.images ? () => setProject(p) : undefined}
                    />

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
                        {p.title}
                      </Typography>
                      {p.type ? (
                        <Chip
                          label={p.type}
                          size="small"
                          color="secondary"
                          classes={{ colorSecondary: "project-type-chip" }}
                        />
                      ) : null}
                    </Grid>
                    <CardContent className="project-card-content">
                      {p.subtitle ? (
                        <Grid container className="project-card-section">
                        <Typography variant="h4">
                          {p.subtitle}
                        </Typography>
                        </Grid>
                      ) : null}

                      <Grid container className="project-card-section">
                        {p.link.web ? (
                          <Grid item xs="auto" className="project-link">
                            <Grid container alignItems="center">
                              <LanguageIcon className="project-link-icon" />
                              <Typography
                                display="inline"
                                variant="caption"
                                component="p"
                                
                              >
                                <a href={p.link.web} target="_blank">
                                  Live Site
                                </a>
                              </Typography>
                            </Grid>
                          </Grid>
                        ) : null}
                        {p.link.codebase ? (
                          <Grid item xs="auto">
                            <Grid container alignItems="center">
                              <CodeIcon className="project-link-icon" />
                              <Typography
                                display="inline"
                                variant="caption"
                                component="p"
                                className="project-link"
                              >
                                <a href={p.link.codebase} target="_blank">
                                  Codebase
                                </a>
                              </Typography>
                            </Grid>
                          </Grid>
                        ) : null}
                      </Grid>

                      <Grid container className="project-card-section">
                      <Typography
                        variant="body1"
                        className="project-description"
                      >
                        {p.description}
                      </Typography>

                      </Grid>

                      {p.stack ? (
                        <Grid container className="project-section-heading">
                          {Object.keys(p.stack).map((key: StackAreas, idx) =>
                            p.stack[key].length ? (
                              <Grid key={idx} item xs={12} sm>
                                <Typography
                                  variant="body2"
                                  className="stack-area"
                                >
                                  {key}:
                                </Typography>
                                {p.stack[key]
                                  .sort((a, b) =>
                                    a
                                      .toLowerCase()
                                      .localeCompare(b.toLowerCase())
                                  )
                                  .map((tech, idx) => (
                                    <Chip
                                      key={idx}
                                      size="small"
                                      variant={
                                        filters.includes(tech)
                                          ? "default"
                                          : "outlined"
                                      }
                                      clickable
                                      onClick={e => handleChangeFilters(e, tech)}
                                      label={tech
                                        .replace(" ", "-")
                                        .toLowerCase()}
                                      className={filters.includes(tech) ? "stack-area-chip selected" : "stack-area-chip"}
                                      color={
                                        filters.includes(tech)
                                          ? "secondary"
                                          : undefined
                                      }
                                      title={filters.includes(tech) ? `Remove ${tech} from filter` : `Filter projects by ${tech}`}
                                    />
                                  ))}
                              </Grid>
                            ) : null
                          )}
                        </Grid>
                      ) : null}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
      { project && project.images ? (
        <Modal
          // aria-labelledby="simple-modal-title"
          // aria-describedby="simple-modal-description"
          open={Boolean(project )}
          onClose={() => setProject(null)}
          className="project-modal-root"
        >
          <div className="project-modal">
            <Button size="small" className="project-modal-close" onClick={() => setProject(null)}>Close</Button>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <div className="project-modal-contents" onMouseEnter={() => setPauseAutoPlay(true)} onMouseLeave={() => setPauseAutoPlay(false)}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {project.images.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img className="project-carousel-img" src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} style={{padding: 12}}>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              </Grid>
            </Grid>
          </div>
        </Modal>
      ) : null}
    </Fragment>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Interwebd",
    subtitle: "Getting to know PreactJS. This very site you're on!",
    description: `A portfolio site to showcase some of my skills and a chance to get to know Preact.js.
      Preact is a 3kB React alternative, so this site it super small in footprint
       ...which helps make it super fast!`,
    link: {
      codebase: "https://github.com/marklewis01/interwebd.com",
      web: "https://interwebd.com"
    },
    images: [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
          'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bird',
        imgPath:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bali, Indonesia',
        imgPath:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
          'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Goč, Serbia',
        imgPath:
          'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    stack: {
      frontend: ["Preact", "Material-UI", "TypeScript"]
    },
    // thumbImage: interwebdImg,
    type: "website"
  },
  {
    id: 2,
    title: "Finishes",
    subtitle: "Customised WordPress site using the Divi theme-builder",
    link: {
      web: "https://finishes.app"
    },
    // thumbImage: finishesImg,
    description:
      "A personal project to build my first SaaS application. First version of application built with Node.js with Express, Passport.js, MongoDB, and a HTML/CSS/jQuery front-end.",
    stack: {
      elements: ["WordPress"]
    },
    type: "website"
  },
  {
    id: 3, 
    title: "Finishes - Platform",
    subtitle:
      "A custom SaaS solution for material selection in the construction industry",
    link: {
      web: "https://my.finishes.app"
    },
    // thumbImage: finishesApp,
    description:
      "A personal project to build my first SaaS application. First version of application built with Node.js with Express, Passport.js, MongoDB, and a HTML/CSS/jQuery front-end.",
    stack: {
      frontend: [
        "React",
        "Redux",
        "React-Router",
        "Material-UI",
        // "Styled-Components",
        "TypeScript"
      ],
      backend: [
        "Firebase",
        "Auth",
        "Firestore",
        "Storage",
        "TypeScript",
        "Node"
      ]
    },
    type: "web application"
  },
  {
    id: 4,
    title: "Simple GatsbyJS Website",
    subtitle: "Getting to know GatsbyJS and Server-side-rendering",
    link: {
      codebase: "https://github.com/marklewis01/simple-gatsby-site",
      web: "https://marklewis01.github.io/simple-gatsby-site"
    },
    // thumbImage: gatsbyImg,
    description:
      "Getting to know server-side rendering. GatsbyJS static generated site",
    stack: {
      frontend: ["Gatsby", "JSS", "Material-UI", "SASS"]
    },
    type: "template"
  },
  {
    id: 5,
    title: "Firebase Starter",
    subtitle:
      "A starter template with authentication, protected routes, and some local state management.",
    link: {
      codebase: "https://github.com/marklewis01/react-materialui-starter",
      web: "https://material-ui-mobx-starter.firebaseapp.com"
    },
    // thumbImage: firebaseImg,
    description:
      "A starter template with authentication, login and protected routes.",
    stack: {
      frontend: ["Unstated.js", "Material-UI"],
      backend: ["Firebase", "Auth", "Firestore"]
    },
    type: "template"
  },
  {
    id: 6,
    title: "Junglefy Pty Ltd",
    subtitle: "A customized WordPress site",
    link: {
      web: "https://junglefy.com.au"
    },
    // thumbImage: junglefyImg,
    description:
      "Based on Client-supplied UI designs and graphics, I configured an off-the-shelf WordPress theme to the Client's specification.",
    stack: {
      elements: ["WordPress", "Customized Theme"]
    },
    type: "website"
  }
];
