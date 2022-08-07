import {useLoginUserMutation, useRegisterUserMutation} from "../services/authApiSlice";
import {SignupFormValuesInterface} from "../feature/auth/page/SignupFormik";

import useLogin from "./useLogin";

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
    return handleRegister;
}