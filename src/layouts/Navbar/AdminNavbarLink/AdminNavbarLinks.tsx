import { useState } from "react";
import classNames from "classnames";
import { Notifications, Person, Search } from "@mui/icons-material";
import {
  ClickAwayListener,
  Divider,
  Grow,
  Hidden,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import "./../../../index.scss";
import CustomInput from "../../CustomInput";
import Button from "../../Button";

const AdminNavbarLinks = () => {
  const [openNotification, setOpenNotification] = useState<any>(null);

  const [openProfile, setOpenProfile] = useState<any>(null);

  const handleClickNotification = (event: any) => {
    if (
      openNotification &&
      openNotification.contains(event.target as HTMLElement)
    ) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClickProfile = (event: Event) => {
    if (openProfile && openProfile.contains(event.target as HTMLElement)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  return (
    <div className="lg:flex lg:flex-row flex flex-col">
      <div className="flex flex-row w-6 h-8 transition-all duration-300 ease-linear mt-2.5 mx-3.5 rounded relative bg-transparent fill-available p-0 lg:mx-0">
        <CustomInput
          formControlProps={{
            className: classNames(
              "lg:m-0 lg:z-40 !my-2.5 !mx-3.5 !float-none py-px !p-0 mt-10 w-3/5"
            ),
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        />

        <Button aria-label="edit" justIcon round>
          <Search
            style={{
              color: "gray",
              fontSize: "24px",
              lineHeight: "30px",
              width: "24px",
              height: "30px",
              marginRight: "5px",
              marginLeft: "5px",
              textAlign: "center",
              verticalAlign: "middle",
              position: "relative",
            }}
          />
        </Button>
      </div>

      <div className="inline-block max-w-6 h-8 transition-all duration-300 ease-linear mt-2.5 mx-3.5 rounded relative bg-transparent fill-available p-0 lg:mx-3">
        <Button
          color={window.innerWidth > 900 ? "transparent" : "white"}
          justIcon={window.innerWidth > 900}
          simple={!(window.innerWidth > 900)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          sx={{ px: 0 }}
          className={classNames("sm:flex sm:mt-2.5 sm:mx-3.5 sm:mb-0")}
        >
          <Notifications
            // className="w-6 h-8 text-2xl leading-7 float-left mr-3.5 text-center align-middle text-white bg-opacity-80 lg:text-inherit relative"
            style={{
              color: "gray",
              fontSize: "24px",
              lineHeight: "30px",
              width: "24px",
              height: "30px",
              marginRight: "5px",
              marginLeft: "5px",
              textAlign: "center",
              verticalAlign: "middle",
              position: "relative",
            }}
          />

          <span className="z-40 mr-3.5 leading-7 text-sm text-white font-thin lg:absolute lg:block lg:bg-danger-100 lg:top-0 lg:right-3 lg:w-4 lg:h-4 lg:rounded-full lg:text-[9px] lg:font-thin lg:leading-4 lg:text-center lg:align-middle">
            5
          </span>

          <Hidden mdUp implementation="css">
            <p
              onClick={handleCloseNotification}
              className="m-0 leading-7 text-sm text-white font-thin"
            >
              Notification
            </p>
          </Hidden>
        </Button>

        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={classNames({ "pointer-event-none": !openNotification })}
          style={{ zIndex: "4", fontSize: "14px", margin: "0px" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu" autoFocusItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      Mike John responded to your email
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      You have 5 new tasks
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      You{"'"}re now friend with Andrew
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      Another Notification
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

      <div className="inline-block max-w-6 h-8 transition-all duration-300 ease-linear mt-2.5 mx-3.5 rounded relative bg-transparent fill-available p-0 lg:mx-3">
        <Button
          color={window.innerWidth > 900 ? "transparent" : "white"}
          justIcon={window.innerWidth > 900}
          simple={!(window.innerWidth > 900)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          sx={{ px: 0 }}
          className={classNames("sm:flex sm:mt-2.5 sm:mx-3.5 sm:mb-0")}
        >
          <Person
            style={{
              color: "gray",
              fontSize: "24px",
              lineHeight: "30px",
              width: "24px",
              height: "30px",
              marginRight: "5px",
              marginLeft: "5px",
              textAlign: "center",
              verticalAlign: "middle",
              position: "relative",
            }}
          />

          <Hidden mdUp implementation="css">
            <p className="m-0 leading-7 text-sm text-white font-thin">
              Profile
            </p>
          </Hidden>
        </Button>

        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ "pointer-event-none": !openNotification })}
          style={{ zIndex: "4", fontSize: "14px", margin: "0px" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu" autoFocusItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      Profile
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseProfile}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      Settings
                    </MenuItem>

                    <Divider light />

                    <MenuItem
                      onClick={handleCloseProfile}
                      style={{
                        color: "#333",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        margin: "0 5px",
                        height: "unset",
                        minHeight: "unset",
                        display: "block",
                        clear: "both",
                        borderRadius: "2px",
                        transition: "all 150ms linear",
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default AdminNavbarLinks;
