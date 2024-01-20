const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.id}</h2>
      <h3>{props.address}</h3>
    </div>
  );
};

export default User;
