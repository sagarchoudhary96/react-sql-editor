import makeStyles from "@material-ui/core/styles/makeStyles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {
  DEFAULT_TOAST_POSITION,
  getToastProps,
  TOAST_POSITION,
} from "utils/constants/ToastConstants";

const useStyles = makeStyles((theme) => ({
  alert: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
  },
}));

// Toast to show Dismissable Alerts
const Toast = ({
  show = false,
  containerProps = {},
  alertProps = {},
  type,
  message,
  position = DEFAULT_TOAST_POSITION,
}) => {
  const classes = useStyles();
  const tabProps = getToastProps(type);
  return (
    show && (
      <Snackbar
        open={show}
        anchorOrigin={TOAST_POSITION[position]}
        {...containerProps}
      >
        <Alert
          className={classes.alert}
          {...alertProps}
          {...tabProps.alertProps}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  );
};

export default Toast;
