/**
 * created by surendra yalakala
 */

import { useState } from "react";
import { Link } from "react-router-dom";

import "../index.css";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const AuthenticateUser = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact US</li>
          </Link>
          <Link to="/instamart">
            <li>InstaMart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {loggedIn ? (
        <button onClick={() => AuthenticateUser()}>Logout</button>
      ) : (
        <button onClick={() => AuthenticateUser()}>Login</button>
      )}
    </div>
  );
};

export default Header;
