import { Box, Button, Card, Container, Stack, Tab, Tabs } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import DataTable from "../../components/Table";

const Dashboard = () => {
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value: any, row: any) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 260,
      renderCell: () => [
        <div className="grid grid-cols-2 gap-2 ">
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#ff9800",
              "&:hover": {
                backgroundColor: "white",
                color: "#af2cc5",
              },
            }}
          >
            <Edit sx={{ mr: 2 }} />
            Edit
          </Button>

          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#f44336",
              "&:hover": {
                backgroundColor: "white",
                color: "#af2cc5",
              },
            }}
          >
            <Delete sx={{ mr: 2 }} />
            Delete
          </Button>
        </div>,
      ],
    },
  ];

  return (
    <Container className="mx-auto px-[15px]">
      <h1>Dashboard</h1>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            fontSize: "14px",
            fontWeight: 300,
            backgroundColor: "black",
          }}
          startIcon={<Add sx={{ width: "20px", height: "20px" }} />}
        >
          Create Data
        </Button>
      </Stack>

      <Card
        sx={{
          overflow: "visible",
          display: "inline-block",
          position: "relative",
          width: "100%",
          borderRadius: "10px",
          background: "#fff",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <DataTable
          columns={columns}
          rows={rows}
          loading={!rows.length}
          sx={{}}
        ></DataTable>
      </Card>
    </Container>
  );
};

export default Dashboard;
