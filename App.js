/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h1 tag</h2>
 * </div>
 * <div id="child2">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 * </div>
 * 
 * 
 * ReactElement(Object)=>HTML(Browser Understands)
 * 
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I a'm an h1 tag1"),
        React.createElement("h2", {}, "I a'm an h2 tag2")]
    ), React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I a'm an h1 tag1"),
        React.createElement("h2", {}, "I a'm an h2 tag2")]
    )]


);






const heading = React.createElement(
    "h1",
    { id: "heading", xya: "abc" },
    "Hello World from React !"
);

// console.log(heading); //object
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



