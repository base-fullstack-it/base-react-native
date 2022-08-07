import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "../feature/auth/slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
