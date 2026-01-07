import Link from "next/link";
import React from "react";

const User = ({ users }) => {
  const userList = users.map((user) => {
    return (
      <React.Fragment key={user.id}>
        <p>
          <Link href={`/User/${user.id}`}>{user.email}</Link>
        </p>
      </React.Fragment>
    );
  });
  return <div>{userList}</div>;
};

export default User;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
