import { Dashboard, Notifications, Person, Search } from "@mui/icons-material";
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
import "./../../../index.css";
import CustomInput from "../../CustomInput";
import { useState } from "react";
import RegularButton from "../../Button";

const AdminNavbarLinks = () => {
  const [openNotification, setOpenNotification] = useState<HTMLElement | null>(
    null
  );
  const [openProfile, setOpenProfile] = useState<HTMLElement | null>(null);

  const handleClickNotification = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
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
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
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
    <div>
      <div className="inline-block lg:mt-2.5 lg:mx-3.5 lg:mb-0 lg:fill-available lg:float-right">
        <div className="lg:m-0 lg:z-40 !my-2.5 !mx-3.5 !float-none py-px !p-0 mt-10 w-3/5 text-white">
          <CustomInput
            formControlProps={{}}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search",
              },
            }}
          />
        </div>
        <RegularButton color="white" aria-label="edit" justIcon round>
          <Search className="text-2xl leading-7 w-6 h-8 mr-3.5 -ml-3.5 lg:mx-0" />
        </RegularButton>
      </div>

      <div className="inline-block lg:mt-2.5 lg:mx-3.5 lg:mb-0 lg:fill-available lg:float-right">
        <RegularButton
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Dashboard"
          className="sm:flex sm:mt-2.5 sm:mx-3.5 sm:mb-0 sm:fill-available"
        >
          <Dashboard className="text-2xl leading-7 w-6 h-8 mr-3.5 -ml-3.5 lg:mx-0" />

          <Hidden mdUp implementation="css">
            <p className="z-40 m-0 text-sm">Dashboard</p>
          </Hidden>
        </RegularButton>
      </div>

      <div className="inline-block lg:mt-2.5 lg:mx-3.5 lg:mb-0 lg:fill-available lg:float-right">
        <RegularButton
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className="sm:flex sm:mt-2.5 sm:mx-3.5 sm:mb-0 sm:fill-available"
        >
          <Notifications className="text-2xl leading-7 w-6 h-8 mr-3.5 -ml-3.5 lg:mx-0" />

          <span className="z-40 lg:absolute lg:block lg:w-4 lg:h-4 lg:top-0.5 lg:right-1 lg:rounded-full lg:border-2 lg:border-solid lg:border-white lg:bg-danger-100 lg:text-white lg:text-[9px] lg:text-center lg:align-middle">
            5
          </span>

          <Hidden mdUp implementation="css">
            <p className="z-40 m-0 text-sm">Notification</p>
          </Hidden>
        </RegularButton>

        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className="pointer-events-none "
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

      <div className="inline-block lg:mt-2.5 lg:mx-3.5 lg:mb-0 lg:fill-available lg:float-right">
        <RegularButton
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className="sm:flex sm:mt-2.5 sm:mx-3.5 sm:mb-0 sm:fill-available"
        >
          <Person className="text-2xl leading-7 w-6 h-8 mr-3.5 -ml-3.5 lg:mx-0" />

          <Hidden mdUp implementation="css">
            <p className="z-40 m-0 text-sm">Profile</p>
          </Hidden>
        </RegularButton>

        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className="pointer-events-none "
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
