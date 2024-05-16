import { useState } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  IconButton,
  MenuItem,
  Popover,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Check, Delete, Edit } from "@mui/icons-material";

const CustomTableBody = (props: any) => {
  const { selected, handleClick, tableData } = props;

  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

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

  return (
    <>
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
              key={key}
              tabIndex={-1}
              role="checkbox"
              selected={selected}
              sx={{
                position: "relative",
                borderBottom: "1px solid #DDD",
                cursor: "pointer",
                height: "48px",
                outline: "none",
                verticalAlign: "middle",
              }}
            >
              <TableCell
                padding="checkbox"
                key={key}
                component="th"
                scope="row"
                sx={{
                  padding: "12px 8px",
                  verticalAlign: "middle",
                  border: "none",
                  lineHeight: "1.42857143",
                  fontSize: "14px",
                }}
              >
                <Checkbox
                  disableRipple
                  checked={selected}
                  onChange={handleClick}
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

              {prop.map((prop: any, key: any) => (
                <TableCell
                  component="th"
                  scope="row"
                  padding="none"
                  sx={{
                    padding: "12px 8px",
                    verticalAlign: "middle",
                    color: "#555555",
                    lineHeight: "1.42857143",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                  key={key}
                >
                  {prop}
                </TableCell>
              ))}

              <TableCell align="right" component="th" scope="row">
                <IconButton onClick={handleOpenMenu}>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}

        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          slotProps={{
            paper: {
              sx: {
                width: 140,
                padding: "12px 8px !important",
                verticalAlign: "middle",
              },
            },
          }}
        >
          <MenuItem
            onClick={handleCloseMenu}
            title="Edit"
            sx={{
              color: "warning.main",
              lineHeight: "1.42857143",
              fontSize: "15px",
              fontWeight: 400,
            }}
          >
            <Edit sx={{ mr: 2, width: "20px", height: "20px" }} />
            Edit
          </MenuItem>

          <MenuItem
            onClick={handleCloseMenu}
            sx={{
              color: "error.main",
              lineHeight: "1.42857143",
              fontSize: "15px",
              fontWeight: 400,
            }}
          >
            <Delete sx={{ mr: 2, width: "20px", height: "20px" }} />
            Delete
          </MenuItem>
        </Popover>
      </TableBody>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ overflow: "visible" }}
      />
    </>
  );
};

CustomTableBody.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  handleClick: PropTypes.func,
  selected: PropTypes.any,
};

export default CustomTableBody;
