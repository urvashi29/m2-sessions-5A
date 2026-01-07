import { INC, DEC, ADD_PRODUCTS } from "../action/actiontype";

//Central/Global state
const initState = {
  counter: 0,
  age: 20,
  products: [],
  users: [
    {
      id: 1,
      firstName: "Alex",
      salary: 20000,
    },
    {
      id: 2,
      firstName: "Alina",
      salary: 30000,
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + action.payload };
    case DEC:
      if (state.counter > 0) {
        return { ...state, counter: state.counter - action.payload };
      }
    case ADD_PRODUCTS:
      return { ...state, products: action.payload.httpResponse };
    default:
      return state;
  }
};

export default reducer;
