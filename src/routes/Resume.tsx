import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
// import Carousel, { Modal, ModalGateway } from "react-images";

// Mui
import {
  Box,
  Grid,
  Hidden,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import {
  ChevronRight as SubArrowIcon,
  Check as StopIcon
} from "@material-ui/icons";

// Comps
import { Project } from "../components/Project";

// data
import { experience, projects, skills } from "../data";

export const Resume = ({ path }: { path: string }) => (
  <Grid className="resume">
    <Grid
      container
      justify="space-between"
      className="header"
      alignItems="center"
    >
      <Grid item xs={12} sm>
        <Typography variant="h1">Mark Lewis</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm
        container
        direction="column"
        alignItems="flex-end"
        className="contact"
      >
        <p>mark@someemail.com</p>
        <p>mark@someemail.com</p>
        <p>mark@someemail.com</p>
      </Grid>
      <Grid container>
        <Typography variant="h4" className="mini-bio">
          I get a kick out of building ideas and understanding how and why
          things work
        </Typography>
      </Grid>
    </Grid>

    <Box className="content">
      <Grid container className="section projects">
        <Grid item xs={12}>
          <h2 className="section-heading">Projects</h2>
        </Grid>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </Grid>
      <Grid container className="section skills" spacing={2}>
        <Grid item xs={12}>
          <h2 className="section-heading">Technical Proficiencies</h2>
        </Grid>
        <Hidden mdDown>
          <Grid item sm="auto" className="lhs-col" />
        </Hidden>
        {Object.values(skills.technicalSkills)
          .sort((a, b) => a.order - b.order)
          .map(category => (
            <Grid item xs={6} sm md className="category">
              <h3>{category.label}</h3>
              {category.skills ? (
                <List dense>
                  {category.skills.map(skill =>
                    Array.isArray(skill) ? (
                      <Fragment>
                        <ListItem disableGutters>{skill[0]}</ListItem>
                        <List disablePadding>
                          {Array.isArray(skill[1])
                            ? skill[1].map(s => (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center"
                                  }}
                                >
                                  <SubArrowIcon
                                    fontSize="small"
                                    color="secondary"
                                  />
                                  <ListItem disableGutters dense>
                                    {s}
                                  </ListItem>
                                </div>
                              ))
                            : null}
                        </List>
                      </Fragment>
                    ) : (
                      <ListItem disableGutters>{skill}</ListItem>
                    )
                  )}
                </List>
              ) : null}
            </Grid>
          ))}
      </Grid>
      <Grid container className="section skills" spacing={2}>
        <Grid item xs={12}>
          <h2 className="section-heading">Soft Skills</h2>
        </Grid>
        <Hidden mdDown>
          <Grid item sm="auto" className="lhs-col" />
        </Hidden>
        <Grid item xs={12} sm={4} className="category">
          <List dense>
            <ListItem disableGutters>Planning</ListItem>
            <ListItem disableGutters>Communication</ListItem>
            <ListItem disableGutters>
              Strong customer empathy and Product instincts
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container className="section experience" spacing={2}>
        <Grid item xs={12}>
          <h2 className="section-heading">Experience</h2>
        </Grid>
        {experience.map(job => (
          <Grid container className="job">
            <Grid
              item
              sm={12}
              lg="auto"
              className="lhs-col company-details"
              container
            >
              <img src={job.logo} className="logo" />
              <Grid item>
                <h3>{job.company}</h3>
                <Typography className="duration">{job.date}</Typography>
              </Grid>
            </Grid>
            <Grid item sm lg className="wrap-collapsible">
              <input
                id={`${job.company}-collapsible`}
                class="toggle"
                type="checkbox"
                checked={true}
              />
              <label for={`${job.company}-collapsible`} class="title">
                {job.title}
              </label>

              <Grid className="description">
                <Typography className="content-inner">
                  {job.description.split("<br />").map(s => (
                    <p>{s}</p>
                  ))}
                </Typography>
                {job.highlights ? (
                  <List dense>
                    {job.highlights.map(item => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <StopIcon className="bullet" color="secondary" />
                        <ListItem>{item}</ListItem>
                      </div>
                    ))}
                  </List>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Grid>
);
