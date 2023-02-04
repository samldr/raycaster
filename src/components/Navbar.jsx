import React from "react";
import { SceneMenu } from "./Menu.jsx";
import "./navbar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CallMissed from "@mui/icons-material/CallMissed";
import KeyboardTab from "@mui/icons-material/KeyboardTab";
import TurnSlightRight from "@mui/icons-material/TurnSlightRight";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Settings from "@mui/icons-material/Settings";
import Add from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import { SettingsForm } from "./SettingsForm";
import { ListView } from "./ListView";

export const Navbar = () => {
  //new button
  const [newAnchor, setNewAnchor] = React.useState(null);
  const newOpen = Boolean(newAnchor);
  const handleNewClick = (event) => {
    setNewAnchor(event.currentTarget);
  };
  const handleNewClose = () => {
    setNewAnchor(null);
  };

  //settings button
  const [settingsAnchor, setSettingsAnchor] = React.useState(null);
  const settingsOpen = Boolean(settingsAnchor);
  const handleSettingsClick = (event) => {
    setSettingsAnchor(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setSettingsAnchor(null);
  };

  //list button
  const [listAnchor, setListAnchor] = React.useState(null);
  const listOpen = Boolean(listAnchor);
  const handleListClick = (event) => {
    setListAnchor(event.currentTarget);
  };
  const handleListClose = () => {
    setListAnchor(null);
  };

  return (
    // <AppBar position="static">
    //   <Toolbar variant="dense">
    //   <IconButton
    //     color="action"
    //     size="large"
    //     id="sceneButton"
    //     onClick={handleClick}
    //   >
    //     <MenuIcon fontSize="large"></MenuIcon>
    //   </IconButton>
    //     <Typography variant="h6" color="inherit" component="div">
    //       Photos
    //     </Typography>
    //   </Toolbar>
    // </AppBar>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Lightroom
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleNewClick}
            >
              <Add />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleListClick}
            >
              <FormatListBulletedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleSettingsClick}
            >
              <Settings />
            </IconButton>

            <Drawer
              anchor="right"
              open={settingsOpen}
              onClose={handleSettingsClose}
            >
              <SettingsForm></SettingsForm>
            </Drawer>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={newAnchor}
              open={newOpen}
              onClose={handleNewClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleNewClose}>
                <ListItemIcon>
                  <CallMissed fontSize="small" />
                </ListItemIcon>
                New Mirror
              </MenuItem>
              <MenuItem onClick={handleNewClose}>
                <ListItemIcon>
                  <KeyboardTab fontSize="small" />
                </ListItemIcon>
                New Wall
              </MenuItem>
              <MenuItem onClick={handleNewClose}>
                <ListItemIcon>
                  <TurnSlightRight fontSize="small" />
                </ListItemIcon>
                New Dialectric
              </MenuItem>
              <MenuItem onClick={handleNewClose}>
                <ListItemIcon>
                  <Lightbulb fontSize="small" />
                </ListItemIcon>
                New Light Source
              </MenuItem>
            </Menu>
            <Drawer anchor="right" open={listOpen} onClose={handleListClose}>
              <ListView></ListView>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
