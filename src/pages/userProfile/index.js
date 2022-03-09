import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import MainComponent from "../../components/main";

const UserProfile = () => {
  // Hooks.
  const [profile, useProfile] = useState({
    name: "",
    email: "",
    age: "",
    position: "",
  });

  const location = useLocation();
  console.log(" useLoceetion ", location);

  const handleSubmit = (values) => {
    console.log("value", values);
  };

  return (
    <>
      <MainComponent />

      <Box p={2}>
        <Typography variant="h4" component="h2">
          User Profile
        </Typography>
      </Box>
      <Container>
        <Formik
          initialValues={{
            ...profile,
          }}
          initialForms={profile}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <TextField
                margin="dense"
                id="name"
                defaultValue={profile.name}
                onChange={handleChange}
                label="Name"
                type="text"
                variant="outlined"
                fullWidth
                my={8}
              />
              <TextField
                margin="dense"
                id="email"
                defaultValue={profile.email}
                onChange={handleChange}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                my={8}
              />
              <TextField
                margin="dense"
                id="age"
                defaultValue={profile.age}
                onChange={handleChange}
                label="Age"
                type="number"
                variant="outlined"
                fullWidth
                my={8}
              />
              <TextField
                margin="dense"
                id="position"
                defaultValue={profile.position}
                onChange={handleChange}
                label="Position"
                type="number"
                variant="outlined"
                fullWidth
                my={8}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button variant="contained" type="submit" color="primary">
                  Save
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default UserProfile;
