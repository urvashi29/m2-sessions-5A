import React from "react";

const index = () => {
  const throttle = () => {
    //logic
  };

  const debounce = () => {
    //logic
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={throttle(handleChange)} />
      <input type="text" onKeyUp={debounce(handleChange)} />
    </div>
  );
};

export default index;
