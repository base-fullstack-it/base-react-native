import useGetAccessTokenDataFromAsyncStorage from "../hooks/useGetAccessTokenDataFromAsyncStorage";
import SplashView from "../components/SplashView";
import AuthorizationDirector from "../navigation/auth/AuthorizationDirector";
import * as SplashScreen from "expo-splash-screen";
import useCustomFonts from "../hooks/useCustomFonts";
SplashScreen.preventAutoHideAsync();
export default () =>{
    useCustomFonts();

    const isAppLoaded = useGetAccessTokenDataFromAsyncStorage();

    return (
        isAppLoaded
            ? <AuthorizationDirector/>
            :
            <SplashView/>
    )
}