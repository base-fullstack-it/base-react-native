import {useGetAppAccessTokenQuery, useLoginUserMutation, useRegisterUserMutation} from "../../../services/authApiSlice";
import {useEffect, useState} from "react";
import {ACCESS_TOKEN_TYPES, setUser} from "../slice/authSlice";
import {useAppDispatch} from "../../../app/hooks";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import SignupFormik, {SignupFormValuesInterface} from "./SignupFormik";

export default () => {
    const {data,isLoading} = useGetAppAccessTokenQuery();
    !isLoading && console.log(data,'tok444en')
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
        // console.log(values,'successer')
        // await registerUser({ firstName, lastName,phoneNumber, email, password });
        const dataSignedUp = await registerUser(values).unwrap();
        const dataLoggedIn = await loginUser({email: values.email,password:values.password}).unwrap();

        console.log(data,'what is the data here')
        dispatch(setUser(
            {
                name:"user",
                token:dataLoggedIn.access_token,
                token_type: ACCESS_TOKEN_TYPES.user}
        ))
        navigate('/dashboard');
        // if (password !== confirmPassword) {
        //     return toast.error("Password don't match");
        // }

        // if (firstName && lastName && password && email) {
        //     await registerUser({ firstName, lastName,phoneNumber, email, password });
        // }
    };

    useEffect(()=>{
        // if(data?.access_token)console.log(data, 'data from get AppAccessToken from auth')
        if(data?.access_token) dispatch(setUser({
            name:"app",
            token:data.access_token,
            token_type: ACCESS_TOKEN_TYPES.app}
        ))
    },[data]);

    useEffect(() => {
        if (isRegisterError) toast.error((registerError as any).data.message);
    }, [isRegisterError]);

    return <SignupFormik
        handleRegister={handleRegister}
    />

}