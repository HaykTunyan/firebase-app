import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  TextField as MuiTextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddCircle as AddCircleIcon } from "@material-ui/icons";
import fb from "../firebase";
import { v4 as uuidv4 } from "uuid";

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
    handleClose();
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

export default CreateProfile;
