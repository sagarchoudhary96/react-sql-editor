import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import MenuButton from "Components/MenuButton";
import { noop } from "utils/constants/common";

// Editor Controls Styles
const useStyles = makeStyles((theme) => ({
  controlsWrapperRootStyles: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(254,252,254)",
  },
  editorButton: {
    marginRight: theme.spacing(1),
    minWidth: "fit-content",
  },

  editorButtonsWrapper: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const EditorControls = ({ onRunQuery = noop }) => {
  const classes = useStyles();

  return (
    <Paper square classes={{ root: classes.controlsWrapperRootStyles }}>
      <Box className={classes.editorButtonsWrapper} display="flex">
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<PlayArrowRoundedIcon />}
          className={classes.editorButton}
          onClick={onRunQuery}
        >
          Run Query
        </Button>
        <MenuButton
          title="EXPORT"
          menuItems={["CSV File", "XML File", "JSON File"]}
        />
      </Box>
    </Paper>
  );
};
export default EditorControls;
