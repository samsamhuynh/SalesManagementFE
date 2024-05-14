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
              className={classNames(
                "w-auto transition-all duration-300 ease-linear mt-2.5 mx-[15px] rounded relative block py-2.5 px-[15px] bg-transparent" +
                  listItemClasses
              )}
            >
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(
                    "w-6 h-8 text-2xl leading-7 float-left mr-[15px] text-center align-middle text-white bg-opacity-80",
                    whiteFontClasses
                  )}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(
                    "w-6 h-8 text-2xl leading-7 float-left mr-[15px] text-center align-middle text-white bg-opacity-80",
                    whiteFontClasses
                  )}
                />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(
                  "m-0 leading-7 text-sm text-white font-thin",
                  whiteFontClasses
                )}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  const brand = (
    <div
      className={
        "relative p-[15px] z-50 after:absolute after:bottom-0 after:right-[15px] after:h-px after:w-[calc(100% - 30px)] after:bg-gray-700"
      }
    >
      <a
        target="_blank"
        className={
          "uppercase py-1 block text-white text-left text-lg font-bold leading-7 no-underline bg-transparent border-b-2 border-solid border-gray-800"
        }
      >
        <div className={"w-7 inline-block max-h-7 ml-2.5 mr-[15px]"}>
          <img
            src={logo}
            alt="logo"
            className={"w-9 top-5 absolute align-middle border-0"}
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
              "z-50 block fixed top-0 bottom-0 left-auto right-0 w-[260px] h-full text-left px-0 boxShadow"
            ),
          }}
        >
          {brand}
          <div
            className={
              "relative h-[calc(100vh - 75px)] w-[260px] z-50 overflow-auto"
            }
          >
            <AdminNavbarLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={
                "absolute z-10 h-full w-full block top-0 left-0 bg-cover bg-center after:absolute after:z-30 after:w-full after:h-full after:block after:bg-black after:opacity-80"
              }
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
              "z-50 block fixed top-0 bottom-0 left-auto right-0 w-[260px] h-full text-left px-0 boxShadow"
            ),
          }}
        >
          {brand}
          <div
            className={
              "relative h-[calc(100vh - 75px)] w-[260px] z-50 overflow-auto"
            }
          >
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={
                "absolute z-10 h-full w-full block top-0 left-0 bg-cover bg-center after:absolute after:z-30 after:w-full after:h-full after:block after:bg-black after:opacity-80"
              }
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
