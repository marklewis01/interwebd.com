import { h } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";

// Mui
import { IconButton, Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// custom comps
import { Neon } from "../Neon";
import { LightSwitch } from "../LightSwitch";

// assets
import ml_photo from "../../assets/mlewis_pic_sketch.png";

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
      link: "mailto:mark@interwebd.com"
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/marklewis01"
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/marklewis01"
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
      </div>
      <LightSwitch checked={forHire} onClick={handleLightSwitch} />
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
              <IconButton
                classes={{ root: "contact-icon" }}
                onClick={() => handleClick(link.link)}
              >
                {link.icon}
              </IconButton>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
