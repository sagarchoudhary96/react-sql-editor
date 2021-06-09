/** Contains Common constants */
export const noop = () => {};

export const DRAWER_WIDTH = 240;

export const HOME_TAB_ID = "home_tab";

export const DEFAULT_EDITOR_TAB = {
  name: "Home",
  id: HOME_TAB_ID,
  value: "home",
  canDelete: false,
  query: "",
  isActive: true,
};

export const EDITOR_TAB_ADD = "editor_tab_added";
export const EDITOR_TAB_DELETE = "editor_tab_delete";
export const EDITOR_TAB_CHANGE = "editor_tab_change";

// These can be later on move to separate file making it easier to do localisation for our app
// in case we have functionality to support different languages
export const DEFAULT_STRINGS = {
  WELCOME_MESSAGE_TITLE: "Welcome to SQL QUERY EDITOR",
  WELCOME_MESSAGE_SUBTITLE: "To get started, Enter and Run a Query",
  APP_TITLE: "SQL EDITOR",
  IMPORT_DATA: "Import Data",
  NO_TABLES_EXIST: "No table exists",
  IMPORT_NEW_DATA_MESSAGE: "Please import data to the Editor",
  QUERY_EDITOR_PLACEHOLDER: "Write Query Here ...",
  IMPORT_DATA_DIALOG_TITLE: "Import Data",
  IMPORT_DATA_HELP_TEXT:
    "Select your file by clicking on upload button to import data",
  BUTTON_OPEN_TEXT: "open",
  BUTTON_CANCEL_TEXT: "Cancel",
  BUTTON_CLOSE_TEXT: "Close",
  BUTTON_SAVE_CHANGES_TEXT: "Save Changes",
  BUTTON_UPLOAD_TEXT: "Upload",
  HEADING_COLUMNS: "Columns",
  TABLE_ROW_DIALOG: "Row Details",
};
