import {apiSlice} from "../app/api/apiSlice";

interface MenuParameters {
    readonly zip_code?:string;
    readonly street?:string;
    readonly longitude?:number;
    readonly latitude?:number;
    readonly delivery_service_provider_id?:number;
    readonly dspr_id?:number;
    readonly is_full_menu?:boolean;

}
export const menuApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMenu: builder.query<any, MenuParameters>({
            query: (args:MenuParameters) => ({
                url: "menu",
                params:{...args }
            }),
            // providesTags: ["Transaction"],
        })
    })
})

export const { useLazyGetMenuQuery} = menuApiSlice;