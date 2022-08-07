import {useEffect, useState} from "react";
import {ACCESS_TOKEN_TYPES, setUser} from "../slice/authSlice";
import {useAppDispatch} from "../../../app/hooks";

import LoginFormik, {LoginFormValuesInterface} from "./LoginFormik";
import {useLoginUserMutation} from "../../../services/authApiSlice";

export default () => {
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();

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
        dispatch(setUser(
            {
                name:"user",
                token:data.access_token,
                token_type: ACCESS_TOKEN_TYPES.user}
        ))
        console.log(data,'did')
        // navigate('/dashboard');
    };


    useEffect(() => {
        // if (isLoginError) toast.error((loginError as any).data.message);
    }, [isLoginError]);

    return <LoginFormik
        loginUser={handleLogin}
    />

}