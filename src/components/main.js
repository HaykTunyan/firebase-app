import React, { Fragment } from "react";
import { Box, Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <Fragment>
      <Box p={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/users-list">User List</Link>
          <Link to="/community">Community</Link>
        </Breadcrumbs>
      </Box>
    </Fragment>
  );
};

export default MainComponent;
