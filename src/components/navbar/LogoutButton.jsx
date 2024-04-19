import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const LogoutButton = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return <button className="logoutButton" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
