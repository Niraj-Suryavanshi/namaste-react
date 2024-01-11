import React from "react";
import ReactDOM from "react-dom/client";

/**
 *- Header
 *    -Logo
 *    -Nav Items
 *
 *- Body
 *    -Search
 *    -Restaurant Container
 *      -Restaurant Card
 *
 *- Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/533d5ee221cb729dcf42faeb8761f57d"
        alt="res-logo"
      />
      <div className="res-desc">
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 Stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-main">
        <div className="res-container">
          <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
          <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
          <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
          <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
