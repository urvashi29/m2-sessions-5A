import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";

const App = () => {
  const [users, setUsers] = useState([]);

  const userData = (user) => {
    console.log(user);
    setUsers([...users, user]);
    //api call
  };

  return (
    <>
      <Form userData={userData} />
      <Display users={users} />
    </>
  );
};

export default App;
