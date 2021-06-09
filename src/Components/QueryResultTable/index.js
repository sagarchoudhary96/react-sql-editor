import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import React, { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import TableRowDialog from "./TableRowDialog";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  tableContainer: {
    flex: "1",
    position: "relative",
    overflowY: "auto",
  },
  tableRowItem: {
    cursor: "pointer",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
  tableCell: {
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

//  Generate and return the metadata with info needed for table Header
const getTableHeaderCells = (metaData) => {
  return (
    metaData &&
    metaData.columns &&
    metaData.columns.map((column) => ({
      id: column.name,
      numeric: false,
      label: `${column.name}`,
    }))
  );
};

const QueryResultTable = ({ tableData = {} }) => {
  const classes = useStyles();

  // state for paginatination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { rows: tableRows = [], metaData } = tableData;

  // handles pagination change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // handles number of result to be show per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [showTableRowDialog, setShowTableRowDialog] = useState(false);
  const [currSelectedRow, setCurrSelectedRow] = useState();

  const toggleTableRowDialogState = () => {
    setShowTableRowDialog((val) => !val);
  };

  const handleTableRowDialogSuccess = () => {
    // handle TableRow Edit/Save functionality here
    toggleTableRowDialogState();
    setCurrSelectedRow({});
  };

  const handleTableRowClick = (row) => {
    setCurrSelectedRow(row);
    toggleTableRowDialogState();
  };

  // list of table rows based on the pagination filter
  const filteredRows = useMemo(() => {
    return tableRows.length > 0
      ? tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : [];
  }, [tableRows, page, rowsPerPage]);

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.tableContainer}>
        <Table
          stickyHeader
          aria-labelledby="tableTitle"
          aria-label="Query result table"
        >
          {/* Table Header */}
          <TableHeader
            headerCells={getTableHeaderCells(metaData)}
            rowCount={filteredRows.length}
          />

          {/* Table Body */}
          <TableBody>
            {filteredRows.map((row, rowIndex) => {
              return (
                <TableRow
                  className={classes.tableRowItem}
                  hover
                  tabIndex={-1}
                  key={`result-row-${rowIndex}`}
                  onClick={() => {
                    handleTableRowClick(row);
                  }}
                >
                  {Object.keys(row).map((key, cellIndex) => (
                    <TableCell
                      className={classes.tableCell}
                      key={`result-cell-${key}-${rowIndex}-${cellIndex}`}
                    >
                      {row[key]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table Pagination Controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={classes.tableFooter}
      />
      <TableRowDialog
        row={currSelectedRow}
        showDialog={showTableRowDialog}
        handleCancelAction={toggleTableRowDialogState}
        handleSuccessAction={handleTableRowDialogSuccess}
      />
    </Paper>
  );
};

export default QueryResultTable;
