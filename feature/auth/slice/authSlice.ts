import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../../../app/store";

export const ACCESS_TOKEN_TYPES = {
  user: 'USER',
  app: 'APP'
};

export interface AuthState {
  token: string | null;
  token_type: string | null;
}

const initialState: AuthState = {
  token: null,
  token_type:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<AuthState>
    ) => {
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     name: action.payload.name,
      //     token: action.payload.token,
      //     token_type: action.payload.token_type
      //   })
      // );
      console.log(state,'state from auth slice')
      state.token = action.payload.token;
      state.token_type = action.payload.token_type;
    },
    logout: (state) => {
      state.token = null;
      state.token_type = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
