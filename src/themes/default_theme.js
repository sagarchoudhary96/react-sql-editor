import red from "@material-ui/core/colors/red";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// A custom default theme for this app
const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(238, 242, 244)",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "rgb(238, 242, 244)",
      default: "#fff",
    },
    text: {
      primary: "rgb(100, 118, 132)",
      secondary: "#fff",
    },
    action: {
      active: "rgb(100, 118, 132)",
    },
  },
});

export default DefaultTheme;
