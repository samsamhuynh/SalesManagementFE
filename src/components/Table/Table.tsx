import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";

const CustomTable = (props: any) => {
  const { tableHead, tableData, color } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeaderColor = classNames({
    warning: {
      color: "#ff9800",
    },
    primary: {
      color: "#9c27b0",
    },
    danger: {
      color: "#f44336",
    },
    success: {
      color: "#4caf50",
    },
    info: {
      color: "#00acc1",
    },
    rose: {
      color: "#e91e63",
    },
    gray: {
      color: "#999",
    },
  });

  return (
    <div className="w-full mt-10 overflow-x-auto">
      <TableContainer>
        <Table
          aria-label="simple table"
          style={{
            marginBottom: "0",
            width: "100%",
            maxWidth: "100%",
            backgroundColor: "transparent",
            borderSpacing: "0",
            borderCollapse: "collapse",
          }}
        >
          {tableHead !== undefined ? (
            <TableHead className={tableHeaderColor}>
              <TableRow
                hover
                style={{
                  height: "56px",
                  color: "inherit",
                  display: "table-row",
                  outline: "none",
                  verticalAlign: "middle",
                }}
              >
                {tableHead.map((prop: any, key: any) => {
                  return (
                    <TableCell
                      style={{
                        lineHeight: "1.42857143",
                        padding: "12px 8px",
                        verticalAlign: "middle",
                        // color: "inherit",
                        fontSize: "1em",
                      }}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}

          <TableBody>
            {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((prop: any, key: any) => {
              return (
                <TableRow
                  hover
                  style={{
                    height: "48px",
                    color: "inherit",
                    display: "table-row",
                    outline: "none",
                    verticalAlign: "middle",
                  }}
                  key={key}
                >
                  {prop.map((prop: any, key: any) => {
                    return (
                      <TableCell
                        style={{
                          lineHeight: "1.42857143",
                          padding: "12px 8px",
                          verticalAlign: "middle",
                          fontSize: "0.8125rem",
                          color: "inherit",
                        }}
                        key={key}
                      >
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  color: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default CustomTable;
