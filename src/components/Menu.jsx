import React from 'react'
import { useState } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu';

export const SceneMenu = () => {
  
  const [anchorElement, setAnchorElement] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorElement)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorElement(null)
  }
  return (
    <>
    <Button startIcon={<MenuIcon/>} id="sceneButton" onClick={handleClick}>
      <IconButton></IconButton>
    </Button>
    <Menu id="editScene" anchorEl={anchorElement} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>2323333332</MenuItem>
      <MenuItem onClick={handleClose}>3</MenuItem>
    </Menu>
    </>
  )
}
