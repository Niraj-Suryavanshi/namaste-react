import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React 🚀"
// );

// console.log(heading);

// jsx (transpiled before it reaches the JS)-> PARCEL -> Babel

// jsx => Babel transpiles it into React.createElement => ReactElement-JS Object => HTMlElement(render)

const jsxHeading = <h1 id="heading" className="head" tabIndex="5">
    Namaste React Using JSX ! 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

