import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const EditorLoader = () => {
  return (
    <Box
      display="flex"
      height="140px"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Setting up Editor, Please Wait ...</Typography>
    </Box>
  );
};

export default EditorLoader;
