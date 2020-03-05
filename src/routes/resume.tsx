import { h } from "preact";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

// Mui
import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import Check from "@material-ui/icons/Check";

// logos
import logoDD from "../assets/logo-didata.png";
import logoFinishes from "../assets/logo-finishes.png";
import logoInterwebd from "../assets/logo-iw.png";
import logoJunglefy from "../assets/logo-junglefy.png";
import logoSimply from "../assets/logo-simply.png";
import logoPDFA from "../assets/logo-pdfa.png";
import logoDEC from "../assets/logo-nswdec.png";

export const Resume = ({ path }: { path: string }) => (
  <div>
    <Typography variant="h1">Resume</Typography>
    <Box className="content">
      <Timeline lineColor={"#ffc400"}>
        {timelineItems.map((item, idx) => (
          <TimelineItem key={idx} dateText={item.date}>
            <Card className="card" variant="outlined">
              <Grid
                container
                alignItems="center"
                className="timeline-item-heading-wrapper"
              >
                {item.logo ? (
                  <Grid item xs="auto">
                    <img src={item.logo} className="timeline-item-logo" />
                  </Grid>
                ) : null}
                <Grid item xs className="timeline-item-heading">
                  <Typography variant="h3">{item.heading}</Typography>
                  <Typography variant="h4">{item.subheading}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Typography variant="body1">{item.description}</Typography>
                {item.duties ? (
                  <Grid container>
                    <Typography variant="h5">
                      Key Duties / Responsibilities:
                    </Typography>
                    <List dense>
                      {item.duties.map((duty, idx) => (
                        <ListItem
                          key={idx}
                          disableGutters
                          className="timeline-item-duties"
                        >
                          <ListItemIcon>
                            <Check />
                          </ListItemIcon>
                          <ListItemText>{duty}</ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                ) : null}
              </Grid>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  </div>
);

const timelineItems: {
  date: string;
  heading: string;
  subheading?: string;
  logo?: any;
  description: JSX.Element;
  duties?: string[];
  projects?: {
    image: any;
    link: string;
  };
}[] = [
  {
    date: "Dec 2017 – Present",
    heading: `Finishes`,
    subheading: "Founder",
    logo: logoFinishes,
    description: (
      <p>
        Finishes enables architects, interior designers and building
        professionals to collaborate and select the finishes for their projects,
        and generate industry-standard schedules and documents quickly and
        accurately.
      </p>
    ),
    projects: {
      image: logoFinishes,
      link: "some-link"
    }
  },
  {
    date: "Mar 2017 – Present",
    heading: `Interweb'd`,
    subheading: "Director / Web Developer",
    logo: logoInterwebd,
    description: (
      <p>
        Getting my React and Node.js on. I'm in the process of building a few
        web applications with the hope of releasing one or two to answer real
        world business needs.
      </p>
    )
  },
  {
    date: "Nov 2014 - Sep 2017",
    heading: `Junglefy`,
    subheading: "Senior Estimator",
    logo: logoJunglefy,
    duties: [
      "Scoping and evaluation of project proposals, with feedback to Sales and Management team",
      "Analysis of all design/plan/tender documentation, to ensure accurate and comprehensive tender submissions",
      "Ensure high quality submissions and costings across all commercial construction projects",
      "Project handovers to construction teams"
    ],
    description: (
      <div>
        <p>
          Not a predicable step, however I felt the need to pause my IT career
          and focus on getting more nature back into our world. Junglefy are one
          of Australia's leading vertical garden and green infrastructure
          organisations. The attraction was immediate: work with a leading
          company who specialize in growing nature where it typically does not -
          our city's harsh built environment!
        </p>
        <p>
          During my time at Junglefy I was able to experience most aspects of
          the business, starting by working onsite within the construction team,
          to finishing in the sales team where I became a senior estimator.
        </p>
      </div>
    )
  },
  {
    date: "Feb 2014 - Oct 2014",
    heading: `Simply`,
    subheading: "Project Manager",
    logo: logoSimply,
    description: (
      <div>
        <p>
          Simply is a web development agency located in Sydney Australia,
          specializing in custom BigCommerce and WordPress installations.
        </p>
      </div>
    ),
    duties: [
      "Manage development and testing tasks, and all project deliverables",
      "Manage scope/change approvals, and maintain up-to-date project status reporting",
      "Progress/Stage Invoicing",
      "Work closely with development team (remote) to deliver project requirements",
      "Manage customisations and subsequent as-built documents",
      "Contribute to digital strategy scoping and requirements"
    ]
  },
  {
    date: "Aug 2010 - Sep 2013",
    heading: `Platinum Direct Finance Australia`,
    subheading: "IT Consultant [Contract Role]",
    logo: logoPDFA,
    description: (
      <p>
        Platinum Direct Finance Australia provide finance and insurance
        brokerage services for automotive and machinery purchases. This project
        resulted from the need to update existing office infrastructure for
        approximately 30 staff, as well as enhance the security and
        maintainability of the network.
      </p>
    ),
    duties: [
      "Initial discovery/scoping, and subsequent planning/design of new systems",
      "Selection, procurement, build and implementation of server hardware",
      "As-built documentation"
    ]
  },
  {
    date: "Mar 2010 - Jun 2012",
    heading: `NSW Department of Education`,
    subheading: "Senior VMware Engineer - Contract Role (made permanent)",
    logo: logoDEC,
    description: (
      <p>
        The NSW Department of Education has one of the largest IT
        infrastructures in the southern hemisphere. I worked in a team of four
        responsible for the scaling, provisioning and management of the
        Department's private cloud compute infrastructure. The environment
        consisted of over 200 physical blade servers and provided in excess of
        1000 virtual servers to the directorate.
      </p>
    ),
    duties: [
      "Planning and support of environment, including upgrade and migration works as required",
      "Scripted deployment of and updates to physical hosts (basic VB scripts)"
    ]
  },
  {
    date: "Jun 2008 - Mar 2010",
    heading: `Dimension Data`,
    subheading: "Support Engineer (Microsoft Infrastructure) ",
    logo: logoDD,
    description: (
      <p>
        The primary focus of this position is administering enterprise
        Windows/Intel environments, specialising in virtualized datacentre
        infrastructure. Responsible for management of client VMware environments
        across both V3 and V4 platforms, including design and implementation of
        infrastructure upgrades.
      </p>
    ),
    duties: [
      "Windows 7 Pilot Program – representing internal IT team for global group rollout (Australian-led)",
      "vSphere 4 Upgrade, including requirements scoping, build and migration work",
      "Initially started on help desk (Level 1 Support), however was promoted to the Systems Team (Level 3 Support) due to desire and initiative to work on more technical platforms."
    ]
  }
];
