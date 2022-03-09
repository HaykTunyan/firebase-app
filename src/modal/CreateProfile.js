import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { spacing } from "@material-ui/system";
import styled from "styled-components/macro";
import fb from "../firebase";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  TextField as MuiTextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
} from "@material-ui/core";
import { AddCircle as AddCircleIcon } from "@material-ui/icons";

// Spacing.
const TextField = styled(MuiTextField)(spacing);

// Validation Schema.
const ProfileValidation = Yup.object().shape({
  name: Yup.string().required("Name is requrired"),
  email: Yup.string()
    .email("Must be a valid email")
    .min(8, "Must be at least 8 characters")
    .max(255)
    .required("Email is requried"),
  age: Yup.string().required(" Passowrd is required "),
  position: Yup.string().required(" Passowrd is required "),
});

const CreateProfile = () => {
  // Hooks.
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
    position: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    const addUser = async () => {
      const documentId = uuidv4();
      await fb.setDocument({
        collectionName: "users",
        documentId: documentId,
        data: { ...data, id: documentId },
      });
    };

    addUser();
    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  return (
    <Fragment>
      <IconButton aria-label="settings" size="large" onClick={handleClickOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Profile</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              ...profile,
            }}
            initialForms={profile}
            validationSchema={ProfileValidation}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form>
                <TextField
                  margin="dense"
                  id="name"
                  defaultValue={profile.name}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  my={2}
                />
                <TextField
                  margin="dense"
                  id="email"
                  defaultValue={profile.email}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Admin Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  my={2}
                />
                <TextField
                  margin="dense"
                  id="age"
                  defaultValue={profile.age}
                  error={Boolean(touched.age && errors.age)}
                  helperText={touched.age && errors.age}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Age"
                  type="number"
                  variant="outlined"
                  fullWidth
                  my={2}
                />
                <TextField
                  margin="dense"
                  id="position"
                  defaultValue={profile.position}
                  error={Boolean(touched.position && errors.position)}
                  helperText={touched.position && errors.position}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Position"
                  type="text"
                  variant="outlined"
                  fullWidth
                  my={2}
                />
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="contained" type="submit" color="primary">
                    Save
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateProfile;
