// Home, About, Contact
// export function StaticComponent() {
//   return <div>Home Page</div>;
// }

// client side component
export default function Home({ users }) {
  const userList = users.map((user) => {
    return <p>{user.email}</p>;
  });

  return <>{userList}</>;
}

// server side component, which will run in server
export async function getServerSideProps() {
  console.log("get server side props");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}

// call api once and same data will come back
//running at server
export async function getStaticProps() {
  console.log("get static props");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
