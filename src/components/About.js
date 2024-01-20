import User from "./User";
import UserClass from "./UserClass";

const About = (props) => {
  return (
    <div>
      <div className="about">
        <h1>This is about us page</h1>
        <h3>Namaste React</h3>
        <User name={"Akshay Saini"} address={"Deharadun"} id={18} />
      </div>
      <div className="about">
        <h1>This is about us page</h1>
        <h3>Namaste React</h3>
        <UserClass name={"Niraj Suryavanshi"} address={"Nashik"} id={10} />
      </div>
    </div>
  );
};

export default About;
