import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DEFAULT_STRINGS, noop } from "utils/constants/common";
import PropTypes from "prop-types";

// Navbar styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    borderRadius: 0,
    marginRight: theme.spacing(1),
  },
  navTitle: {
    flexGrow: 1,
  },
}));

const Navbar = ({ onMenuButtonClick = noop }) => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          onClick={onMenuButtonClick}
          disableRipple
          edge="start"
          aria-label="sidebar menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.navTitle}
          color="textPrimary"
          variant="h6"
        >
          {DEFAULT_STRINGS.APP_TITLE}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

Navbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
};
