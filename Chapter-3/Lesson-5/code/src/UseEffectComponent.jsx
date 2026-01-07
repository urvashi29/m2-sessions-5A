import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectComponent = () => {
  const [age, setAge] = useState(20);
  const [users, setUsers] = useState([]);

  // it will be called on initial rendering
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        let response = await res.data;
        console.log(response);
        setUsers(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("initial render");
  }, []);

  //   it will be called whenever dependency state variable will change
  useEffect(() => {
    console.log("state is updated");
  }, [age]);

  //   useEffect(() => {
  //     console.log("every render");

  // //componentWillUnmount
  // return () => {
  //   //removeEventListener
  //   //clearTimeout
  // };
  //   });

  const updateAge = () => {
    setAge(24);
  };

  const userList = users.length ? (
    users.map((user) => {
      return <p key={user.id}>{user.email}</p>;
    })
  ) : (
    <p>No Post Yet!</p>
  );

  return (
    <>
      <button onClick={updateAge}>Update</button>
      {userList}
    </>
  );
};

export default UseEffectComponent;
