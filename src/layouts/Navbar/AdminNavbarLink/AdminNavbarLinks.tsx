import { useState } from "react";
import classNames from "classnames";
import {
  ChatBubbleOutline,
  Notifications,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Badge,
  ClickAwayListener,
  Divider,
  Grid,
  Grow,
  IconButton,
  InputBase,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Link,
} from "@mui/material";
import "./../../../index.scss";
import { LOGIN_PAGE } from "../../../constants";

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
    <Grid container>
      <Grid item>
        <InputBase
          placeholder="Search topics"
          startAdornment={
            <Search fontSize="small" sx={{ marginRight: "15px" }} />
          }
          sx={{ marginRight: "10px" }}
        />
      </Grid>

      <Grid item>
        <IconButton
          aria-haspopup="true"
          onClick={handleClickNotification}
          sx={{ marginRight: "10px" }}
        >
          <Badge badgeContent={4} color="success">
            <Notifications fontSize="medium" />
          </Badge>

          <Popper
            open={Boolean(openNotification)}
            anchorEl={openNotification}
            transition
            disablePortal
            className={classNames({ "pointer-event-none": !openNotification })}
            style={{ zIndex: "4", margin: "0px" }}
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
                          textAlign: "left",
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
                          textAlign: "left",
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
                          textAlign: "left",
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
                          textAlign: "left",
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
                          textAlign: "left",
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
        </IconButton>

        <IconButton sx={{ marginRight: "10px" }}>
          <Badge badgeContent={3} color="success">
            <ChatBubbleOutline fontSize="medium" />
          </Badge>
        </IconButton>

        <IconButton
          aria-haspopup="true"
          onClick={handleClickProfile}
          sx={{ marginRight: "10px" }}
        >
          <Person fontSize="medium" />

          <Popper
            open={Boolean(openProfile)}
            anchorEl={openProfile}
            transition
            disablePortal
            className={classNames({ "pointer-event-none": !openProfile })}
            style={{ zIndex: "4", paddingRight: "10px" }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="profile-menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "right top" : "right bottom",
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
                          textAlign: "center",
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
                          textAlign: "center",
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
                          textAlign: "center",
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
                        <Link
                          sx={{
                            textDecoration: "none",
                            color: "#333",
                            fontSize: "13px",
                            fontWeight: "400",
                            lineHeight: "1.4",
                          }}
                          href={LOGIN_PAGE}
                        >
                          Logout
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AdminNavbarLinks;
