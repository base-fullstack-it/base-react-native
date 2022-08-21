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

export const selectedProductsForCategory = createSelector(
    [
        state => state.menu.products,
        (state,categoryId) => categoryId
    ],
    //https://stackoverflow.com/questions/57262987/filter-array-based-on-value-inside-another-array
    (products:ReadonlyArray<ProductDTO>, categoryId):ProductDTO[] =>
        products.filter(product => product.productCategories.some(productCategoryFromProduct => productCategoryFromProduct.id === categoryId))
);
export const selectedProductById = createSelector(
    [
        state => state.menu.products,
        (state,categoryId) => categoryId
    ],
    //https://stackoverflow.com/questions/57262987/filter-array-based-on-value-inside-another-array
    (products:ReadonlyArray<ProductDTO>, productId):ProductDTO | undefined =>
        products.find(product => product.id === productId)
);
export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
