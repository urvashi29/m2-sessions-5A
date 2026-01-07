import React from "react";

const id = ({ user }) => {
  return <div>{user.phone}</div>;
};

export default id;

export async function getServerSideProps(context) {
  // get params at server side
  const { params } = context;
  console.log(context);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
}
