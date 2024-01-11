import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <div className="Header">
    <a href="#" className="logo">
      LOGO
    </a>
    <div className="search">
      <a href="#" className="searchBar">
        Search
      </a>
      <input type="text" className="searchInput" />
    </div>
    <a href="#" className="userIcon">
      User
    </a>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent></HeaderComponent>);
