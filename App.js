import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const ele = <span> React Element</span>;

const HeadElement = () => (
  <h1 className="head" tabIndex={5}>
    {ele}
    Namaste React using JSX
  </h1>
);

// React Functional Component
// const HeadingComponent = () => {
//     return <h1 className="head" tabIndex={5}>Namaste React using Functional Component</h1>
// }

const HeadingComponent = () => (
  <div className="container">
    <h1 className="head" tabIndex={5}>
      Namaste React using Functional Component
    </h1>
    {HeadElement()}
    <HeadElement />
    <HeadElement></HeadElement>
    {console.log("This is js inside component")}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
