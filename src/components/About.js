import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("ComponentDidMount called");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div className="about">
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>About class component</h1>
        <h1>This is about us page</h1>
        <h2>This is Namaste React Web series</h2>
        <UserClass name={"First Child"} address={"Nashik"} id={10} />
      </div>
    );
  }
}

export default About;
