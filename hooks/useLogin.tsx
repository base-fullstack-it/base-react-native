import {LoginFormValuesInterface} from "../feature/auth/page/LoginFormik";
import {ACCESS_TOKEN_TYPES, setUser} from "../feature/auth/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch} from "../app/hooks";
import {useLoginUserMutation} from "../services/authApiSlice";
import useDispatchUserAuth from "./useDispatchUserAuth";

export default ():(values: LoginFormValuesInterface) => Promise<void> => {
    const dispatchUserAuth = useDispatchUserAuth();
    //todo need some sort of useActivityLoader that uses with context
    const [
        loginUser,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
        },
    ] = useLoginUserMutation();

    const handleLogin = async (values:LoginFormValuesInterface) => {

        // console.log(values,'successer')
        const data = await loginUser({...values}).unwrap();
        console.log(data,'did this work')
        const access_token = data.access_token;
        const token_type = ACCESS_TOKEN_TYPES.user;
        dispatchUserAuth({access_token,token_type});
        await AsyncStorage.setItem("token",access_token)
        await AsyncStorage.setItem("token_type",token_type)
        // await console.log(await AsyncStorage.getItem("token"),'tokenfrom async storage')
    };
    return handleLogin;
}