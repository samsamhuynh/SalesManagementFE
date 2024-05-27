import { Menu } from "@mui/icons-material";
import { AppBar, Grid, Hidden, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import "./../../index.scss";
import AdminNavbarLinks from "./AdminNavbarLink";

const Header = (props: any) => {
  const { handleDrawerToggle } = props;

  return (
    <AppBar
      position="fixed"
      style={{
        zIndex: "1029",
        backgroundColor: "white",
        padding: "8px 0",
        width: "100%",
        minHeight: "50px",
        color: "#555555",
        transition: "all 150ms ease 0s",
        boxShadow: "none",
        borderBottom: "1px solid #e7e7e7",
      }}
    >
      <Toolbar style={{ minHeight: "50px", marginLeft: "auto" }}>
        <Grid container>
          <Grid item>
            <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <Menu
                  fontSize="small"
                  sx={{ marginRight: "10px", alignContent: "center" }}
                />
              </IconButton>
            </Hidden>
          </Grid>

          <Grid item>
            <AdminNavbarLinks />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
