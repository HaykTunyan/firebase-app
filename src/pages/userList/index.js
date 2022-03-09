import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  Typography,
  Box,
} from "@material-ui/core";
import { RemoveRedEye as RemoveRedEyeIcon } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userService } from "../../module/reducerModule/userModule/userService";
import MainComponent from "../../components/main";

const rows = [
  {
    key: 0,
    id: "0001",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 1,
    id: "0002",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 2,
    id: "0003",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 3,
    id: "0004",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 4,
    id: "0005",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 5,
    id: "0006",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 6,
    id: "0007",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 7,
    id: "0008",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
  {
    key: 8,
    id: "0009",
    name: "Name",
    email: "email@name.gmail",
    age: "10",
    position: "Top",
  },
];

const UserList = () => {
  //  Hooks.
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { users } = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    userService.getAllusers();
  }, []);

  console.log(" users ", users);

  const openProfile = (id) => {
    navigate("/user-profile", { state: { id } });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <>

<Box p={2}>
        <MainComponent />
      </Box>
   
      
      <Container>
      <Box p={2}>
        <Typography variant="h4" component="h2">
          User List
        </Typography>
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
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.key}>
                    <TableCell component="th" scope="row">
                      {row.key}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="medium"
                        aria-label="details"
                        onClick={() => openProfile(rows.id)}
                      >
                        <RemoveRedEyeIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Container>
    </>
  );
};

export default UserList;
