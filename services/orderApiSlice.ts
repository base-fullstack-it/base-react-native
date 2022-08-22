import {apiSlice} from "../app/api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrderCost: builder.mutation({
            query:(body) => ({
                url:'order/cost',
                method:'POST',
                body:body
            })
        })
    })
})
export const { useGetOrderCostMutation } = orderApiSlice;