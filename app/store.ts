import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "../feature/auth/slice/authSlice";
import menuReducer from "../feature/menu/slice/menuSlice";
import cartReducer from "../feature/cart/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {apiSlice} from "./api/apiSlice";
import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist:['cart']
};
const reducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  menu: menuReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    // serializableCheck:false
    serializableCheck:{
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }

  }).concat(apiSlice.middleware),
  devTools: true,
});
export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
