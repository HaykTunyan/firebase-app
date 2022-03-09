import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import MainComponent from "../../components/main";
import EditProfile from "../../modal/EditProfile";
import CreateProfile from "../../modal/CreateProfile";
import DeleteModal from "../../modal/DeleteModal";
import { Refresh as RefreshIcon } from "@material-ui/icons";
import fb from "../../firebase";

const Community = () => {
  // Hooks.
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  const updateList = async () => {
    const usersData = await fb.getCollection({ collectionName: "users" });
    const users = usersData.docs.map((user) => user.data());
    setUsers(users);
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fb.getCollection({ collectionName: "users" });
      const users = usersData.docs.map((user) => user.data());
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <Fragment>
      <Box p={2}>
        <MainComponent />
      </Box>
      <Container>
        <Box p={2} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" component="h2">
            Community
          </Typography>
          <Box>
            <IconButton
              aria-label="settings"
              size="medium"
              color="primary"
              mx={2}
              onClick={updateList}
            >
              <RefreshIcon />
            </IconButton>
            <CreateProfile />
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Position</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <EditProfile
                          id={row.id}
                          name={row.name}
                          email={row.email}
                          age={row.age}
                          position={row.position}
                        />
                        <DeleteModal id={row.id} name={row.name} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Container>
    </Fragment>
  );
};

export default Community;
