/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "./images/logo.png";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><img src={logo} style={{ width:"10rem",alignItems:"center", paddingLeft:"25rem"}} /> </span>
        </Link>
        {user ? (
         <LogoutButton />
        ) : (
          <div className="navItems">
            {/* <Link to="/signup">
              <button className="navButton">Register</button>
            </Link> */}
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
