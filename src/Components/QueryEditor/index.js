import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/theme-tomorrow";
import useActiveQueryEditor from "hooks/useActiveQueryEditor";
import useToast from "hooks/useToast";
import PropTypes from "prop-types";
import { DEFAULT_STRINGS, noop } from "utils/constants/common";
import { TOAST_ERROR, TOAST_SUCCESS } from "utils/constants/ToastConstants";
import { v4 as uuid } from "uuid";
import EditorControls from "./EditorControls";
import Toast from "Components/Toast";

/**
 * Material Ui recommend writing css styles in hook style  (css in js)
 * Can use Styled Components as well
 * It helps in making it easier to manage and make changes to the components
 * and prevent confliciting styles
 */
const useStyles = makeStyles((theme) => ({
  editorStyles: {
    border: `1px solid ${theme.palette.divider}`,
    borderRight: "0",
  },
}));

const QueryEditor = ({ onRunQuery = noop }) => {
  const classes = useStyles();

  const { currentQuery, handleQueryChange, editorTabs, updateEditorTabs } =
    useActiveQueryEditor();
  const { isToastVisible, showToast, toastType, toastMessage } = useToast();

  const handleRunQuery = () => {
    if (!currentQuery) {
      showToast(TOAST_ERROR, "Please Enter Query");
      return;
    }
    onRunQuery();
    showToast(TOAST_SUCCESS, "Query Ran Successfully");
  };

  return (
    <Box>
      <EditorControls
        editorTabs={editorTabs}
        updateEditorTabs={updateEditorTabs}
        onRunQuery={handleRunQuery}
      />
      <AceEditor
        aria-label="query editor input"
        mode="mysql"
        theme="tomorrow"
        name={uuid()}
        fontSize={16}
        maxLines={6}
        minLines={6}
        width="100%"
        showPrintMargin={false}
        showGutter
        highlightActiveLine={false}
        placeholder={DEFAULT_STRINGS.QUERY_EDITOR_PLACEHOLDER}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={currentQuery}
        onChange={handleQueryChange}
        className={classes.editorStyles}
        showLineNumbers
      />
      <Toast show={isToastVisible} type={toastType} message={toastMessage} />
    </Box>
  );
};

export default QueryEditor;

QueryEditor.propTypes = {
  onRunQuery: PropTypes.func.isRequired,
};
