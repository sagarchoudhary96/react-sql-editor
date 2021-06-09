import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

// css styles for Homepage layout
const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  page: {
    height: "100%",
    width: "100%",
    display: "flex",
    overflow: "hidden",
  },
  contentArea: {
    flex: 1,
    overflowX: "auto",
  },
});

// Home Page Layout
// we can have different page layouts created for different devices , routes, pages etc
const HomePageLayout = ({ children, navBar, sideBar }) => {
  const classes = useStyles();
  return (
    <Box height="100vh" width="100vw">
      {/*  navigation Bar goes here */}
      {navBar}
      <Box component="main" className={clsx(classes.mainContainer)}>
        <Toolbar />
        <Box className={classes.page}>
          {/* SideBar goes here */}
          {sideBar}
          <Box className={classes.contentArea}>
            {/* Content goes here */}
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

HomePageLayout.propTypes = {
  // componets for nav and sider
  navBar: PropTypes.element.isRequired,
  sideBar: PropTypes.element.isRequired,
  children: PropTypes.arrayOf(PropTypes.element), // page contents
};

export default HomePageLayout;
