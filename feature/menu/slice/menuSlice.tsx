import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../app/store";
import {MenuDTO} from "../../../model/dto/MenuDTO";

export interface MenuState {
    menu: MenuDTO | null;
}

const initialState: MenuState = {
    menu: null,
    // menu: 3,
};
export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<MenuState>) => action.payload
    },
});
export const selectMenu = (state: RootState) => state.menu;

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;

// console.log(driver, dspr, productCategories, products,address,"CALLED44")
// Object.assign(state.menu, { driver, dspr, productCategories, products,address })
// state.menu.dspr = dspr;