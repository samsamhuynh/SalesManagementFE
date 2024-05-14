import { Card, CardHeader, Grid } from "@mui/material";
import Table from "../../components/Table";

const Dashboard = () => {
  return (
    <div className="mx-auto px-[15px]">
      <h1>Dashboard</h1>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            {/* <CardHeader color="gray">
              <h4>Simple Table</h4>
              <p>Here is a subtitle for this table</p>
            </CardHeader> */}

            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"],
              ]}
            ></Table>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
