import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  TextField,
} from "@material-ui/core";

import { Edit as EditIcon } from "@material-ui/icons";
import fb from "../firebase";

const EditProfile = ({ id, name, email, age, position }) => {
  // Hooks.
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    id: id,
    name: name,
    email: email,
    age: age,
    position: position,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (value) => {
    console.log(" value ", value);
    const editUser = async () => {
      await fb.setDocument({
        collectionName: "users",
        documentId: id,
        data: value,
      });
    };
    editUser();
    handleClose();
  };

  return (
    <Fragment>
      <IconButton aria-label="settings" size="medium" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              ...profile,
            }}
            initialForms={profile}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
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
                  label="Admin Email"
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
                  type="text"
                  variant="outlined"
                  fullWidth
                  my={8}
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

export default EditProfile;
