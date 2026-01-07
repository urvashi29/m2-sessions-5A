import React from "react";
import { ClipLoader } from "react-spinners";

const Display = ({ users }) => {
  const userList = users.length ? (
    users.map((user) => {
      return <p key={user.username}>{user.contact}</p>;
    })
  ) : (
    <ClipLoader
      color={"teal"}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );

  return <div>{userList}</div>;
};

export default Display;
