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
import classNames from "classnames";

const Sidebar = (props: any) => {
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

  const { color, logo, image, logoText, open, handleDrawerToggle } = props;

  function activeRoute(routeName: string): boolean {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  const links = (
    <List className="mt-5 py-0 pl-0 mb-0 list-none static" style={{}}>
      {menu.map((prop: any, key: any) => {
        let activePro = " ";
        let listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = "absolute w-full bottom-3" + " ";
          listItemClasses = classNames({
            [" " + [color]]: true,
          });
        } else {
          listItemClasses = classNames({
            [" " + [color]]: activeRoute(prop.path),
          });
        }

        const whiteFontClasses = classNames({
          "text-white": activeRoute(prop.path),
        });

        return (
          <NavLink
            style={({ isActive }) => {
              return {
                background: isActive ? "blue" : "transparent",
              };
            }}
            to={prop.path}
            className={classNames(activePro + "relative block no-underline")}
            key={key}
          >
            <ListItem
              button
              sx={{
                width: "auto",
                transition: "all 300ms linear",
                margin: "10px 15px 0",
                borderRadius: "3px",
                position: "relative",
                display: "block",
                padding: "10px 15px",
                backgroundColor: "transparent",
              }}
              className={classNames(listItemClasses)}
            >
              {typeof prop.icon === "string" ? (
                <Icon
                  sx={{
                    width: "24px",
                    height: "30px",
                    fontSize: "24px",
                    lineHeight: "30px",
                    float: "left",
                    marginRight: "15px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  className={classNames(whiteFontClasses)}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  style={{
                    width: "24px",
                    height: "30px",
                    fontSize: "24px",
                    lineHeight: "30px",
                    float: "left",
                    marginRight: "15px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  className={classNames(whiteFontClasses)}
                />
              )}
              <ListItemText
                primary={prop.name}
                sx={{
                  margin: "0",
                  lineHeight: "30px",
                  fontSize: "14px",
                  color: "white",
                }}
                className={classNames(whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  const brand = (
    <div className="relative p-[15px] z-50 after:absolute after:bottom-0 after:right-[15px] after:h-px after:w-[calc(100%-30px)] after:bg-gray-700">
      <a
        target="_blank"
        className="uppercase py-1 block text-white text-left text-lg font-bold leading-7 no-underline bg-transparent hover:text-white"
      >
        <div className="w-[30px] inline-block max-h-[30px] ml-2.5 mr-[15px]">
          <img
            src={logo}
            alt="logo"
            className="w-[35px] top-[22px] absolute align-middle border-0"
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
          classes={{
            paper: classNames(
              "z-50 boxShadow block fixed top-0 bottom-0 left-auto right-0 w-[260px] h-screen border-0 text-left px-0"
            ),
          }}
        >
          {brand}
          <div className="relative h-[calc(100vh-75px)] w-[260px] overflow-auto z-50">
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
          classes={{
            paper: classNames(
              "z-50 boxShadow fixed top-0 bottom-0 left-0 w-[260px] h-full border-0 text-left"
            ),
          }}
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
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  open: PropTypes.bool,
};

export default Sidebar;
