import React from "react";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Inomma
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default HeaderComponent;
