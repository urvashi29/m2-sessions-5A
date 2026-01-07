// Incremental Static Regeneration
// const Home = ({ recipes }) => {
//   return (
//     <>
//       {recipes.map((recipes) => {
//         return <p key={recipes.idCategory}>{recipes.strCategory}</p>;
//       })}
//     </>
//   );
// };

// // nodejs
// import path from "path";
// import fsPromises from "fs/promises";

// export async function getStaticProps() {
//   // api call
//   //reading the data from file using fs(file system module)
//   const filePath = path.join(process.cwd(), "recipedata/recipes.json");
//   console.log(filePath);
//   const data = await fsPromises.readFile(filePath);
//   // console.log(data);
//   const recipes = JSON.parse(data);

//   return {
//     props: {
//       recipes,
//       // revalidate: 30,
//     },
//   };
// }

// export default Home;

// SWR
// client side API call in nextJS
import useSWR from "next";

const Home = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("api", fetcher);

  // useEffect(() => {
  //   axios.get();
  // }, []);

  return <div></div>;
};

export default Home;
