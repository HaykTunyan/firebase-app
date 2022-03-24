import React, { Fragment } from "react";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const HeaderComponent = () => {
  return (
    <Fragment>
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
              Firebase App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default HeaderComponent;
