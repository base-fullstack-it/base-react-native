import useGetAccessTokenDataFromAsyncStorage from "../hooks/useGetAccessTokenDataFromAsyncStorage";
import SplashView from "../components/SplashView";
import AuthorizationDirector from "../navigation/auth/AuthorizationDirector";
import * as SplashScreen from "expo-splash-screen";
import {useSelector} from "react-redux";
import {selectAuth} from "../feature/auth/slice/authSlice";
SplashScreen.preventAutoHideAsync();
export default () =>{
    const isAppLoaded = useGetAccessTokenDataFromAsyncStorage();
    const auth = useSelector(selectAuth);
    return (isAppLoaded ? <AuthorizationDirector/> : <SplashView/>
    )
}