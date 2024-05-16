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
import CustomInput from "../../../components/CustomInput";
import Button from "../../../components/Button";

const AdminNavbarLinks = () => {
  const [openNotification, setOpenNotification] = useState<null | HTMLElement>(
    null
  );

  const [openProfile, setOpenProfile] = useState<null | HTMLElement>(null);

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

  const handleClickProfile = (event: any) => {
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
    <div>
      <div
        className={
          "lg:inline-block flex flex-row mt-2.5 mx-5 w-[-webkit-stretch]"
        }
      >
        <CustomInput
          formControlProps={{
            className: classNames(
              "lg:m-0 lg:z-40 !my-2.5 !mx-[15px] !float-none py-px !p-px mt-10 w-3/5"
            ),
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        />

        <Button color="white" aria-label="edit" justIcon round>
          <Search
            style={{
              top: "-50px !important",
              float: "right",
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

      <div className={"inline-block"}>
        <Button
          color={window.innerWidth > 900 ? "transparent" : "white"}
          justIcon={window.innerWidth > 900}
          simple={!(window.innerWidth > 900)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={classNames(
            "flex ml-[30px] w-auto sm:flex sm:mt-2.5 sm:mx-[15px] sm:mb-0 sm:w-[-webkit-fill-available]"
          )}
        >
          <Notifications
            style={{
              color: "gray",
              fontSize: "24px",
              lineHeight: "30px",
              width: "24px",
              height: "30px",
              marginRight: "15px",
              marginLeft: "8px",
              textAlign: "center",
              verticalAlign: "middle",
              position: "relative",
            }}
          />

          <span
            className={
              "z-40 mr-[15px] leading-7 text-sm text-white font-thin lg:absolute lg:block lg:bg-danger-100 lg:top-0 lg:right-1 lg:w-4 lg:h-4 lg:rounded-full lg:text-[9px] lg:font-thin lg:leading-4 lg:text-center lg:align-middle"
            }
          >
            5
          </span>

          <Hidden mdUp implementation="css">
            <p
              onClick={handleCloseNotification}
              className={"m-0 leading-7 text-sm text-white font-thin"}
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
                  <MenuList role="menu">
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

      <div className={"inline-block"}>
        <Button
          color={window.innerWidth > 900 ? "transparent" : "white"}
          justIcon={window.innerWidth > 900}
          simple={!(window.innerWidth > 900)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classNames(
            "flex ml-[30px] w-auto sm:flex sm:mt-2.5 sm:mx-[15px] sm:mb-0 sm:w-[-webkit-fill-available]"
          )}
        >
          <Person
            style={{
              color: "gray",
              fontSize: "24px",
              lineHeight: "30px",
              width: "24px",
              height: "30px",
              marginRight: "15px",
              marginLeft: "8px",
              textAlign: "center",
              verticalAlign: "middle",
              position: "relative",
            }}
          />

          <Hidden mdUp implementation="css">
            <p className={"m-0 leading-7 text-sm text-white font-thin"}>
              Profile
            </p>
          </Hidden>
        </Button>

        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ "pointer-event-none": !openProfile })}
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
                  <MenuList role="menu">
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
