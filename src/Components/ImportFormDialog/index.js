import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "Components/CustomDialog";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { DEFAULT_STRINGS, noop } from "utils/constants/common";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
});

const ImportFormDialog = ({
  showDialog = false,
  handleCancelAction = noop,
  handleSuccessAction = noop,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={showDialog}
      onClose={handleCancelAction}
      aria-labelledby="import-data-form-dialog-title"
    >
      {/* Title Section */}
      <DialogTitle
        id="import-data-form-dialog-title"
        onClose={handleCancelAction}
      >
        {DEFAULT_STRINGS.IMPORT_DATA_DIALOG_TITLE}
      </DialogTitle>

      {/* Dialog Content Area */}
      <DialogContent dividers>
        <Typography>{DEFAULT_STRINGS.IMPORT_DATA_HELP_TEXT}</Typography>
        <Box
          display="flex"
          my={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography> Select File </Typography>
          <label htmlFor="file-upload">
            <input
              accept=".csv, .sql, .json, .xml"
              className={classes.input}
              id="file-upload"
              type="file"
            />
            <Button variant="outlined" color="secondary" component={"span"}>
              {DEFAULT_STRINGS.BUTTON_OPEN_TEXT}
            </Button>
          </label>
        </Box>
      </DialogContent>

      {/* Dialog Action Buttons */}
      <DialogActions>
        <Button onClick={handleCancelAction} color="default">
          {DEFAULT_STRINGS.BUTTON_CANCEL_TEXT}
        </Button>
        <Button
          variant="contained"
          onClick={handleSuccessAction}
          color="secondary"
        >
          {DEFAULT_STRINGS.BUTTON_UPLOAD_TEXT}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImportFormDialog;

ImportFormDialog.propTypes = {
  showDialog: PropTypes.bool,
  handleCancelAction: PropTypes.func.isRequired,
  handleSuccessAction: PropTypes.func.isRequired,
};
