import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div className="about">
        <h1>This is about us page</h1>
        <h3>Namaste React</h3>
        <UserClass name={"Niraj Suryavanshi"} address={"Nashik"} id={10} />
      </div>
    );
  }
}

export default About;
