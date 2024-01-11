import React from "react";
import ReactDOM from "react-dom/client";

const NewEle = () => <p>This is Component composition</p>;

const Element = function () {
  const divAttributes = { className: "title" };
  const h1Attributes = { style: { color: "blue" } };
  return (
    <div {...divAttributes}>
      <h1 {...h1Attributes}>Header</h1>
      <h2>Subheader 1</h2>
      <h3>Subheader 2</h3>
      {<NewEle />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element />);
