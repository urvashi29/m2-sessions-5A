import React, { useState } from "react";
import Counter from "./pages/Counter";
import CounterTwo from "./pages/CounterTwo";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <Counter />
      <CounterTwo />
      <Products />
    </>
  );
};

export default App;
