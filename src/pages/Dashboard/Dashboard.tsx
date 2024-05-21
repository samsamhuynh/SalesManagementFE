import { Button, Card, Container, Stack } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import DataTable from "../../components/Table";
import { GridColDef, GridRowId } from "@mui/x-data-grid";
import { useCallback, useMemo, useState } from "react";
import FormInput from "../../components/Form";

interface Categories {
  id: number;
  name: string;
  description: string;
  slug: string;
}

const categories: Categories[] = [
  {
    id: 1,
    name: "Electronics",
    description: "Devices and gadgets including phones, laptops, and more.",
    slug: "electronics",
  },
  {
    id: 2,
    name: "Home Appliances",
    description:
      "Various appliances for home use such as refrigerators and microwaves.",
    slug: "home-appliances",
  },
  {
    id: 3,
    name: "Books",
    description: "A wide range of books from different genres.",
    slug: "books",
  },
  {
    id: 4,
    name: "Fashion",
    description: "Clothing, accessories, and footwear for all.",
    slug: "fashion",
  },
  {
    id: 5,
    name: "Toys",
    description: "Toys and games for children of all ages.",
    slug: "toys",
  },
  {
    id: 6,
    name: "Groceries",
    description: "Everyday groceries and food items.",
    slug: "groceries",
  },
  {
    id: 7,
    name: "Health & Beauty",
    description: "Products for health and personal care.",
    slug: "health-beauty",
  },
  {
    id: 8,
    name: "Sports",
    description: "Sports equipment and outdoor gear.",
    slug: "sports",
  },
  {
    id: 9,
    name: "Automotive",
    description: "Automotive parts and accessories.",
    slug: "automotive",
  },
  {
    id: 10,
    name: "Furniture",
    description: "Home and office furniture.",
    slug: "furniture",
  },
];

const Dashboard = () => {
  const [rows, setRows] = useState<Categories[]>(categories);

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleDelete = useCallback(
    (id: GridRowId) => () => {
      if (window.confirm("Are you sure you want to delete?")) {
        handleDelete(id);
      }

      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const columns = useMemo<GridColDef<Categories>[]>(
    () => [
      { field: "id", headerName: "ID", width: 90 },
      { field: "name", headerName: "Name", width: 150, editable: true },
      {
        field: "description",
        headerName: "Description",
        width: 150,
        editable: true,
      },
      { field: "slug", headerName: "Slug", width: 110, editable: true },
      {
        field: "action",
        headerName: "Action",
        width: 260,
        align: "center",
        renderCell: (params) => (
          <div className="grid grid-cols-2 gap-2">
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
              onClick={handleButtonClick}
            >
              <Edit sx={{ mr: 1 }} />
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
              onClick={handleDelete(params.id)}
            >
              <Delete sx={{ mr: 1 }} />
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [handleButtonClick, handleDelete]
  );

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
          onClick={handleButtonClick}
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
        {showForm && <FormInput />}
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
        ></DataTable>

        {/* <FormInput /> */}
      </Card>
    </Container>
  );
};

export default Dashboard;
