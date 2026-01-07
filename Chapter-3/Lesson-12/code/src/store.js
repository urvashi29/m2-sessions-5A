import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { postApi } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
