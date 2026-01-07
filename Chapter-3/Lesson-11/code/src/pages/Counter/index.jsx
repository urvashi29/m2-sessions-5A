import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDecrement, onIncrement } from "../../action/actions";

const index = () => {
  // access central storage data
  const counter = useSelector((state) => state.counter);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(onIncrement(1));
  };

  const handleDec = () => {
    dispatch(onDecrement(1));
  };

  const userList = users.length ? (
    users.map((user) => user.firstName)
  ) : (
    <p>No Post yet!</p>
  );

  return (
    <>
      <button onClick={handleInc}>+</button>
      <p>Counter : {counter}</p>
      <button onClick={handleDec}>-</button>
      <h4>Users</h4>
      <p>{userList}</p>
    </>
  );
};

export default index;
