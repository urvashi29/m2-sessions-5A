// GET Request
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://dummy.restapiexample.com/api/v1/employees
// https://dummyjson.com/products
// https://rapidapi.com/ -> movie api
// https://jsonplaceholder.typicode.com/guide/

// POST Request

// axios, fetch
// axios.httpmethod(url).then((response) => {}).catch((err) => {})

// fetch(url).
// then((response) =>  response.json()).
// then((data) => {console.log(data)})

// see html file
document.querySelector("#btn").addEventListener("click", () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Error occured");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((d) => {})
    .catch((err) => {
      console.log(err); //It will not consider 4xx, 5xx as error
    });
});

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    displayCard(data);
  } catch (err) {
    console.log(err);
  }
}

// async function getData() {
//   try {
//     let response = await axios("https://jsonplaceholder.typicode.com/posts");
//     let data = response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

function displayCard(posts) {
  //write logic to display card
  posts.forEach((post) => {
    let div = document.createElement("div");
  });
}

// POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Learning API Integration",
    body: "Description on this",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// axios
//   .post(url, {})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {});

// Update / POST
// axios
//   .post(url, {})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {});

// delete
// axios
//   .delete(url,id)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {});

// const options = {
//   method: 'GET',
//   url: 'https://real-time-news-data.p.rapidapi.com/top-headlines',
//   params: {
//     limit: '500',
//     country: 'US',
//     lang: 'en'
//   },
//   headers: {
//     'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// Task:
// use Axios: Try get the data movie API, E-commerce and display in UI (Rapid Api & https://dummyjson.com/products)
// use Fetch: Get the data from user and do post request, display in UI "Account Registered" -->
