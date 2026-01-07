import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../slices/counterSlice";

const index = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment(1));
  };

  const handleDec = () => {
    dispatch(decrement(1));
  };

  return (
    <>
      <button onClick={handleInc}>+</button>
      <p>{counter}</p>
      <button onClick={handleDec}>-</button>
    </>
  );
};

export default index;
