import { h } from "preact";
import Match, { Link } from "preact-router/match";

// Mui
import { IconButton, Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// assets
import ml_photo from "../../assets/mlewis_pic_sketch.png";

export const Nav = () => {
  const handleClick = (s: string) => {
    s.startsWith("mailto")
      ? (window.location.href = s)
      : window.open(s, "_blank");
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
    },
    {
      label: "Contact",
      path: "/contact"
    }
  ];

  return (
    <div className="header">
      <div
        style={{ background: `center/cover no-repeat url(${ml_photo})` }}
        className="nav-avatar"
      />
      <h1 className="nav-name">Mark Lewis</h1>
      <h5 className="nav-subtitle">Web Developer</h5>

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
