import React, { use, useState } from "react";
import "./App.css";

const App = () => {
  // const [state variable, method to update it (prefix- set)] = useState(initial State Value);
  const [firstName, setFirstName] = useState("Alina");
  const [age, setAge] = useState(20);
  const [isVerfied, setIsVerfied] = useState(true);
  const [user, setUser] = useState({
    id: 1,
    first: "Alex",
    last: "Joe",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "OCOOPA Magnetic Hand Warmers",
      originalPrice: 1000,
      discountPrice: 400,
      description: "Magnetic Hand",
      productImage:
        "https://m.media-amazon.com/images/I/61Bijcj-+bL._AC_SX679_.jpg",
    },
    {
      id: 2,
      productName: "STANLEY Quencher H2.0 Tumbler ",
      originalPrice: 2000,
      discountPrice: 1000,
      description: "Quencher H2.0",
      productImage:
        "https://m.media-amazon.com/images/I/61Bijcj-+bL._AC_SX679_.jpg",
    },
    {
      id: 3,
      productName: "Flower Candle Warmer Lamp",
      originalPrice: 600,
      discountPrice: 200,
      description: "Magnetic Hand",
      productImage:
        "https://m.media-amazon.com/images/I/719sMt6HaEL._AC_SL1500_.jpg",
    },
  ]);

  const [fun, setFun] = useState(() => {});

  const handleUpdate = () => {
    setFirstName("Alaya");
    setAge(24);
    setUser({ ...user, last: "J" });

    let productsCopy = [...products];
    productsCopy[0].discountPrice = 500;
    setProducts(productsCopy);
  };

  return (
    <>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>
        {user.first} {user.last}
      </p>

      <div style={{ display: "flex" }}>
        {products.map((product) => {
          return (
            <>
              <img
                style={{ width: "20%" }}
                src={product.productImage}
                alt={product.productImage.slice(0, 4)}
              />
              <ul className="list">
                <li>{product.productName}</li>
                <li
                  style={{
                    color: "teal",
                    fontSize: "20px",
                    textDecoration: "line-through",
                  }}
                >
                  {product.originalPrice}
                </li>
                <li>{product.discountPrice}</li>
              </ul>
            </>
          );
        })}
      </div>

      <h3>Updation</h3>
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default App;

// in html
// <p style="color: red; font-size: 20px">
{
  /* <p class="list"></p> */
}

// Task
// create a function based component, display and update movie data
