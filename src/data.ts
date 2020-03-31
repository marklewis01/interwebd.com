// logo assets
import logoFinishes from "./assets/logo-finishes.png";
import logoDD from "./assets/logo-didata.png";
import logoInterwebd from "./assets/logo-iw.png";
import logoJunglefy from "./assets/logo-junglefy.png";
import logoSimply from "./assets/logo-simply.png";
import logoPDFA from "./assets/logo-pdfa.png";
import logoDEC from "./assets/logo-nswdec.png";

// project assets

// fbStarter
import t_fbStarter_login from "/assets/projects/fbStarter/thumb_login_MDPI.png";
import t_fbStart_main from "/assets/projects/fbStarter/thumb_MDPI.png";
import t_fbStart_tablet from "/assets/projects/fbStarter/thumb_iPad.png";
import t_fbStart_mobile from "/assets/projects/fbStarter/thumb_mobile.png";
import fbStarter_login from "/assets/projects/fbStarter/login_MDPI.png";
import fbStart_main from "/assets/projects/fbStarter/MDPI.png";
import fbStart_tablet from "/assets/projects/fbStarter/iPad.png";
import fbStart_mobile from "/assets/projects/fbStarter/mobile.png";
//finishes
import finishes_main from './assets/projects/finishes/full_MDPI.png'
import t_finishes_main from './assets/projects/finishes/thumb_full_MDPI.png'
// gatsbyStarter
import t_features from "./assets/projects/gatsbyStarter/thumb_features_MDPI.png";
import t_main from "./assets/projects/gatsbyStarter/thumb_MDPI.png";
import t_mobile from "./assets/projects/gatsbyStarter/thumb_mobile.png";
import t_pricing from "./assets/projects/gatsbyStarter/thumb_pricing_MDPI.png";
import t_pricing_mobile from "./assets/projects/gatsbyStarter/thumb_pricing_mobile.png";
import features from "./assets/projects/gatsbyStarter/features_MDPI.png";
import main from "./assets/projects/gatsbyStarter/MDPI.png";
import mobile from "./assets/projects/gatsbyStarter/mobile.png";
import pricing from "./assets/projects/gatsbyStarter/pricing_MDPI.png";
import pricing_mobile from "./assets/projects/gatsbyStarter/pricing_mobile.png";

export const skills = {
  technicalSkills: {
    languages: {
      order: 0,
      label: "Languages",
      skills: [
        ["JavaScript (ES5/ES6)", ["TypeScript"]],
        "Markdown",
        "HTML5/CSS3"
      ]
    },
    infrastructure: {
      order: 3,
      label: "Infrastructure",
      skills: [
        [
          "Google Firebase",
          [
            "Cloud Firestore (NoSql)",
            "Cloud Functions",
            "Authentication",
            "Cloud Storage",
            "Hosting"
          ]
        ],
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)"
      ]
    },
    frameworks: {
      order: 2,
      label: "Frameworks / Libraries",
      skills: [
        "React",
        "React-Redux",
        ["React-Native", ["expo"]],
        "Material-UI",
        "GatsbyJS",
        "Preact",
        ["Node", ["Express"]],
        "Socket.IO"
      ]
    },
    databases: {
      order: 1,
      label: "Database",
      skills: ["MySQL", "Google Cloud Firestore (NoSql)"]
    },
    tools: {
      order: 4,
      label: "Development Tools",
      skills: ["Git", "Puppeteer", "Webpack", "CSS / SCSS"]
    }
  }
};


export const projects: IProject[] = [
         {
           label: "Interwebd",
           description:
             "This very site. I decided to showcase some of my frontend skills, as well, it presented a chance to get to try out Preact.js. Preact is a 3kB React alternative, so this site it super small in footprint.",
           keywords: ["Preact", "Material-UI"],
           codebase: "https://github.com/marklewis01/interwebd.com"
         },
         {
           label: "Finishes v3",
           description:
             "As a result of feedback and a clearer understanding of the potential customer use case, I am currently rebuilding the Finishes platform in order to migrate the database to a relational database.",
           keywords: ["MySQL", "Node", "Express", "Redux", "TypeScript"],
           web: "https://finishes.app",
           images: [
             {
               source: {
                 regular: finishes_main,
                 thumbnail: t_finishes_main
               }
             }
           ]
         },
         {
           label: "GatsbyJS Starter Site",
           description:
             "A starter template site built to get an understanding of the GatsbyJS framework. The site is responsive, utilising both JSS and SASS, and has a mix of both stateful and stateless components.",
           keywords: ["Gatsby", "JSS", "Material-UI", "SASS"],
           codebase: "https://github.com/marklewis01/simple-gatsby-site",
           web: "https://marklewis01.github.io/simple-gatsby-site",
           images: [
             {
               caption: "",
               source: {
                 regular: main,
                 thumbnail: t_main
               }
             },
             {
               caption: "",
               source: {
                 regular: mobile,
                 thumbnail: t_mobile
               }
             }
             {
        caption: '',
        source: {
          regular: features,
          thumbnail: t_features        }
             },
             {
        caption: '',
        source: {
          regular: pricing,
          thumbnail: t_pricing
        }
             },
             {
        caption: '',
        source: {
          regular: pricing_mobile,
          thumbnail: t_pricing_mobile
        }
      },
           ]
         },
         {
           label: "Firebase Starter",
           description:
             "A starter template featuring a React front-end and a Google Firebase backend. The template has authentication (using Firebase Authentication), the typical login features, and protected routes. State is managed using the lightweight Unstated.js library.",
           keywords: [
             "Authentication",
             "Unstated.js",
             "Firebase",
             "Firestore",
             "Material-UI"
           ],
           codebase: "https://github.com/marklewis01/react-materialui-starter",
           web: "https://material-ui-mobx-starter.firebaseapp.com",
           images: [
             {
               caption:
                 "Custom registration/login modal integrated with Firebase Authentication",
               source: {
                 regular: fbStarter_login,
                 thumbnail: t_fbStarter_login
               }
             },
             {
               caption: "Simple page template with LHS navigation drawer",
               source: {
                 regular: fbStart_main,
                 thumbnail: t_fbStart_main
               }
             },
             {
               caption: "Fully responsive: tablet device layout",
               source: {
                 regular: fbStart_tablet,
                 thumbnail: t_fbStart_tablet
               }
             },
             {
               caption: "Fully responsive: mobile device layout",
               source: {
                 regular: fbStart_mobile,
                 thumbnail: t_fbStart_mobile
               }
             }
           ]
         }
       ];

export const experience: IExperience[] = [
  {
    date: "Dec 2017 – Present",
    company: "Finishes",
    logo: logoFinishes,
    title: "Founder",
    url: "https://finishes.app",
    description: `Finishes is a new tool for the building industry to collaboratively find
        and select the finishes for their projects.<br />
        The platform is still under development, incorporating feedback and improvements from two previous
        closed-beta programs.`,
    highlights: [
      "v0: A complete Google Firebase-centric architecture, focused on document generation and UI",
      "v1: A rebuild and re-design of the NoSQL database schema to allow greater amounts and types of data to be saved",
      "v2: A complete rebuild: migrating to a relational database (MySQL), an API-driven transport layer (Node/Express), and rewriting the React client-side application now with Redux to accommodate the increasingly complex UI state"
    ]
  },
  {
    date: "Mar 2017 – Present",
    company: "Interweb'd",
    logo: logoInterwebd,
    title: "Director / Web Developer",
    url: "https://interwebd.com",
    description: `Getting my React and Node.js on. I'm in the process of building a few
        web applications with the hope of releasing one or two to answer real
        world business needs.`
  },
  {
    date: "Nov 2014 - Sep 2017",
    company: "Junglefy",
    logo: logoJunglefy,
    title: "Senior Estimator",
    url: "https://junglefy.com.au",
    description: `Junglefy are one of Australia's leading vertical garden and green infrastructure
          organisations. The attraction was immediate: work with a leading
          company who specialize in growing nature where it typically does not -
          our city's harsh built environment! <br />
          Not a predicable step, however I felt the need to pause my IT career
          and focus on getting more nature back into our world. <br />
          During my time at Junglefy I was able to experience most aspects of
          the business, starting by working onsite within the construction team,
          to finishing in the sales team where I became the senior estimator.`,
    highlights: [
      "Ability to quickly gain proficiency and progress in a new industry/field",
      "Understand and contribute to a new aspect of the business: sales & business development",
      "Practice and improve my communications skills, both up/down the business and also client facing"
    ]
  },
  {
    date: "Feb 2014 - Oct 2014",
    company: "Simply",
    logo: logoSimply,
    title: "Project Manager",
    description: `Simply is a web development agency located in Sydney Australia, specializing in custom BigCommerce and WordPress installations.`,
    highlights: [
      "Manage development and testing tasks, and all project deliverables",
      "Manage scope/change approvals, and maintain up-to-date project status reporting",
      "Progress/Stage Invoicing",
      "Work closely with development team (remote) to deliver project requirements",
      "Manage customisations and subsequent as-built documents",
      "Contribute to digital strategy scoping and requirements"
    ]
  },
  {
    date: "Aug 2012 - Sep 2013",
    company: "Platinum Direct Finance Aust.",
    logo: logoPDFA,
    title: "IT Consultant [Contract Role]",
    description: `Platinum Direct Finance Australia provide finance and insurance
        brokerage services for automotive and machinery purchases. This project
        resulted from the need to update existing office infrastructure for
        approximately 30 staff, as well as enhance the security and
        maintainability of the network.`,
    highlights: [
      "Initial discovery/scoping, and subsequent planning/design of new systems",
      "Selection, procurement, build and implementation of server hardware",
      "As-built documentation"
    ]
  },
  {
    date: "Mar 2010 - Jun 2012",
    company: "NSW Department of Education",
    logo: logoDEC,
    title: "Senior VMware Engineer - Contract Role (made permanent)",
    description: `The NSW Department of Education is one of the largest IT networks in the southern hemisphere. I worked in a team of four responsible for the private cloud compute infrastructure.`,
    highlights: [
      "Management of over 1000 virtual machines across 200+ physical hosts",
      "Planning and scaling of environment, including upgrade and migration works",
      "Scripted deployment of and updates to physical hosts"
    ]
  },
  {
    date: "Jun 2008 - Mar 2010",
    company: "Dimension Data",
    logo: logoDD,
    title: "Support Engineer (Microsoft Infrastructure) ",
    description: `The primary focus of this position is administering enterprise Windows/Intel environments, specialising in virtualized datacentre infrastructure. Responsible for management of client VMware environments across both V3 and V4 platforms, including design and implementation of infrastructure upgrades.`,
    highlights: [
      "Windows 7 Pilot Program – representing internal IT team for global group rollout (Australian-led)",
      "vSphere 4 Upgrade, including requirements scoping, build and migration work",
      "Being promoted from Level 1 Support team straight to the Level 3 Systems Team, through demonstrated design and initiative to work on more technical platforms."
    ]
  }
];
