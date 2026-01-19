import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/getuser").then(async (res) => {
      console.log(res);
      const response = await res.json();
      if (!response.loggedIn) {
        router.push("/login");
      } else {
        setUser(response);
      }
    });
  }, []);

  const logout = async () => {
    const response = await fetch("/api/logout");
    router.push("/login");
  };

  return (
    <>
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>

      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
