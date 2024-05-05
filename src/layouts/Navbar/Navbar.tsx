import { Menu } from "@mui/icons-material";
import { AppBar, Hidden, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import "./../../index.scss";
import AdminNavbarLinks from "./AdminNavbarLink";

const Header = (props: any) => {
  const { color, handleDrawerToggle } = props;
  const appBarClasses = color ? ` ${color}` : " ";

  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="absolute"
      className={
        "mb-0 py-2.5 w-full min-h-12 z-40 text-gray-800 transition-all duration-150 ease block" +
        appBarClasses
      }
    >
      <Toolbar className="min-h-12 px-2.5 ml-auto">
        <Hidden mdDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>

        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
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
