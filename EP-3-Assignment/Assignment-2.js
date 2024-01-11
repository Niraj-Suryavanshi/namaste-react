import React from "react";
import ReactDOM from "react-dom/client";

const element = (
  <div className="title">
    <h1>Header</h1>
    <h2>Subheader 1</h2>
    <h3>Subheader 2</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
