import React from "react";
import ReactDOM from "react-dom/client";

const NestedHeader = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", null, "Main Header"),
  React.createElement("h2", null, "Subheader 1"),
  React.createElement("h3", null, "Subheader 2")
);

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(NestedHeader);
