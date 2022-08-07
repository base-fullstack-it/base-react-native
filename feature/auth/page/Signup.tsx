import {useGetAppAccessTokenQuery, useLoginUserMutation, useRegisterUserMutation} from "../../../services/authApiSlice";
import {useEffect, useState} from "react";
import {ACCESS_TOKEN_TYPES, setUser} from "../slice/authSlice";
import {useAppDispatch} from "../../../app/hooks";
import SignupFormik, {SignupFormValuesInterface} from "./SignupFormik";

export default () => {
    const {data,isLoading} = useGetAppAccessTokenQuery();
    !isLoading && console.log(data,'tok444en')
    const dispatch = useAppDispatch();

    const [
        registerUser,
        {
            data: registerData,
            isSuccess: isRegisterSuccess,
            isError: isRegisterError,
            error: registerError,
        },
    ] = useRegisterUserMutation();

    const [
        loginUser,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
        },
    ] = useLoginUserMutation();

    const handleRegister = async (values:SignupFormValuesInterface) => {
        // const {
        //     firstName,
        //     lastName,
        //     phoneNumber,
        //     email,
        //     password
        // }= values;

        const dataSignedUp = await registerUser(values).unwrap();
        const dataLoggedIn = await loginUser({email: values.email,password:values.password}).unwrap();
        dispatch(setUser(
            {
                token:dataLoggedIn.access_token,
                token_type: ACCESS_TOKEN_TYPES.user}
        ))

    };

    useEffect(()=>{
        // if(data?.access_token)console.log(data, 'data from get AppAccessToken from auth')
        if(data?.access_token) dispatch(setUser({
            token:data.access_token,
            token_type: ACCESS_TOKEN_TYPES.app}
        ))
    },[data]);


    return <SignupFormik
        handleRegister={handleRegister}
    />

}