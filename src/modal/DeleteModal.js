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
} from "@material-ui/core";
import { DeleteForever as DeleteForeverIcon } from "@material-ui/icons";
import fb from "../firebase";

const DeleteModal = ({ id }) => {
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
    handleClose();
  };

  return (
    <Fragment>
      <IconButton aria-label="settings" size="medium" onClick={handleClickOpen}>
        <DeleteForeverIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogContent>
          <DialogContentText pt={4} textAlign="center">
            Delter Profile
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
              Delete Item
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DeleteModal;
