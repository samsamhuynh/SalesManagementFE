import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const DataTable = (props: any) => {
  const { rows, columns, sx } = props;

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  return (
    <Box sx={{ height: { rows }, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={38}
        rowCount={rows.length}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ sx }}
        editMode="row"
      />
    </Box>
  );
};

export default DataTable;
