import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "Components/CustomDialog";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DEFAULT_STRINGS, noop } from "utils/constants/common";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  editButton: {
    marginLeft: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  rowValue: {
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
}));

const TableRowDialog = ({
  row = {},
  showDialog = false,
  handleCancelAction = noop,
  handleSuccessAction = noop,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      open={showDialog}
      onClose={handleCancelAction}
      aria-labelledby="import-data-form-dialog-title"
    >
      {/* Title Section */}
      <DialogTitle
        id="import-data-form-dialog-title"
        onClose={handleCancelAction}
      >
        {DEFAULT_STRINGS.TABLE_ROW_DIALOG}
      </DialogTitle>

      {/* Dialog Content Area */}
      <DialogContent dividers>
        {Object.keys(row).map((columnName) => (
          <Box display="flex" my={3} flexDirection="column">
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="h6">{columnName}</Typography>
              <IconButton
                disableRipple
                className={classes.editButton}
                color="secondary"
              >
                <Edit fontSize="small" />
              </IconButton>
            </Box>
            <Typography className={classes.rowValue}>
              {row[columnName]}
            </Typography>
          </Box>
        ))}
      </DialogContent>

      {/* Dialog Action Buttons */}
      <DialogActions>
        <Button onClick={handleCancelAction} color="default">
          {DEFAULT_STRINGS.BUTTON_CLOSE_TEXT}
        </Button>
        <Button
          variant="contained"
          onClick={handleSuccessAction}
          color="secondary"
        >
          {DEFAULT_STRINGS.BUTTON_SAVE_CHANGES_TEXT}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TableRowDialog;
