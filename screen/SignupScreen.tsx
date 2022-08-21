import SignupFormik from "../feature/auth/page/SignupFormik";
import useRegister from "../hooks/useRegister";
import {Card} from "@rneui/themed";
import GrasspFormLogo from "../components/GrasspFormLogo";
import SplashScreen from "./SplashScreen";
import SplashView from "../components/SplashView";
import {useEffect, useState} from "react";
import useGetAppAccessToken from "../hooks/useGetAppAccessToken";

export default () => {
    useGetAppAccessToken();

    // const [loadingWithTimeout, setLoadingWithTimeout] = useState(true);
    const {handleRegister,isLoading,isRegisterSuccess,registerData} = useRegister();
    // useEffect(() => {
    //     if(!isLoading) {
    //         setTimeout(() => {
    //             setLoadingWithTimeout(false);
    //         }, 1500);
    //     }
    // }, [isLoading]);

    return (
        // isLoading || registerData?
        //     <SplashView/>
        //     :
            <Card>
                <SignupFormik
                    handleRegister={handleRegister}
                    isLoading={isLoading}
                />
            </Card>
    )
};
