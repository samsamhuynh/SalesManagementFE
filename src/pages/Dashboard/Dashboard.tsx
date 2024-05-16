import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Table,
  TableContainer,
} from "@mui/material";
import TableHeader from "../../components/Table/Table Header";
import TableBody from "../../components/Table/Table Body";
import { useState } from "react";
import { Add } from "@mui/icons-material";

const Dashboard = () => {
  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const handleSort = (event: any, id: any) => {
    const isAsc = orderBy === id && order === "asc";
    if (id !== "") {
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(id);
    }
  };

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
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            aria-label="simple table"
            sx={{
              marginBottom: "0",
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "transparent",
              borderSpacing: "0",
              borderCollapse: "collapse",
            }}
          >
            <TableHeader
              order={order}
              orderBy={orderBy}
              rowCount={length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              // onSelectAllClick={handleSelectAllClick}
              // onRequestSort={handleRequestSort}
              // rowCount={rows.length}
              headLabel={[
                { id: "name", label: "Name" },
                { id: "company", label: "Company" },
                { id: "role", label: "Role" },
                { id: "isVerified", label: "Verified", align: "center" },
                { id: "status", label: "Status" },
                { id: "" },
              ]}
            ></TableHeader>

            <TableBody
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"],
              ]}
            ></TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default Dashboard;
