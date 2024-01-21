import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
  }
  render() {
    console.log("Child redner");

    const { name, id } = this.props;
    const { count } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count
        </button>
        <h2>Count : {count}</h2>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h2>{this.props.address}</h2>
      </div>
    );
  }
}

export default UserClass;
