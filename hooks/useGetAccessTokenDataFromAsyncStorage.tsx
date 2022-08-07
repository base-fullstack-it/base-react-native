import {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setUser} from "../feature/auth/slice/authSlice";
import {useAppDispatch} from "../app/hooks";

export default () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {

            const access_token = await AsyncStorage.getItem("token")
            const token_type = await AsyncStorage.getItem("token_type")
            console.log(access_token,token_type)
            dispatch(setUser({
                token:access_token,
                token_type: token_type
            }))
            // i think it might be okay to wait 1500ms to ensure token storage was pulled from?
        })()
    },[]);
}