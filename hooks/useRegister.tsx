import {useLoginUserMutation, useRegisterUserMutation} from "../services/authApiSlice";
import {SignupFormValuesInterface} from "../feature/auth/page/SignupFormik";

import useLogin from "./useLogin";
import {useEffect} from "react";
import Toast from "react-native-toast-message";

export default ():(values: SignupFormValuesInterface) => Promise<void> => {
    const [
        registerUser,
        {
            data: registerData,
            isSuccess: isRegisterSuccess,
            isError: isRegisterError,
            error: registerError,
        },
    ] = useRegisterUserMutation();
    const handleLogin =  useLogin();

    const handleRegister = async (values:SignupFormValuesInterface) => {
        const dataSignedUp = await registerUser(values).unwrap();
        await handleLogin({email: values.email,password:values.password});

    };
    useEffect(()=>{
        if(isRegisterSuccess){
            Toast.show({
                type: 'primaryGreenColorToast',
                text1: 'Welcome To Grassp Health!',
                // text2: 'Look at our menu to see products available near you.',
                onPress: () => Toast.hide(),
                visibilityTime:1400
                // autoHide:false
            });
        }
    },[isRegisterSuccess])
    useEffect(()=>{
        if(registerError){
            Toast.show({
                type: 'error',
                text1: 'Something went wrong, please try again later.',
                text2: 'If the issue persist contact customer support.',
                onPress: () => Toast.hide(),
                visibilityTime:2400
                // autoHide:false
            });
        }
    },[registerError])
    return handleRegister;
}