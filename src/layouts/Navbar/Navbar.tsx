import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Button, Hidden } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Header = (props: any) => {
  return (
    <AppBar className="">
      <Toolbar>
        <Hidden implementation="css"></Hidden>
        <Hidden implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
};

export default Header;
