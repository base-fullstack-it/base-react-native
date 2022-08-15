import {useLoginUserMutation, useRegisterUserMutation} from "../services/authApiSlice";
import {SignupFormValuesInterface} from "../feature/auth/page/SignupFormik";

import useLogin from "./useLogin";
import {useEffect, useState} from "react";
import Toast from "react-native-toast-message";

export default ():(values: SignupFormValuesInterface) => Promise<void> => {

    const [email, setEmail] = useState<any>(undefined);
    const [password, setPassword] = useState<any>(undefined);
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
        setEmail(values.email);
        setPassword(values.password);

    };
    useEffect(()=>{
        (async () => {
        if(isRegisterSuccess){
            await handleLogin({email: email,password:password});

            Toast.show({
                type: 'primaryGreenColorToast',
                text1: 'Welcome To Grassp Health!',
                // text2: 'Look at our menu to see products available near you.',
                onPress: () => Toast.hide(),
                visibilityTime:1400
                // autoHide:false
            });
        }
        })()
    },[isRegisterSuccess])
    useEffect(()=>{
        if(isRegisterError){
            console.log((registerError as any).data,'registerErrorregisterError')
            // const message = (registerError as any).data.message

            Toast.show({
                type: 'error',
                text1:(registerError as any).data.message,
                // text1: 'Something went wrong, please try again later.',
                // text2: 'If the issue persist contact customer support.',
                onPress: () => Toast.hide(),
                visibilityTime:2400
                // autoHide:false
            });
        }
    },[isRegisterError])
    return handleRegister;
}