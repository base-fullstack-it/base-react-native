import base64 from "base-64";
import qs from "query-string";
import {apiSlice, vers} from "../app/api/apiSlice";
import {AppAccessToken} from "../feature/auth/model/AppAccessToken";

export const authApiSlice = apiSlice.injectEndpoints({
  // reducerPath: "authApiSlice",
  //shoulld in theory allow for content type in application json
  // baseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query:(body: { email: string; password: string }) => ({
        url:'oauth/token',
        method:'POST',
        headers: {
          'Authorization': `Basic ${base64.encode('grassp:grassp')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify({
          grant_type:'password',
          username: body.email,
          password: body.password
        }),
      })
    }),
    getAppAccessToken: builder.query<AppAccessToken,void>({
      query:() => ({
        url:'oauth/token',
        method:'POST',
        mode: 'cors',
        headers: {
          'Authorization': `Basic ${base64.encode('grassp:grassp')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'grant_type=client_credentials'
      })
    }),
    registerUser: builder.mutation({
      query: (body: {
        firstName: string;
        lastName: string;
        phoneNumber:string;
        email: string;
        password: string;
      }) => {
        return {
          // url: "user?access_token=A0K20Ur54ljqyogf1oB4e7QYDI0",
          url: "user",
          method: "post",
          body: {user:{...body}},
        };
      },
    }),
  }),
});


export const { useLoginUserMutation, useRegisterUserMutation,useGetAppAccessTokenQuery } = authApiSlice;
