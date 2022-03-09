import axios from "axios";
import { httpClient } from "../../../core/httpClient";
import { store } from "../../store";
import { userSlice } from "./userStore";

const { setAllUsers } = userSlice.actions;

class UserService {
  getAllusers(params) {
    httpClient
      .get("/users", {
        params,
      })
      .then(({ data }) => {
        store.dispatch(setAllUsers(data));
      });
  }

  getUserById(id) {}

  creteUser(body) {}

  deleteUser(id) {}

  editUser(id, body) {}
}

export const userService = new UserService();
