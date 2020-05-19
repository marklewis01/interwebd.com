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
import t_fbStarter_login from "./assets/projects/fbStarter/thumb_login_MDPI.png";
import t_fbStart_main from "./assets/projects/fbStarter/thumb_MDPI.png";
import t_fbStart_tablet from "./assets/projects/fbStarter/thumb_iPad.png";
import t_fbStart_mobile from "./assets/projects/fbStarter/thumb_mobile.png";
import fbStarter_login from "./assets/projects/fbStarter/login_MDPI.png";
import fbStart_main from "./assets/projects/fbStarter/MDPI.png";
import fbStart_tablet from "./assets/projects/fbStarter/iPad.png";
import fbStart_mobile from "./assets/projects/fbStarter/mobile.png";
//finishes
import finishes_main from "./assets/projects/finishes/full_MDPI.png";
import t_finishes_main from "./assets/projects/finishes/thumb_full_MDPI.png";
// gatsbyStarter
import t_gatsby_features from "./assets/projects/gatsbyStarter/thumb_features_MDPI.png";
import t_gatsby_main from "./assets/projects/gatsbyStarter/thumb_MDPI.png";
import t_gatsby_mobile from "./assets/projects/gatsbyStarter/thumb_mobile.png";
import t_gatsby_pricing from "./assets/projects/gatsbyStarter/thumb_pricing_MDPI.png";
import t_gatsby_pricing_mobile from "./assets/projects/gatsbyStarter/thumb_pricing_mobile.png";
import gatsby_features from "./assets/projects/gatsbyStarter/features_MDPI.png";
import gatsby_main from "./assets/projects/gatsbyStarter/MDPI.png";
import gatsby_mobile from "./assets/projects/gatsbyStarter/mobile.png";
import gatsby_pricing from "./assets/projects/gatsbyStarter/pricing_MDPI.png";
import gatsby_pricing_mobile from "./assets/projects/gatsbyStarter/pricing_mobile.png";
// Junglefy
import t_junglefy_contact from "./assets/projects/junglefy/thumb_contact_mobile.png";
import t_junglefy_news from "./assets/projects/junglefy/thumb_news_MDPI.png";
import t_junglefy_project from "./assets/projects/junglefy/thumb_project_tablet.png";
import t_junglefy_projects from "./assets/projects/junglefy/thumb_projects_MDPI.png";
import junglefy_contact from "./assets/projects/junglefy/contact_mobile.png";
import junglefy_news from "./assets/projects/junglefy/news_MDPI.png";
import junglefy_project from "./assets/projects/junglefy/project_tablet.png";
import junglefy_projects from "./assets/projects/junglefy/projects_MDPI.png";

export const skills = {
  technicalSkills: {
    languages: {
      order: 0,
      label: "Languages",
      skills: [
        "JavaScript (ES5/6)",
        "TypeScript",
        "Markdown",
        "HTML",
        "CSS / SCSS"
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
        "AWS CodeDeploy, CodePipeline, ElasticBeanstalk",
        "GCP Compute Engine"
      ]
    },
    frameworks: {
      order: 2,
      label: "Frameworks / Libraries",
      skills: [
        "React",
        ["React-Native", ["expo"]],
        "React-Redux",
        ["Node", ["Express"]],
        "Socket.io",
        "Preact / GatsbyJS"
      ]
    },
    databases: {
      order: 1,
      label: "Database",
      skills: ["MySQL", "SQLite", "Google Cloud Firestore (NoSql)"]
    },
    tools: {
      order: 4,
      label: "Development Tools",
      skills: ["Git", "Webpack", "Puppeteer"]
    }
  }
};

export const projects: IProject[] = [
  {
    label: "Time-Lapse mobile app",
    description: `Take photos (with overlays), store in a project, and compare progress in a slider. A React Native app to explore APIs and the Expo framework.`,
    keywords: [
      "React Native",
      "Expo.io",
      "SQLite",
      "TypeScript",
      "React-Native-Paper"
    ],
    codebase: "https://github.com/marklewis01/time-lapse",
    date: 2020,
    includeInResume: true
  },
  {
    label: "interwebd.com",
    description:
      "This portfolio site to demonstrate some of my frontend skills, whilst also a chance to explore Preact.js, a 3kB React alternative.",
    keywords: [
      "Preact",
      "Continual Deployment: Github -> ZEIT",
      "SCSS",
      "Material-UI"
    ],
    codebase: "https://github.com/marklewis01/interwebd.com",
    date: 2020,
    includeInResume: true
  },
  {
    label: "Finishes v3",
    description:
      "The third iteration, resulting from pilot customer feedback, of a SaaS offering for the building industry.",
    keywords: ["MySQL", "Node", "Express", "React", "Redux", "TypeScript"],
    web: "https://finishes.app",
    images: [
      {
        source: {
          regular: finishes_main,
          thumbnail: t_finishes_main
        }
      }
    ],
    date: 2019,
    includeInResume: true
  },
  {
    label: "GatsbyJS Starter Site",
    shortDescription: "",
    description:
      "A starter template site built to get an understanding of the GatsbyJS framework. The site is responsive, utilising both JSS and SASS, and has a mix of both stateful and stateless components.",
    keywords: ["Gatsby", "JSS", "Material-UI", "SASS"],
    codebase: "https://github.com/marklewis01/simple-gatsby-site",
    web: "https://marklewis01.github.io/simple-gatsby-site",
    images: [
      {
        caption: "",
        source: {
          regular: gatsby_main,
          thumbnail: t_gatsby_main
        }
      },
      {
        caption: "",
        source: {
          regular: gatsby_mobile,
          thumbnail: t_gatsby_mobile
        }
      },
      {
        caption: "",
        source: {
          regular: gatsby_features,
          thumbnail: t_gatsby_features
        }
      },
      {
        caption: "",
        source: {
          regular: gatsby_pricing,
          thumbnail: t_gatsby_pricing
        }
      }
    ],
    date: 2018
    // includeInResume: true
  },
  {
    label: "Firebase Starter",
    shortDescription: "",
    description:
      "A starter template featuring a React front-end and a Google Firebase backend. The template has authentication (using Firebase Authentication), the typical login t_gatsby_features, and protected routes. State is managed using the lightweight Unstated.js library.",
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
        caption: "Fully responsive: gatsby_mobile device layout",
        source: {
          regular: fbStart_mobile,
          thumbnail: t_fbStart_mobile
        }
      }
    ],
    date: 2018,
    includeInResume: true
  },
  {
    label: "Junglefy website",
    shortDescription: "",
    description: "Custom WordPress and hosting.",
    keywords: ["WordPress", "CSS"],
    web: "https://junglefy.com.au",
    images: [
      {
        caption: "",
        source: {
          regular: junglefy_projects,
          thumbnail: t_junglefy_projects
        }
      },
      {
        caption: "",
        source: {
          regular: junglefy_project,
          thumbnail: t_junglefy_project
        }
      },
      {
        caption: "",
        source: {
          regular: junglefy_news,
          thumbnail: t_junglefy_news
        }
      },
      {
        caption: "",
        source: {
          regular: junglefy_contact,
          thumbnail: t_junglefy_contact
        }
      }
    ],
    date: 2017,
    includeInResume: true
  }
];

export const experience: IExperience[] = [
  {
    date: "12/17 – Present",
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
    date: "03/17 – Present",
    company: "Interweb'd",
    logo: logoInterwebd,
    title: "Director / Web Developer",
    url: "https://interwebd.com",
    description: `Getting my React and Node.js on. I'm in the process of building a few
        web applications with the hope of releasing one or two to answer real
        world business needs.`
  },
  {
    date: "09/17 - present",
    company: "Finishes / Interwebd",
    title: "Founder / Freelance Developer",
    description: `I decided to learn to code, starting late 2017. Today I can confidently build fullstack projects in JavaScript/TypeScript utilising the Node, React, and React Native libraries.`,
    highlights: [
      "Building my first SAAS prototype (Finishes) and successfully piloting it with independent industry customers;",
      "Discovering and learning new libraries/platforms to realize my ideas, including: React, Firebase, Node, PDF-generating libraries, databases (SQL/NoSQL), Sockets, and GCP/AWS ecosystems;"
    ],
    includeInResume: true
  },
  {
    date: "11/14 - 09/17",
    company: "Junglefy",
    logo: logoJunglefy,
    title: "Senior Estimator",
    url: "https://junglefy.com.au",
    description: `I wanted to help bring more nature back into our world, so I found Junglefy - Australia's leading vertical garden specialists.  I began in the construction team and progressed to the Sales team as a Senior Estimator.`,
    highlights: [
      "Ability to quickly gain proficiency in a new industry/field;",
      "Sales-related tasks including client briefings, tender bids/proposals, forecasting and handovers/reviews;",
      "Project scoping & requirements, planning, as well as generating construction drawings through CAD."
    ],
    includeInResume: true
  },
  {
    date: "04/14 - 10/14",
    company: "Simply",
    logo: logoSimply,
    title: "Project Manager",
    description: `Simply was a web development agency located in Sydney Australia, specializing in custom BigCommerce and WordPress installations.`,
    highlights: [
      "Manage project deliverables, scope, and change approvals;",
      "Manage remote development teams to deliver project requirements, customisations and as-built documentation;"
    ],
    includeInResume: true
  },
  {
    date: "08/12 - 09/13",
    company: "Platinum Direct Finance Aust.",
    logo: logoPDFA,
    title: "IT Consultant [Contract Role]",
    description: `Professional engagement to update existing office server/networking infrastructure (appx. 30 staff), and improve existing security measures.`,
    highlights: [
      "Project discovery/scoping, planning, design, procurement and implementation of new systems/hardware;",
      "As-built documentation and training;"
    ],
    includeInResume: true
  },
  {
    date: "03/10 - 06/12",
    company: "NSW Department of Education",
    logo: logoDEC,
    title: "Senior VMware Engineer",
    description: `I was a member of a four person team responsible for the directorate's private cloud compute infrastructure.`,
    highlights: [
      "Planning, provisioning and scaling of the environment, including upgrade and migration works;",
      "Management/orchestration of 1000+ VMs on 200+ physical hosts, housed across two enterprise-grade data centres;"
    ],
    includeInResume: true
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

export const education = [
  {
    name: "Bachelor Design (Industrial)",
    honors: "2nd Class Honors",
    school: "University of Technology, Sydney",
    year: 2003
  },
  {
    name: "Higher School Certificate",
    school: "The Hills Grammar School, Sydney",
    year: 1999
  }
];

export const certifications = [
  {
    name: "VMWare Certified Professional #61445",
    year: 2012
  },
  {
    name: "CCA XenServer Enterprise Edition 5.0",
    year: 2010
  },
  {
    name: "Microsoft MCP / MCTS #836845",
    year: 2009
  },
  {
    name: "ITIL v3 Foundation",
    year: 2008
  }
];
