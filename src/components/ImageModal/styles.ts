import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "90vw"
    },
    container: {
      // flex: 1,
      overflowY: "auto",
      width: "unset",
      "& div": {
        maxHeight: "100%"
      }
    },
    header: {
      color: theme.palette.primary.contrastText,
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.primary.main
    },
    img: {
      // background: `center/cover no-repeat`
      // height: 255,
      // maxHeight: "75vh",
      display: "block",
      // width: "100%",
      maxWidth: "90vw",
      overflow: "hidden"
      // width: "100%"
      // maxHeight: "80%",
      // marginTop: "2%"
    },
    modal: {
      // height: "100%",
      maxWidth: "unset"
      // width: 800
      // maxHeight: "80vh"
    }
  });
