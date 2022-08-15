import {useLoginUserMutation, useRegisterUserMutation} from "../services/authApiSlice";
import {SignupFormValuesInterface} from "../feature/auth/page/SignupFormik";

import useLogin from "./useLogin";
import {useEffect, useState} from "react";
import Toast from "react-native-toast-message";
import useNavigateToMenuTabNavigation from "./navigation/useNavigateToMenuTabNavigation";
import useNavigateToLogin from "./navigation/useNavigateToLogin";

export default ():{ isLoading: any; isRegisterSuccess: any; registerData: any; handleRegister: (values: SignupFormValuesInterface) => Promise<void> } => {

    const [
        registerUser,
        {
            isLoading,
            data: registerData,
            isSuccess: isRegisterSuccess,
            isError: isRegisterError,
            error: registerError,
        },
    ] = useRegisterUserMutation();

    const{ handleLogin} =  useLogin();
    const handleNavigate = useNavigateToLogin();

    const handleRegister = async (values:SignupFormValuesInterface) => {
        await registerUser(values).unwrap();
        //whoa the amount of bugs to get this to work is ridiculous
        // await handleLogin({email: values.email, password: values.password});

    };
    useEffect(()=>{
        // (async () => {
        if(isRegisterSuccess){
            handleNavigate();
            Toast.show({
                type: 'primaryGreenColorToast',
                text1: 'Welcome To Grassp Health!',
                text2: 'Now please log in',
                onPress: () => Toast.hide(),
                visibilityTime:1400
                // autoHide:false
            });
        }
        // })()
    },[isRegisterSuccess])
    useEffect(()=>{
        if(isRegisterError){
            // const message = (registerError as any).data.message

            Toast.show({
                type: 'error',
                text1:(registerError as any).data.message,
                // text1: 'Something went wrong, please try again later.',
                // text2: 'If the issue persist contact customer support.',
                onPress: () => Toast.hide(),
                visibilityTime:3800
                // autoHide:false
            });
        }
    },[isRegisterError])
    return {handleRegister,isLoading,isRegisterSuccess,registerData};
}