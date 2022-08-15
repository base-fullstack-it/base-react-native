import useGetAccessTokenDataFromAsyncStorage from "../hooks/useGetAccessTokenDataFromAsyncStorage";
import SplashView from "../components/SplashView";
import AuthorizationDirector from "../navigation/auth/AuthorizationDirector";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default () =>{
    const isAppLoaded = useGetAccessTokenDataFromAsyncStorage();
    return (
        // isAppLoaded
        //     ? <AuthorizationDirector/>
        //     :
            <SplashView/>
    )
}