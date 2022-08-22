import {createSlice} from "@reduxjs/toolkit";
import data from "./data";
import {ProductDTO} from "../../model/dto/ProductDTO";
import {ProductToCartValues} from "../../model/dto/ProductToCartValues";

export interface CartState {
    productCartList: ProductToCartValues[],
    totalAmount: number,
    totalCount: number
}

const initialState: CartState = {
    productCartList: [] as ProductToCartValues[],
    totalAmount: 0,
    totalCount: 0,

};
type numberReducer = {
    totalAmount: number;
    totalCount: number;
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        //todo: REMOVE THIS we get order total from back end
        //from order slice
        getCartTotal: (state) => {
            if (state.productCartList && state.productCartList.length > 0) {
                let {totalAmount, totalCount} = state.productCartList && state.productCartList.reduce<numberReducer>(
                    (cartTotal, cartItem) => {
                        const {
                            // price,
                            quantity
                        } = cartItem;
                        // const itemTotal = price * quantity;
                        const itemTotal = 0;//TODO fix this later

                        cartTotal.totalAmount += itemTotal;
                        cartTotal.totalCount += quantity;
                        return cartTotal;
                    },
                    {
                        totalAmount: 0,
                        totalCount: 0,
                    }
                );
                state.totalAmount = parseInt(totalAmount.toFixed(2));
                state.totalCount = totalCount;
            } else {
                state.totalAmount = 0;
                state.totalCount = 0;
            }
        },
        remove: (state, action) => {
            state.productCartList = state.productCartList.filter((productCartValue) => productCartValue.productDTO.id !== action.payload);
        },
        increase: (state, action) => {
            state.productCartList = state.productCartList.map((productCartValue) => {
                if (productCartValue.productDTO.id === action.payload) return {
                    ...productCartValue,
                    quantity: productCartValue.quantity + 1
                };
                else return productCartValue;
            });
        },
        decrease: (state, action) => {
            state.productCartList = state.productCartList
                .map((productCartValue) => {
                    if (productCartValue.productDTO.id === action.payload) return {
                        ...productCartValue,
                        quantity: productCartValue.quantity - 1
                    };
                    else return productCartValue;
                })
                .filter((productCartValue) => productCartValue.quantity !== 0);
        },
        clearCart: (state) => {
            state.productCartList = [];
        },

        addProductToCart: (state, action) => {
            const itemInCart = state.productCartList.find((productCartValue) => productCartValue.productDTO.id === action.payload.productDTO.id);
            if (itemInCart) itemInCart.quantity++;
            else state.productCartList.push({ ...action.payload});
        }
    },
});

export const {
    getCartTotal,
    remove,
    increase,
    decrease,
    clearCart,
    addProductToCart
} = cartSlice.actions;

export default cartSlice.reducer;
