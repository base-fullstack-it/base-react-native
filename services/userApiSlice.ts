import {apiSlice} from "../app/api/apiSlice";
import {UserDTO} from "../model/dto/UserDTO";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loggedInUser: builder.query<UserDTO, void>({
            query: () => ({
                url: "user",
            }),
            // providesTags: ["Transaction"],
        })
    })
})

export const { useLoggedInUserQuery} = userApiSlice;