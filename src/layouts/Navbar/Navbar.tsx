import { Menu } from "@mui/icons-material";
import { AppBar, Hidden, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import "./../../index.scss";
import AdminNavbarLinks from "./AdminNavbarLink";
import classNames from "classnames";

const Header = (props: any) => {
  const { color, handleDrawerToggle } = props;
  const appBarClasses = classNames({
    [" " + [color]]: color,
  });

  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="absolute"
      className={classNames(appBarClasses)}
      style={{
        // display: "block",
        position: "absolute",
        zIndex: "1029",
        backgroundColor: "transparent",
        marginBottom: "0",
        paddingTop: "10px",
        padding: "10px 0",
        width: "100%",
        minHeight: "50px",
        color: "#555555",
        borderBottom: "0",
        border: "0",
        borderRadius: "3px",
        transition: "all 150ms ease 0s",
        boxShadow: "none",
      }}
    >
      <Toolbar
        style={{
          minHeight: "50px",
          padding: "0 35px",
          marginLeft: "auto",
        }}
      >
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
