import { h, createRef } from "preact";

import { Fab, Icon, Tooltip, Zoom, useScrollTrigger } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
const useStyles = makeStyles(styles);

export const ScrollToTop = () => {
  const classes = useStyles();
  const ref = createRef();

  const visibilityTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visibilityTrigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Tooltip title="Scroll to top">
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <Icon>keyboard_arrow_up</Icon>
          </Fab>
        </Tooltip>
      </div>
    </Zoom>
  );
};
