import useGetAccessTokenDataFromAsyncStorage from "../hooks/useGetAccessTokenDataFromAsyncStorage";
import SplashView from "../components/SplashView";
import AuthorizationDirector from "../navigation/auth/AuthorizationDirector";
import * as SplashScreen from "expo-splash-screen";
import useLogout from "../hooks/useLogout";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();
export default () =>{
    // const {handleLogout} = useLogout();
    // useEffect(()=>{handleLogout},[])

    const isAppLoaded = useGetAccessTokenDataFromAsyncStorage();

    return (
        isAppLoaded
            ? <AuthorizationDirector/>
            :
            <SplashView/>
    )
}