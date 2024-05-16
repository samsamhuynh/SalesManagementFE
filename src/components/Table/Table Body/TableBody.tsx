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
import { Delete, Edit } from "@mui/icons-material";

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
                height: "48px",
                display: "table-row",
                outline: "none",
                verticalAlign: "middle",
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  disableRipple
                  checked={selected}
                  onChange={handleClick}
                />
              </TableCell>

              {prop.map((prop: any, key: any) => (
                <TableCell
                  sx={{
                    lineHeight: "1.42857143",
                    padding: "12px 8px",
                    verticalAlign: "middle",
                    fontSize: "0.8125rem",
                    color: "#555555",
                  }}
                  key={key}
                >
                  {prop}
                </TableCell>
              ))}

              <TableCell align="right">
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
          PaperProps={{
            sx: { width: 140 },
          }}
        >
          <MenuItem onClick={handleCloseMenu}>
            <Edit sx={{ mr: 2 }} />
            Edit
          </MenuItem>

          <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
            <Delete sx={{ mr: 2 }} />
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
