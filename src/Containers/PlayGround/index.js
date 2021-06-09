import { useCallback, useState } from "react";
import Box from "@material-ui/core/Box";
import EmptyState from "Components/EmptyState";
import QueryEditor from "Components/QueryEditor";
import QueryResultTable from "Components/QueryResultTable";
import useAppContext from "hooks/useAppContext";
import DnsIcon from "@material-ui/icons/Dns";
import { DEFAULT_STRINGS } from "utils/constants/common";

/**
 * Playground for SQL
 * Wrapper Container
 * we can have Other Feature Components added to this
 * */
const Playground = () => {
  const { tablesData } = useAppContext();

  const [queryResults, setQueryResults] = useState();
  /**
   * handles running the query selected by user and returns data for the query
   * and updating store/context if required */
  const handleOnQueryRun = useCallback(() => {
    // returns random table data for all queries
    const tableNames = Object.keys(tablesData);
    const tableName = tableNames[(tableNames.length * Math.random()) << 0];
    setQueryResults(tablesData[tableName]);
  }, [tablesData]);

  return (
    <Box display="flex" height="100%" width="100%" flexDirection="column">
      <QueryEditor onRunQuery={handleOnQueryRun} />
      {!queryResults ? (
        <EmptyState
          icon={<DnsIcon fontSize="large" />}
          title={DEFAULT_STRINGS.WELCOME_MESSAGE_TITLE}
          subtitle={DEFAULT_STRINGS.WELCOME_MESSAGE_SUBTITLE}
        />
      ) : (
        <QueryResultTable tableData={queryResults} />
      )}
    </Box>
  );
};

export default Playground;
