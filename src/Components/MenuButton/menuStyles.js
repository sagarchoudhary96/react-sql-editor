import makeStyles from "@material-ui/core/styles/makeStyles";

const minWidth = 140;

const menuButtonStyles = () => ({
  button: {
    minWidth: minWidth,
    fontWeight: 500,
    textTransform: "capitalize",
    paddingTop: 8,
    paddingBottom: 8,
    "& > span": {
      fontSize: "0.9em",
    },
  },
  downloadIcon: {
    userSelect: "none",
    pointerEvents: "none",
    marginRight: 8,
  },
  downIcon: {
    userSelect: "none",
    pointerEvents: "none",
  },
  upIcon: {
    userSelect: "none",
    pointerEvents: "none",
    transform: "rotate(180deg)",
  },
  paper: {
    minWidth: minWidth,
    borderRadius: 4,
    marginTop: 8,
  },
});

export default makeStyles(menuButtonStyles, { name: "menuButton" });
