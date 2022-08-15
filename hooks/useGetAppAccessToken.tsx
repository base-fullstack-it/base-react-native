import {useGetAppAccessTokenQuery} from "../services/authApiSlice";
import useDispatchUserAuth from "./useDispatchUserAuth";
import {useEffect} from "react";
import {setUser} from "../feature/auth/slice/authSlice";
import {useAppDispatch} from "../app/hooks";

export default ():void => {
    const dispatch = useAppDispatch();
    const {data} = useGetAppAccessTokenQuery();
    //get the app access token,
    // we never store it in the AsyncStorage
    useEffect(()=>{
        // if(data?.access_token)console.log(data, 'data from get AppAccessToken from auth')
        if(data?.access_token){
            const access_token = data?.access_token ? data.access_token : null;
            const token_type = data?.token_type ? data.token_type : null;
            dispatch(setUser({
                token:access_token,
                token_type
            }))
        }
    },[data]);


}