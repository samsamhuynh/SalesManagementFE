import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Check } from "@mui/icons-material";

const TableHeader = (props: any) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headLabel,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          height: "56px",
          outline: "none",
          verticalAlign: "middle",
          borderBottom: "1px solid #DDD",
        }}
      >
        <TableCell
          padding="checkbox"
          sx={{
            padding: "12px 8px",
            verticalAlign: "middle",
            border: "none",
            lineHeight: "1.42857143",
            fontSize: "14px",
          }}
        >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all",
            }}
            checkedIcon={
              <Check
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "3px",
                  border: "1px solid rgba(0, 0, 0, .54)",
                }}
              />
            }
            icon={
              <Check
                sx={{
                  width: "0px",
                  height: "0px",
                  padding: "10px",
                  borderRadius: "3px",
                  border: "1px solid rgba(0, 0, 0, .54)",
                }}
              />
            }
            sx={{ color: "#9c27b0 !important", padding: "13px" }}
          />
        </TableCell>

        {headLabel.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              padding: "12px 8px",
              verticalAlign: "middle",
              color: "#9c27b0",
              lineHeight: "1.42857143",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box
                  sx={{
                    border: 0,
                    margin: -1,
                    padding: 0,
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    clip: "rect(0 0 0 0)",
                  }}
                >
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
  headLabel: PropTypes.array,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
};

export default TableHeader;
