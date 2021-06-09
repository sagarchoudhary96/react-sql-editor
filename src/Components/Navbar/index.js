import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PublishIcon from "@material-ui/icons/Publish";
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

const Navbar = ({ onMenuButtonClick = noop, onImportButtonClick = noop }) => {
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
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<PublishIcon />}
          onClick={onImportButtonClick}
        >
          {DEFAULT_STRINGS.IMPORT_DATA}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

Navbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
  onImportButtonClick: PropTypes.func.isRequired,
};
