import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer.js";
import { thunk } from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
