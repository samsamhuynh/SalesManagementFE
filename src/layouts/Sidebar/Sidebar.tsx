import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Hidden,
  Icon,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Dashboard from "@mui/icons-material/Dashboard";
import PropTypes from "prop-types";

const Sidebar = (props: any) => {
  const { logo, image, logoText, open, handleDrawerToggle } = props;

  const menu = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: Dashboard,
    },
  ];

  const links = (
    <List>
      {menu.map((prop: any, key: any) => (
        //<NavLink to={prop.path} key={key}>
        //  <ListItem>
        //  {prop.icon}
        <span key={key}>abc</span>

        //</List> <ListItemText primary={prop.name} disableTypography={true} />
        //    </ListItem>
        //  </NavLink>
      ))}
    </List>
  );

  const brand = (
    <div>
      <a
        // href="https://www.creative-tim.com?ref=mdr-sidebar"
        target="_blank"
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        {logoText}
      </a>
    </div>
  );

  return (
    <div>
      <Hidden>
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div>{links}</div>
          {image !== undefined ? (
            <div style={{ backgroundImage: "url(" + image + ")" }} />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden>
        <Drawer
          variant="permanent"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div>{links}</div>
          {image !== undefined ? (
            <div style={{ backgroundImage: "url(" + image + ")" }} />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  open: PropTypes.bool,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
};

export default Sidebar;
