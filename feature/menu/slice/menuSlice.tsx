import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../app/store";
import {MenuDTO} from "../../../model/dto/MenuDTO";
import {DSPRDTO} from "../../../model/dto/DSPRDTO";
import {ProductCategoryDTO} from "../../../model/dto/ProductCategoryDTO";
import {ProductDTO} from "../../../model/dto/ProductDTO";
import {BrandDTO} from "../../../model/dto/BrandDTO";
import { createSelector } from '@reduxjs/toolkit'

export interface MenuState {
    // menu: MenuDTO | null;
    readonly driver: Readonly<DSPRDTO> | undefined,
    readonly dspr: Readonly<DSPRDTO> | undefined,
    readonly productCategories:ReadonlyArray<ProductCategoryDTO> | undefined,
    readonly products: ReadonlyArray<ProductDTO> | undefined,
    readonly address: Readonly<AddressDTO> | undefined,
    readonly brands: ReadonlyArray<BrandDTO>| undefined
}

const initialState: MenuState = {
    address: undefined,
    brands: undefined,
    driver: undefined,
    dspr: undefined,
    productCategories: undefined,
    products: undefined
    // menu: null,

};
export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<MenuState>) => action.payload
    },
});
export const selectMenu = (state: RootState) => state.menu;
// export const selectProductCategories = (state: RootState) => state.menu;

export const selectProducts = (state: RootState) => state.menu.products;
export const selectProductsFilteredByCategory = (state: RootState) => state.menu.products;
// export const selectProductCategoriesFromProducts = (state: RootState) => state.menu.products;
export const selectProductCategories = (state: RootState) => state.menu.productCategories;
//https://stackoverflow.com/questions/40291084/use-reselect-selector-with-parameters
//i want to do that above with the create selector first comment

//// selector.js
// const selectItemsByCategory = createSelector(
//   [
//     // Usual first input - extract value from `state`
//     state => state.items,
//     // Take the second arg, `category`, and forward to the output selector
//     (state, category) => category
//   ],
//   // Output selector gets (`items, category)` as args
//   (items, category) => items.filter(item => item.category === category)
// );
//
// // App.js
// const items = selectItemsByCategory(state, 'javascript');
// // Another way if you're using redux hook:
// const items = useSelector(state => selectItemsByCategory(state, 'javascript'));
//i want to iterate through each product and get th eid from each  product categor
// then i want to give an id not using a slector here to get that category data
// so ireally want to just filter based on a product selector and an input value
export const selectedProductsForCategory = createSelector(
    [
        selectProducts,
        selectProductCategories
    ],
    // Output selector gets (`items, category)` as args
    (products:ReadonlyArray<ProductDTO> | undefined
     , category) => products && products.filter
    (product => product.productCategories === category)
    );

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;

// console.log(driver, dspr, productCategories, products,address,"CALLED44")
// Object.assign(state.menu, { driver, dspr, productCategories, products,address })
// state.menu.dspr = dspr;