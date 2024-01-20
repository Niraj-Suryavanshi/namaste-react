import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, id } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h2>{this.props.address}</h2>
      </div>
    );
  }
}

export default UserClass;
