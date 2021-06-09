import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/styles/makeStyles";
import Tabs from "@material-ui/core/Tabs";
import AddIcon from "@material-ui/icons/Add";
import CustomTab from "./CustomTab";
import { useState, useCallback } from "react";
import { noop } from "utils/constants/common";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  tabsContainer: {
    flex: 1,
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  addNewTabButton: {
    minWidth: "fit-content",
  },
});

// styles for tabs Wrapper
const useTabsWrapperStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    marginRight: theme.spacing(1),
  },
  indicator: {
    display: "none",
  },
  scrollButtons: {
    display: "none",
  },
}));

// Component to create list of Editable tabs i.e allowing to add/delete tabs
const EditableTabs = ({
  tabsList = [],
  onTabChange = noop,
  onTabDelete = noop,
  onTabAdd = noop,
}) => {
  const classes = useStyles();
  const tabsStyles = useTabsWrapperStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, value) => {
    onTabChange({ prev: tabsList[tabValue], next: tabsList[value] });
    setTabValue(value);
  };

  const addTab = () => {
    onTabAdd().then(() => {
      setTabValue(tabsList.length);
    });
  };

  const deleteTab = useCallback(
    (e, tabId) => {
      e.stopPropagation();
      if (tabsList.length === 1) {
        return;
      }

      onTabDelete(tabId);
      setTabValue((value) => value - 1);
    },
    [tabsList, onTabDelete]
  );

  return (
    <Grid
      className={classes.tabsContainer}
      container
      alignItems="center"
      justify="center"
    >
      <Box flex="1" overflow="auto">
        <Tabs
          classes={tabsStyles}
          onChange={handleTabChange}
          aria-label="editor-tabs"
          value={tabValue}
          variant="scrollable"
        >
          {tabsList.map((tab) => (
            <CustomTab tab={tab} key={tab.id} onDelete={deleteTab} />
          ))}
        </Tabs>
      </Box>
      <Grid className={classes.addNewTabButton}>
        <Button startIcon={<AddIcon fontSize="small" />} onClick={addTab}>
          New Tab
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditableTabs;

EditableTabs.propTypes = {
  tabList: PropTypes.array,
  onTabAdd: PropTypes.func.isRequired,
  onTabChange: PropTypes.func.isRequired,
  onTabDelete: PropTypes.func.isRequired,
};
