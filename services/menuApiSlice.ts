import {apiSlice} from "../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loggedInUser: builder.query<any, void>({
            query: () => ({
                url: "user",
            }),
            // providesTags: ["Transaction"],
        })
    })
})

export const { useLoggedInUserQuery} = userApiSlice;