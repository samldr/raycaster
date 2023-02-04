import React from "react";
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export const SceneMenu = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <>
      <IconButton
        color="action"
        size="large"
        id="sceneButton"
        onClick={handleClick}
      >
        <MenuIcon fontSize="large"></MenuIcon>
      </IconButton>
      <Menu
        id="editScene"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>2323333332</MenuItem>
        <MenuItem onClick={handleClose}>3</MenuItem>
        <h2>test</h2>
      </Menu>
    </>
  );
};
