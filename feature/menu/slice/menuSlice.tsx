import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../app/store";

export interface MenuState {
    token: string | null;
    token_type: string | null;
}

const initialState: MenuState = {
    token: null,
    token_type:null
};
export const MenuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<MenuState>
        ) => {
            // localStorage.setItem(
            //   "user",
            //   JSON.stringify({
            //     name: action.payload.name,
            //     token: action.payload.token,
            //     token_type: action.payload.token_type
            //   })
            // );
            state.token = action.payload.token;
            state.token_type = action.payload.token_type;
        },
        logout: (state) => {
            state.token = null;
            state.token_type = null;
        },
    },
});
export const selectAuth = (state: RootState) => state.menu;

// export const { setUser, logout } = MenuSlice.actions;

export default MenuSlice.reducer;