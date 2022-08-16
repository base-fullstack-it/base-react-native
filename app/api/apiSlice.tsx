import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/dist/query/react";
import {store} from "../store";
import qs from "query-string";
import {getEnvVars} from "../../environment";
export type AppState = ReturnType<typeof store.getState>;
const { apiUrl } = getEnvVars();
export const vers = "v1/";

const baseQuery = fetchBaseQuery(
    {
            mode:"cors",
            credentials: 'include',
            baseUrl: apiUrl //+ "v1/"
    })
function instanceOfFetchArgs(object: any): object is FetchArgs {
    console.log(object.params,'OBJECT INSIDE INSTANCE OF')

    return object.params;
}
const dynamicBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
    // console.log(args,'ARGS FROM DYNAMIC BASE QUERY')


    // console.log(api.getState(),'CALLED API GET STATE')

    const appState = api.getState() as AppState;

    const urlEnd = typeof args === 'string' ? args : args.url;
    // const params = instanceOfFetchArgs(args);
    // console.log(params,'PARAMISTA')


    if(urlEnd === "oauth/token") return baseQuery(args, api, extraOptions);

    // const queryParamsMap:any = params ? params : {};
    const queryParamsMap:any = {};
    queryParamsMap.access_token = appState.auth.token;
    const queryParamsString = qs.stringify(queryParamsMap);

    const adjustedUrl = vers + urlEnd + "?" + queryParamsString;
    const adjustedArgs = typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }
    return baseQuery(adjustedArgs, api, extraOptions)

}


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:dynamicBaseQuery,
    // baseQuery,
    endpoints: (builder)=>({})
})