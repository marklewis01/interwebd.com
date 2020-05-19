import { h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

// Mui
import { Button, Grid, Icon, Paper, Typography } from "@material-ui/core";

// data
import {
  certifications,
  education,
  experience,
  projects,
  skills
} from "../data";

import ResumePDF from "../assets/cv.pdf";

// Constants
const pageHeightInPx = 1122;
const innerPageHeight = pageHeightInPx - 90; // 2.3cm = ~87px
const compOrder: ResumeComponents[] = [
  "headerIntro",
  "projects",
  "techStacks",
  "experience"
];

export default ({ path }: { path: string }) => {
  const [heights, setHeights] = useState<Partial<Heights>>({});
  const [totalPages, setTotalPages] = useState(1);

  const getHeight = (comp: ResumeComponents, px: number) => {
    setHeights((prevState: Partial<Heights>) => {
      return {
        ...prevState,
        [comp]: px
      };
    });
  };

  const pixelsAbove = (nextComponent: ResumeComponents) => {
    // add up preceding component height and subtract from innerPage height
    const renderedComps = compOrder.slice(0, compOrder.indexOf(nextComponent));

    // sum height of renderedComps
    let height = 0;
    for (const c of renderedComps) {
      height = height + heights[c];
    }

    console.log({
      nextComponent,
      renderedComps,
      innerPageHeight,
      height
    });

    return height;
  };

  useEffect(() => {
    let totalHeights = 0;

    for (let comp in heights) {
      // tslint:disable-next-line
      totalHeights += heights[comp];
    }

    setTotalPages(Math.ceil(totalHeights / innerPageHeight));
  }, [heights]);

  console.log({ heights, totalPages });

  return (
    <Grid container className="resume">
      <Grid container justify="flex-end" className="download-wrapper">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Icon>get_app</Icon>}
          href={ResumePDF}
          target="_blank"
          style={{ color: "white" }}
        >
          Download Resume
        </Button>
      </Grid>
      <Paper className="page">
        <HeaderIntro getHeight={getHeight} />
        <PageBreak
          pxAbove={pixelsAbove("projects")}
          nextCompHeight={heights["projects"]}
        />
        <Grid item container spacing={2}>
          <Grid item xs={12} md className="lhs-col">
            <Grid container direction="column">
              <Projects getHeight={getHeight} />
              <PageBreak
                pxAbove={pixelsAbove("techStacks")}
                nextCompHeight={heights["techStacks"]}
              />
              <TechStacks getHeight={getHeight} />
              <PageBreak
                pxAbove={pixelsAbove("experience")}
                nextCompHeight={heights["experience"]}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md="auto" className="rhs-col">
            <Grid container direction="column">
              <PersonalInfo />
              <Education />
              <Certifications />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className="page">
        <Grid item container spacing={2}>
          <Grid item xs={12} md className="lhs-col">
            <Grid container direction="column">
              <Experience getHeight={getHeight} />
            </Grid>
          </Grid>
          <Grid item xs={12} md="auto" className="rhs-col">
            <Grid container direction="column">
              <Skills />
              <Interests />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const PageBreak = ({
  pxAbove,
  nextCompHeight
}: {
  pxAbove: number;
  nextCompHeight: number;
}) => {
  const pageHeightInPx = 1122;
  const innerPageHeight = pageHeightInPx - 87; // 2.3cm = ~87px

  return innerPageHeight - pxAbove - nextCompHeight < 0 ? (
    <div
      className="page-break"
      style={{ height: innerPageHeight - pxAbove }}
    ></div>
  ) : null;
};

const HeaderIntro = ({ getHeight }: { getHeight: GetHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    getHeight("headerIntro", ref.current.clientHeight);
  }, []);

  return (
    <Grid container direction="column" className="header" ref={ref}>
      <Typography variant="h1">Mark Lewis</Typography>
      <Typography variant="h2">JavaScript Developer</Typography>
      <Typography>
        I'm happiest when building. Currently enjoying anything Node, React or
        React Native, whilst utilising TypeScript to produce better code!{" "}
      </Typography>
    </Grid>
  );
};

const Experience = ({ getHeight }: { getHeight: GetHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    getHeight("experience", ref.current.clientHeight);
  }, []);

  return (
    <Grid item container className="experience" direction="column" ref={ref}>
      <Typography variant="h3">Experience</Typography>
      {experience
        .filter((a) => a.includeInResume)
        .map((role) => (
          <Grid container className="job">
            <Grid item xs className="left-column">
              <Typography className="date">{role.date}</Typography>
            </Grid>
            <Grid item xs className="job-details">
              <Grid className="title">
                <Typography className="role" display="inline">
                  {role.title}
                </Typography>
                <Typography className="leftDivider subtitle" display="inline">
                  {role.company}
                </Typography>
              </Grid>
              <Typography>{role.description}</Typography>
              {role.highlights ? (
                <ul>
                  {role.highlights.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

const Projects = ({ getHeight }: { getHeight: GetHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    getHeight("projects", ref.current.clientHeight);
  }, []);

  return (
    <Grid item container className="projects" direction="column" ref={ref}>
      <Typography variant="h3">Recent Projects</Typography>
      {projects
        .filter((a) => a.includeInResume)
        .map((p) => (
          <Grid container className="project">
            <Grid item xs className="left-column">
              <Typography className="date">{p.date}</Typography>
            </Grid>
            <Grid item xs className="project-details">
              <Grid className="title">
                <Typography className="role" display="inline">
                  {p.label}
                </Typography>
                {p.web || p.codebase ? (
                  <Typography
                    className="leftDivider subtitle link"
                    display="inline"
                  >
                    {p.web ? p.web : p.codebase ? p.codebase : ""}
                  </Typography>
                ) : null}
              </Grid>
              <Typography className="project-text">
                {p.shortDescription !== undefined
                  ? p.shortDescription
                  : p.description
                  ? p.description
                  : ""}
              </Typography>
              {p.keywords
                ? p.keywords.map((w, idx) => (
                    <Fragment>
                      <Typography className="skill" display="inline">
                        {w}
                        {idx !== p.keywords.length - 1 && " • "}
                      </Typography>
                    </Fragment>
                  ))
                : null}
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

type Skill = (string | (string | string[])[])[];

function stringifySkills(skills: Skill) {
  const text = [];
  for (const skill of skills) {
    if (Array.isArray(skill)) {
      text.push(skill[0]);
    } else {
      text.push(skill);
    }
  }
  return text;
}

const TechStacks = ({ getHeight }: { getHeight: GetHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    getHeight("techStacks", ref.current.clientHeight);
  }, []);

  return (
    <Grid item container direction="column" ref={ref}>
      <Typography variant="h3">Technical Proficiencies</Typography>
      <Grid container spacing={1}>
        {Object.values(skills.technicalSkills)
          .sort((a, b) => a.order - b.order)
          .map((category) => (
            <Grid item xs>
              <Typography className="skill-category">
                {category.label.split(" ").pop()}:{" "}
              </Typography>
              {stringifySkills(category.skills).map((skill) => (
                <Typography className="skill">{skill}</Typography>
              ))}
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

const Education = () => (
  <Grid item container direction="column">
    <Typography variant="h3">Education</Typography>

    {education.map((s) => (
      <Grid container direction="column">
        <Typography className="field" display="block">
          {s.year}
        </Typography>
        <Typography display="block">
          {s.name} {s.honors ? " - " + s.honors : ""}
        </Typography>
        <Typography className="subtitle value" display="block">
          {s.school}
        </Typography>
      </Grid>
    ))}
  </Grid>
);

const Certifications = () => (
  <Grid item container direction="column">
    <Typography variant="h3">Certifications</Typography>

    {certifications.map((s) => (
      <Grid container direction="column">
        <Typography className="field" display="block">
          {s.year}
        </Typography>
        <Typography className="value">{s.name}</Typography>
      </Grid>
    ))}
  </Grid>
);

const PersonalInfo = () => (
  <Grid item container direction="column">
    <Typography variant="h3">Personal Info</Typography>
    {[
      ["Address", "Sydney, NSW Australia"],
      ["Phone", "+61 417 446 739"],
      ["Email", "marklewis01@hotmail.com"],
      ["LinkedIn", "linkedin.com/in/marklewis01"],
      ["Github", "github.com/marklewis01"]
    ].map((item) => (
      <Fragment>
        <Typography className="field">{item[0]}</Typography>
        <Typography className="value">{item[1]}</Typography>
      </Fragment>
    ))}
  </Grid>
);

const Skills = () => (
  <Grid item>
    <Typography variant="h3">Skills</Typography>
    {[
      "Problem Solving",
      "Accountability",
      "Communication",
      "Process Optimization",
      "Empathy"
    ].map((i) => (
      <Typography className="value">{i}</Typography>
    ))}
  </Grid>
);

const Interests = () => (
  <Grid item container direction="column">
    <Typography variant="h3">Interests</Typography>
    {[
      "Business ideas & strategy",
      "Personal fitness and wellbeing",
      "Tinkering and building to understand things"
    ].map((item) => (
      <Typography className="value">{item}</Typography>
    ))}
  </Grid>
);

const Page = ({ comps }: { comps: preact.Component[] }) => (
  <Paper className="page">{comps.map((c) => c)}</Paper>
);

interface Heights {
  headerIntro: number;
  experience: number;
  projects: number;
  techStacks: number;
}

type ResumeComponents = keyof Heights;
type GetHeight = (comp: ResumeComp, px: number) => void;
