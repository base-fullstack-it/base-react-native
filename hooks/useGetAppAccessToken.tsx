import {useGetAppAccessTokenQuery} from "../services/authApiSlice";
import useDispatchUserAuth from "./useDispatchUserAuth";
import {useEffect} from "react";

export default ():void => {
    const dispatchUserAuth = useDispatchUserAuth();
    const {data} = useGetAppAccessTokenQuery();
    //get the app access token
    useEffect(()=>{
        // if(data?.access_token)console.log(data, 'data from get AppAccessToken from auth')
        if(data?.access_token){
            const access_token = data?.access_token ? data.access_token : null;
            const token_type = data?.token_type ? data.token_type : null;
            dispatchUserAuth({
                access_token,
                token_type
            })
        }
    },[data]);


}