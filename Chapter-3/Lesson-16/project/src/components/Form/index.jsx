import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmp } from "../../action";
import { v4 as uuidv4 } from "uuid";

const index = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = { name, id: uuidv4() };
    console.log(emp);
    dispatch(createEmp(emp));
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          id="name"
          value={name}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default index;
