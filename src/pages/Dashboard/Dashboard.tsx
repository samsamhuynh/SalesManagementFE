import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Table,
  TableContainer,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TableHeader from "../../components/Table/Table Header";
import TableBody from "../../components/Table/Table Body";
import { useState } from "react";

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
    <div className="mx-auto px-[15px]">
      <h1>Dashboard</h1>
      <Grid container sx={{ margin: "0 -15px !important", width: "unset" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{ padding: "0 15px !important" }}
        >
          <Card
            sx={{
              overflow: "visible",
              display: "inline-block",
              position: "relative",
              width: "100%",
              marginTop: "25px",
              borderRadius: "10px",
              background: "#fff",
            }}
          >
            <CardHeader
              title="ksdlfjsldfj"
              subheader="September 14, 2016"
              titleTypographyProps={{
                variant: "h6",
                color: "#FFFFFF",
                marginTop: "0px",
                minHeight: "auto",
                fontWeight: "300",
                marginBottom: "3px",
                textDecoration: "none",
              }}
              subheaderTypographyProps={{
                variant: "subtitle2",
                color: "rgba(255,255,255,.62)",
                margin: "0",
                fontSize: "14px",
              }}
              sx={{
                margin: "-20px 15px 0",
                borderRadius: "5px",
                padding: "15px",
                borderBottom: "none",
                zIndex: "3 !important",
                position: "relative",
                background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
                boxShadow:
                  "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)",
              }}
              action={
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Button
                    variant="contained"
                    sx={{ color: "white", backgroundColor: "black" }}
                    startIcon={<AddRoundedIcon color="inherit" />}
                  >
                    Create Data
                  </Button>
                </Stack>
              }
            ></CardHeader>

            <CardContent
              sx={{
                padding: "0.9375rem 20px",
                flex: "1 1 auto",
                WebkitBoxFlex: "1",
                position: "relative",
              }}
            >
              <TableContainer>
                <Table
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
                      [
                        "Philip Chaney",
                        "Korea, South",
                        "Overland Park",
                        "$38,735",
                      ],
                      [
                        "Doris Greene",
                        "Malawi",
                        "Feldkirchen in Kärnten",
                        "$63,542",
                      ],
                      ["Mason Porter", "Chile", "Gloucester", "$78,615"],
                    ]}
                  ></TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
