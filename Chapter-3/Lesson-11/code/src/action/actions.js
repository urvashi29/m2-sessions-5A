import { INC, DEC, ADD_PRODUCTS } from "./actiontype";
import axios from "axios";

// action creator
export const onIncrement = (val) => {
  // action object
  return {
    type: INC,
    payload: val,
  };
};

export const onDecrement = (val) => {
  return {
    type: DEC,
    payload: val,
  };
};

export const onGetProducts = () => {
  return (dispatch) => {
    axios
      .get("https://dummyjson.com/products")
      .then(async (res) => {
        const response = await res;
        console.log(response.data);

        // self-invoking function
        dispatch(
          ((data) => {
            return {
              type: ADD_PRODUCTS,
              payload: {
                httpResponse: data.slice(0, 10),
              },
            };
          })(response.data.products)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// ((a) => {
//   return {};
// })(10);

// const apiCall= () => {
//   return (dispatch) => {
//     axios.get("").then((res) => {
//     dispatch(()())
//     }).catch(() => {
//     })
//   }
// }
