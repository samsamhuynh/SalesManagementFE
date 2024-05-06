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
import React, { useState } from "react";
import RegularButton from "../../Button";
import classNames from "classnames";

const AdminNavbarLinks = () => {
  const [openNotification, setOpenNotification] = useState<HTMLElement | null>(
    null
  );

  const [openProfile, setOpenProfile] = useState<HTMLElement | null>(null);

  const handleClickNotification = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = event.currentTarget;
    if (openNotification && openNotification.contains(target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(target);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClickProfile = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = event.currentTarget;
    if (openProfile && openProfile.contains(target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(target);
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

        <RegularButton aria-label="edit" justIcon round>
          <Search className="w-8 h-8 text-2xl leading-7 text-center align-middle text-inherit bg-white rounded-full" />
        </RegularButton>
      </div>

      <div className="inline-block max-w-6 h-8 transition-all duration-300 ease-linear mt-2.5 mx-3.5 rounded relative bg-transparent fill-available p-0 lg:mx-3">
        <RegularButton
          color={window.innerWidth > 900 ? "transparent" : "white"}
          justIcon={window.innerWidth > 900}
          simple={!(window.innerWidth > 900)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          sx={{ px: 0 }}
        >
          <Notifications className="w-6 h-8 text-2xl leading-7 float-left mr-3.5 text-center align-middle text-white bg-opacity-80 lg:text-inherit relative" />

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
        </RegularButton>

        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ "pointer-event-none": !openNotification }) +
            " " +
            "sm:!static sm:!left-auto sm:!top-auto sm:!transform-none sm:!will-change-auto"
          }
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
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
                    >
                      Mike John responded to your email
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
                    >
                      You have 5 new tasks
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
                    >
                      You{"'"}re now friend with Andrew
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
                    >
                      Another Notification
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseNotification}
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
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
        <RegularButton
          color={window.innerWidth > 900 ? "transparent" : "white"}
          justIcon={window.innerWidth > 900}
          simple={!(window.innerWidth > 900)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          sx={{ px: 0 }}
        >
          <Person className="w-6 h-8 text-2xl leading-7 float-left mr-3.5 text-center align-middle text-white bg-opacity-80 lg:text-inherit relative" />

          <Hidden mdUp implementation="css">
            <p className="m-0 leading-7 text-sm text-white font-thin">
              Profile
            </p>
          </Hidden>
        </RegularButton>

        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ "pointer-event-none": !openProfile }) +
            " " +
            "sm:!static sm:!left-auto sm:!top-auto sm:!transform-none sm:!will-change-auto"
          }
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
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
                    >
                      Profile
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseProfile}
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
                    >
                      Settings
                    </MenuItem>

                    <Divider light />

                    <MenuItem
                      onClick={handleCloseProfile}
                      className="text-[13px] font-normal leading-7 text-gray-900 whitespace-nowrap py-2.5 px-5 my-0 mx-[5px] h-auto min-w-auto rounded-sm block clear-both hover:bg-primary-100 hover:text-white hover:primaryBoxShadow"
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
