import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    borderRight: `0.5px solid ${theme.palette.divider}`,
  },
}));

const TableHeader = ({ headerCells = [] }) => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        {headerCells.map((headCell) => (
          <TableCell
            className={classes.tableHeaderCell}
            key={headCell.id}
            align="center"
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  rowCount: PropTypes.number.isRequired,
};
