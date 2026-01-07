import React, { useEffect, useState } from "react";
import { userAPI } from "../helper/api";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { userid } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(userAPI + `${userid}`)
      .then(async (res) => {
        let user = await res.data;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{user != null && <p>{user.name}</p>}</>;
};

export default EmployeeDetail;
