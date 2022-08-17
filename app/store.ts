import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "../feature/auth/slice/authSlice";
import menuReducer from "../feature/menu/slice/menuSlice";
import cartReducer from "../feature/cart/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/apiSlice";
import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};
const reducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
// const persistedReducer = persistReducer(persistConfig, cartReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck:false
  }).concat(apiSlice.middleware),
  devTools: true,
});
// middleware: getDefaultMiddleware({
//   serializableCheck:(
//       ignoredActions: [someReduxPersistActionType)
export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
