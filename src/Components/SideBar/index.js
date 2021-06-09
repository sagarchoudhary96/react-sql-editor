import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import Proptypes from "prop-types";
import { DRAWER_WIDTH } from "utils/constants/common";

// SideBar Styles
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      position: "relative",
    },
    whiteSpace: "nowrap",
    height: "100%",
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    }),
    width: 0,
  },
}));

// SideBar Component
const SideBar = ({ showDrawer = true }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !showDrawer && classes.drawerPaperClose
        ),
      }}
      open={showDrawer}
    >
      SideBar Drawer
    </Drawer>
  );
};

export default SideBar;

SideBar.propTypes = {
  items: Proptypes.array,
  showDrawer: Proptypes.bool.isRequired,
};
