import {apiSlice} from "../app/api/apiSlice";

export const menuApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMenuByZipCode: builder.query<any, any>({
            query: ({zipCode, dsprId, isFullMenuShown}) => ({
                url: "menu",
                // params:{ zip_code: zipCode, dspr_id: dsprId, is_full_menu: isFullMenuShown }
                params:{ zip_code: zipCode }
            }),
            // providesTags: ["Transaction"],
        })
    })
})

export const { useLazyGetMenuByZipCodeQuery} = menuApiSlice;