import {
  Drawer,
  Hidden,
  Icon,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import "./../../index.scss";
import { NavLink } from "react-router-dom";
import {
  BubbleChart,
  Dashboard,
  LibraryBooks,
  LocationOn,
  Notifications,
  Person,
} from "@mui/icons-material";
import AdminNavbarLinks from "../Navbar/AdminNavbarLink";

const Sidebar = (props: any) => {
  const { color, logo, image, logoText, open, handleDrawerToggle } = props;

  function activeRoute(routeName: string): boolean {
    return window.location.href.indexOf(routeName) > -1 ? false : true;
  }

  const menu = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: Dashboard,
    },
    {
      path: "/SuperAdmin",
      name: "SuperAdmin",
      icon: Person,
    },
    {
      path: "/user",
      name: "User Profile",
      icon: Person,
    },
    {
      path: "/table",
      name: "Table List",
      icon: "content_paste",
    },
    {
      path: "/typography",
      name: "Typography",
      icon: LibraryBooks,
    },
    {
      path: "/icons",
      name: "Icons",
      icon: BubbleChart,
    },
    {
      path: "/maps",
      name: "Maps",
      icon: LocationOn,
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: Notifications,
    },
  ];

  const links = (
    <List className="mt-5 py-0 pl-0 mb-0 list-none static">
      {menu.map((prop: any, key: any) => {
        const activePro = prop.path === "/upgrade-to-pro" ? "activePro " : " ";
        const listItemClasses =
          prop.path === "/upgrade-to-pro"
            ? color
            : activeRoute(prop.path)
            ? color
            : " ";
        const whiteFontClasses = activeRoute(prop.path) ? "whiteFont" : " ";
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "white",
              };
            }}
            to={prop.path}
            className={activePro + "relative block no-underline"}
            key={key}
          >
            <ListItem
              button
              className={
                "w-auto transition-all duration-300 ease-linear mt-2.5 mx-3.5 rounded relative block py-2.5 px-3.5 bg-transparent" +
                listItemClasses
              }
            >
              {typeof prop.icon === "string" ? (
                <Icon
                  className={
                    "w-6 h-8 text-2xl leading-7 float-left mr-3.5 text-center align-middle text-white bg-opacity-80" +
                    whiteFontClasses
                  }
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={
                    "w-6 h-8 text-2xl leading-7 float-left mr-3.5 text-center align-middle text-white bg-opacity-80" +
                    whiteFontClasses
                  }
                />
              )}
              <ListItemText
                primary={prop.name}
                className={
                  "m-0 leading-7 text-sm text-white font-thin" +
                  whiteFontClasses
                }
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  const brand = (
    <div className="relative px-3.5 py-3.5 z-50 after:absolute after:bottom-0 after:right-3.5 after:h-px after:w-[calc(100% - 30px)] after:bg-gray-700">
      <a
        target="_blank"
        className="uppercase py-1 block text-white text-left text-lg font-bold leading-7 no-underline bg-transparent border-b-2 border-solid border-gray-800"
      >
        <div className="w-7 inline-block max-h-7 ml-2.5 mr-3.5">
          <img
            src={logo}
            alt="logo"
            className="w-9 top-5 absolute align-middle border-0"
          />
        </div>
        {logoText}
      </a>
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          anchor={"left"}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="z-50 boxShadow block fixed top-0 left-auto right-0 w-64 h-full text-left px-0"
        >
          {brand}
          <div className="relative h-[calc(100vh - 75px)] w-64 z-50">
            <AdminNavbarLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className="absolute z-10 h-full w-full block top-0 left-0 bg-cover bg-center after:absolute after:z-30 after:w-full after:h-full after:block after:bg-black after:opacity-80"
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>

      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          open
          className="border-0 boxShadow fixed top-0 bottom-0 left-0 z-50 w-64 h-full block text-left"
        >
          {brand}
          <div className="relative h-[calc(100vh - 75px)] w-64 z-50">
            {links}
          </div>
          {image !== undefined ? (
            <div
              className="absolute z-10 h-full w-full block top-0 left-0 bg-cover bg-center after:absolute after:z-30 after:w-full after:h-full after:block after:bg-black after:opacity-80"
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  open: PropTypes.bool,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  color: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
};

export default Sidebar;
