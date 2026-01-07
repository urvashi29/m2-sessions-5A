import React, { useEffect, useState } from "react";
import axios from "axios";
import { userAPI } from "../helper/api";
import { Link } from "react-router-dom";

const Employee = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(userAPI)
      .then(async (res) => {
        let userData = await res.data;
        setUsers(userData);
      })
      .catch(() => {});
  }, []);

  const userList = users.length ? (
    users.map((user) => {
      return (
        <p key={user.id}>
          <span>
            <Link to={`/employees/${user.id}`}>{user.name}</Link>
          </span>
          <br />
          <span>{user.email}</span>
        </p>
      );
    })
  ) : (
    <p>No Post Yet!</p>
  );

  return <>{userList}</>;
};

export default Employee;
