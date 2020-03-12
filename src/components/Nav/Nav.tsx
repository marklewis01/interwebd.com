import { h } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";

// Mui
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// custom comps
import { Neon } from "../Neon";
import { LightSwitch } from "../LightSwitch";

// assets
import ml_photo from "../../assets/mlewis_pic_sketch.png";

// StackOverflow SVG icon
const SOIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="stack-overflow"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    class="MuiSvgIcon-root"
  >
    <path
      fill="currentColor"
      d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
      class=""
    ></path>
  </svg>
);

export const Nav = () => {
  const [forHire, setForHire] = useState(true);

  const handleClick = (s: string) => {
    s.startsWith("mailto")
      ? (window.location.href = s)
      : window.open(s, "_blank");
  };

  const handleLightSwitch = () => {
    console.log("clicked");
    setForHire(!forHire);
  };
  const contactLinks = [
    {
      icon: <MailOutlineIcon />,
      link: "mailto:mark@interwebd.com",
      tooltip: "Send me an Email"
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/marklewis01",
      tooltip: "See my LinkedIn"
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/marklewis01",
      tooltip: "See my GitHub"
    },
    {
      icon: <SOIcon />,
      link: "https://stackoverflow.com/users/9330692/m-lewis",
      tooltip: "See my StackOverflow"
    }
  ];

  const navPageLinks = [
    {
      label: "Projects",
      path: "/"
    },
    {
      label: "Resume",
      path: "/resume"
    }
  ];

  console.log("for", forHire);

  return (
    <div className="header">
      <div className="neon-wrapper">
        <Neon text="For Hire" power={forHire} />
        <LightSwitch checked={forHire} onClick={handleLightSwitch} switchOnly />
      </div>
      <div
        style={{ background: `center/cover no-repeat url(${ml_photo})` }}
        className="nav-avatar"
      />
      <h1 className="nav-name">Mark Lewis</h1>
      <h5 className="nav-subtitle">Web Developer</h5>
      <Typography variant="h4" className="nav-mini-bio">
        I get a kick out of building ideas and understanding how things work
      </Typography>

      <nav className="nav-item-wrapper">
        {navPageLinks.map(link => (
          <p className="nav-item">
            <Link href={link.path} activeClassName="link-active">
              {link.label}
            </Link>
          </p>
        ))}
      </nav>
      <div>
        <ul className="contact-links">
          {contactLinks.map(link => (
            <Link className="contact-link">
              <Tooltip title={link.tooltip} arrow>
                <IconButton
                  classes={{ root: "contact-icon" }}
                  onClick={() => handleClick(link.link)}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
