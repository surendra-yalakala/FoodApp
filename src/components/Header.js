/**
 * created by surendra yalakala
 */

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const AuthenticateUser = () => {
    setLoggedIn(!loggedIn);
  };

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-200">
      <div>
        <img className="h-28 p-2" src={LOGO_URL} />
      </div>
      <div className="pl-10">
        <ul className="flex pl-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <Link to="/aboutus">
            <li className="px-2">About us</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact US</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">InstaMart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart - {cartItems?.length} items</li>
          </Link>
        </ul>
      </div>
      <p className="p-2 font-bold">{user?.name}</p>
      {loggedIn ? (
        <button onClick={() => AuthenticateUser()}>Logout</button>
      ) : (
        <button onClick={() => AuthenticateUser()}>Login</button>
      )}
    </div>
  );
};

export default Header;
