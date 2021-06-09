import React from "react";
import useMenuStyles from "./menuStyles";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { noop } from "utils/constants/common";
import PropTypes from "prop-types";

const MenuButton = ({ title = "", menuItems = [], onMenuItemClick = noop }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useMenuStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    onMenuItemClick(item);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <GetAppRoundedIcon className={classes.downloadIcon} />
        <span>{title}</span>
        <ExpandMoreIcon
          className={anchorEl ? classes.upIcon : classes.downIcon}
        />
      </Button>
      {/*  menu items for Menu Button */}
      <Menu
        id="simple-menu"
        aria-label="export data menu"
        classes={{ paper: classes.paper }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`menuitem-${title}-${index}`}
            onClick={() => handleMenuItemClick(menuItem)}
          >
            {menuItem}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onMenuItemClick: PropTypes.func,
};
