import SignupFormik from "../feature/auth/page/SignupFormik";
import useRegister from "../hooks/useRegister";
import useGetAppAccessToken from "../hooks/useGetAppAccessToken";
import {View} from "react-native";

export default () => {


    const handleRegister = useRegister();
    return <SignupFormik
        handleRegister={handleRegister}
    />
};
