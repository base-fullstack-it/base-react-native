import SignupFormik from "../feature/auth/page/SignupFormik";
import useRegister from "../hooks/useRegister";
import {Card} from "@rneui/themed";
import GrasspFormLogo from "../components/GrasspFormLogo";
import SplashScreen from "./SplashScreen";
import SplashView from "../components/SplashView";

export default () => {

    const {handleRegister,isLoading,isRegisterSuccess,registerData} = useRegister();

    return (!isLoading && !isRegisterSuccess && !registerData ?
            <Card>
                <SignupFormik
                    handleRegister={handleRegister}
                />
            </Card>
            :
            <SplashView/>
    )
};
