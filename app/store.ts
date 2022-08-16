import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "../feature/auth/slice/authSlice";
import menuReducer from "../feature/menu/slice/menuSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
