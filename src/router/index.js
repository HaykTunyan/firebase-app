import { Route, Routes, Navigate } from "react-router-dom";
import Community from "../pages/community";
import UserList from "../pages/userList";
import UserProfile from "../pages/userProfile";

export const Router = () => {
  return (
    <Routes>
      <Route path="/users-list" index element={<UserList />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/community" element={<Community />} />
      <Route path="*" element={<Navigate to="/users-list" replace />} />
    </Routes>
  );
};
