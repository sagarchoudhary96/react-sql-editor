import Box from "@material-ui/core/Box";
import QueryEditor from "Components/QueryEditor";

/**
 * Playground for SQL
 * Wrapper Container
 * we can have Other Feature Components added to this
 * */
const Playground = () => {
  return (
    <Box display="flex" height="100%" width="100%" flexDirection="column">
      <QueryEditor />
    </Box>
  );
};

export default Playground;
