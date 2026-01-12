import { redirect } from "next/dist/server/api-utils";
import React from "react";

const index = ({ user }) => {
  return <div>{user.email}</div>;
};

export default index;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  if (params.id >= 100) {
    // return {
    //   notFound: true
    // }
    return {
      redirect: {
        destination: "/",
      },
    };
  }

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
