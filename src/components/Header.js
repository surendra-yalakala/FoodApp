/**
 * created by surendra yalakala
 */

import { useState } from "react";
import "../index.css";
import { LOGO_URL } from "../utils/Constants";

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
          <li>Home</li>
          <li>About us</li>
          <li>Contact US</li>
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
