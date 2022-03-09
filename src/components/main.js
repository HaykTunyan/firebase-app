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
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <>
      <Box p={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/users-list">User List</Link>
          <Link to="/community">Community</Link>
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default MainComponent;
