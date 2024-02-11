import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("UseEffect called");
  });

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log("THe context data :", loggedInUser);

  // Subscribing to the store using the selectors
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li className="text-lg">
            Online Status : {onlineStatus === false ? "🔴" : "✅"}
          </li>
          <li className="text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            className="mx-1 font-small text-lg"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}: {loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
