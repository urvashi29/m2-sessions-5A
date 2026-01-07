import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onIncrement } from "../../action/actions";

const index = () => {
  const dispatch = useDispatch();

  const handleDec = () => {
    dispatch(onIncrement(1));
  };
  return (
    <>
      <button onClick={handleDec}>Increment</button>
    </>
  );
};

export default index;
