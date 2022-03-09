import React, { Fragment } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MainComponent from "../../components/main";

const UserProfile = () => {
  // Hooks.
  const location = useLocation();
  const profile = location.state;

  return (
    <Fragment>
      <MainComponent />
      <Box p={2}>
        <Typography variant="h4" component="h2">
          User Profile
        </Typography>
      </Box>
      <Container>
        <Grid container pt={6} spacing={6}>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              User Id
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              {profile.id}
            </Typography>
          </Grid>
        </Grid>
        <Grid container pt={6} spacing={6}>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              User Name
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              {profile.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container pt={6} spacing={6}>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              User Email
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              {profile.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid container pt={6} spacing={6}>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              User Age
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              {profile.age}
            </Typography>
          </Grid>
        </Grid>
        <Grid container pt={6} spacing={6}>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              User Position
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} display="flex" alignItems="center">
            <Typography variant="subtitle1" color="inherit" component="div">
              {profile.position}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default UserProfile;
