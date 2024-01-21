import { useState } from "react";
import { useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);

  useEffect(() => {
    setCount(100);
  }, []);

  return (
    <div>
      <h2>Count:{count}</h2>
      <h2>Count1:{count1}</h2>
      <h1>{props.name}</h1>
      <h2>{props.id}</h2>
      <h3>{props.address}</h3>
    </div>
  );
};

export default User;
