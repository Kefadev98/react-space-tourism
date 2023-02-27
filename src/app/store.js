import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/apiSlice";
import paginationReducer from "../features/pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
