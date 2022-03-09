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

  getUserById(id) {
    httpClient
      .get("/users", {
        id,
      })
      .then(({ data }) => {
        store.dispatch(setAllUsers(data));
      });
  }

  creteUser(body) {
    httpClient
      .post("/users", {
        body,
      })
      .then(({ data }) => {
        store.dispatch(setAllUsers(data));
      });
  }

  deleteUser(id) {
    httpClient
      .delete("/users", {
        id,
      })
      .then(({ data }) => {
        store.dispatch(setAllUsers(data));
      });
  }

  editUser(id, body) {
    httpClient
      .post("/users", {
        id,
        body,
      })
      .then(({ data }) => {
        store.dispatch(setAllUsers(data));
      });
  }
}

export const userService = new UserService();
