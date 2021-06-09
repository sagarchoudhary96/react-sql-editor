import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import { useState } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import ListSubheader from "@material-ui/core/ListSubheader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import { DEFAULT_STRINGS } from "utils/constants/common";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  primaryTextColor: {
    color: theme.palette.text.primary,
  },
  columnNameText: {
    paddingLeft: theme.spacing(1),
    overflowX: "hidden",
    textOverflow: "ellipsis",
  },
}));

//  Collapsible ListItem Component for  SideBar
const SidebarListItem = ({ listItem, subtitle, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggleListItem = () => {
    setIsOpen((value) => !value);
  };
  const { tableName, columns } = listItem;

  return (
    <>
      <ListItem button component="li" onClick={toggleListItem}>
        <ListItemIcon>
          {icon ? icon : <TableChartOutlinedIcon fontSize="small" />}
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            <Box
              component="span"
              fontWeight={isOpen ? "fontWeightBold" : "fontWeightRegular"}
            >
              {tableName}
            </Box>
          </Typography>
        </ListItemText>
        {isOpen ? <ExpandMoreIcon /> : <ChevronLeftIcon />}
      </ListItem>
      <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
        <List
          component="ul"
          disablePadding
          subheader={
            <ListSubheader
              className={clsx(classes.nested, classes.primaryTextColor)}
            >
              {subtitle || DEFAULT_STRINGS.HEADING_COLUMNS}
            </ListSubheader>
          }
          className={classes.nested}
        >
          {columns.map((column, index) => (
            <ListItem dense key={`${tableName}-${column.name}-${index}-column`}>
              <ViewColumnIcon />
              <Tooltip
                title={`${column.name} ${
                  column.type ? " (" + column.type + ")" : ""
                } `}
              >
                <ListItemText className={classes.columnNameText}>
                  <Typography variant="subtitle2" component="span">
                    {column.name}
                  </Typography>
                  {column.type && (
                    <Typography variant="caption">{` (${column.type})`}</Typography>
                  )}
                </ListItemText>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarListItem;

SidebarListItem.propTypes = {
  listItem: PropTypes.object.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
};
