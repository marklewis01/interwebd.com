import { h } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";

// Mui
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  LocationOn as LocationIcon,
  Mail as MailIcon,
} from "@material-ui/icons";

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
    setForHire(!forHire);
  };
  const contactLinks = [
    {
      icon: <MailIcon />,
      link: "mailto:mark@interwebd.com",
      tooltip: "Send me an Email",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/marklewis01",
      tooltip: "See my LinkedIn",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/marklewis01",
      tooltip: "See my GitHub",
    },
    {
      icon: <SOIcon />,
      link: "https://stackoverflow.com/users/9330692/m-lewis",
      tooltip: "See my StackOverflow",
    },
  ];

  const navPageLinks = [
    {
      label: "Projects",
      path: "/",
    },
    {
      label: "Resume",
      path: "/resume",
    },
  ];

  return (
    <div className="nav">
      <div className="neon-wrapper">
        <LightSwitch checked={forHire} onClick={handleLightSwitch} switchOnly />
        <Neon text="For Hire" power={forHire} />
      </div>
      <div
        style={{ background: `center/cover no-repeat url(${ml_photo})` }}
        className="avatar"
      />
      <h1 className="name">Mark Lewis</h1>
      <h5 className="subtitle">Web Developer</h5>
      <h5 className="location">
        <LocationIcon className="icon" />
        Sydney, Australia
      </h5>
      <Typography variant="h4" className="mini-bio">
        I get a kick out of building ideas and understanding how things work
      </Typography>

      <div className="social-links-wrapper">
        <ul className="contact-links">
          {contactLinks.map((link) => (
            <Link className="contact-link">
              <Tooltip title={link.tooltip} arrow>
                <IconButton
                  classes={{ root: "icon" }}
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
