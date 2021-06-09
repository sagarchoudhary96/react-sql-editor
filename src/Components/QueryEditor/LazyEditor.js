import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/theme-tomorrow";

const LazyEditor = (props) => {
  return <AceEditor {...props} />;
};

export default LazyEditor;
