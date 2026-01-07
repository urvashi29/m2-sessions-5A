import React, { useState } from "react";

const index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 data-testid="counter" title="counter">
        {counter}
      </h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        Up
      </button>
      <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>
        Down
      </button>
    </div>
  );
};

export default index;

// in html
// custom attribute
// data-***
