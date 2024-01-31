import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        locatio: "Dummy Location",
      },
    };
    // console.log(this.props.name + "child construtor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "ComponentDidMount called");
    const data = await fetch("https://api.github.com/users/Krushna-Sonone");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update called ");
  }

  componentWillUnmount() {
    // console.log("Component will unmount called");
  }

  render() {
    // console.log(this.props.name + "Child redner");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card flex">
        <div className=" p-2 border border-solid border-red-950 leading-8 m-auto">
          <img src={avatar_url} alt="avtar" className="w-40" />
          <h1>Name: {name}</h1>
          <h2>Location: {location}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
