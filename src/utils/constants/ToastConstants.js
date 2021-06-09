export const TOAST_ERROR = "error";
export const TOAST_INFO = "info";
export const TOAST_SUCCESS = "success";
export const TOAST_WARNING = "warning";

export const DEFAULT_TOAST_POSITION = "topCenter";

export const TOAST_POSITION = {
  topLeft: { vertical: "top", horizontal: "left" },
  topCenter: { vertical: "top", horizontal: "center" },
  topRight: { vertical: "top", horizontal: "right" },
  bottomLeft: { vertical: "bottom", horizontal: "left" },
  bottomCenter: { vertical: "bottom", horizontal: "center" },
  bottomRight: { vertical: "bottom", horizontal: "right" },
};

export const TOAST_PROPS = {
  [TOAST_ERROR]: {
    alertProps: {
      severity: TOAST_ERROR,
    },
  },
  [TOAST_INFO]: {
    alertProps: {
      severity: TOAST_INFO,
    },
  },
  [TOAST_SUCCESS]: {
    alertProps: {
      severity: TOAST_SUCCESS,
    },
  },
  [TOAST_WARNING]: {
    alertProps: {
      severity: TOAST_WARNING,
    },
  },
};

export const getToastProps = (type) => TOAST_PROPS[type];
