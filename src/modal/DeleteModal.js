import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import { DeleteForever as DeleteForeverIcon } from "@material-ui/icons";
import fb from "../firebase";

const DeleteModal = ({ id, name }) => {
  // Hooks.
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const removeUser = async () => {
      await fb.removeDocument({ collectionName: "users", documentId: id });
    };
    removeUser();
    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  return (
    <Fragment>
      <IconButton aria-label="settings" size="medium" onClick={handleClickOpen}>
        <DeleteForeverIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogContent>
          <DialogContentText pt={4}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">Delete</Typography>
              <Box px={1} />
              <Typography variant="h6" color="primary">
                {name}
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
        <Divider my={6} />
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            p={1}
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DeleteModal;
