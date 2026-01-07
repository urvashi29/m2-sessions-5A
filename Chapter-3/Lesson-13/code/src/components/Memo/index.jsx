import React, { useState, useMemo } from "react";

const index = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  // useMemo(() => {
  //   //action
  // }, [state variable]);

  // const squaredNum = squareNumber(num);

  // using useMemo
  const squaredNum = useMemo(() => {
    return squareNumber(num);
  }, [num]);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Please enter Number"
        onChange={handleChange}
        value={num}
      />

      <p>Count: {count}</p>
      <p>SquaredNum: {squaredNum}</p>
      <button onClick={incrementCounter}>Inc Count</button>
    </React.Fragment>
  );
};

// function to square number
function squareNumber(number) {
  console.log(number);
  return Math.pow(number, 2);
}

export default index;
