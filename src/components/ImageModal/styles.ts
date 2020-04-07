import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "90vw"
    },

    container: {
      overflowY: "auto",
      width: "unset"
    },
    header: {
      color: theme.palette.primary.contrastText,
      display: "flex",
      alignItems: "center",
      minHeight: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.primary.main
    },
    img: {
      display: "block",
      maxWidth: "90vw",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    },
    modal: {
      maxWidth: "unset"
    }
  });
