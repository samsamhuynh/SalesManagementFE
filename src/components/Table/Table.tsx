import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const DataTable = (props: any) => {
  const { rows, columns, loading, sx } = props;

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        rowCount={rows.length}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ sx }}
      />
    </Box>
  );
};

export default DataTable;
