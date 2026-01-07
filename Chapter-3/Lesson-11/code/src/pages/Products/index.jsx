import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { onGetProducts } from "../../action/actions";

const index = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const productsList = products.length ? (
    products.map((product) => {
      return <p key={product.id}>{product.title}</p>;
    })
  ) : (
    <p>No Products Yet!</p>
  );
  
  useEffect(() => {
    dispatch(onGetProducts());
  }, []);

  return <>{productsList}</>;
};

export default index;
