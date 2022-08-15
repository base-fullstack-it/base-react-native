import {useAppDispatch} from "../app/hooks";
import {logout} from "../feature/auth/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import useNavigateToLogin from "./navigation/useNavigateToLogin";
import useNavigateToMenuTabNavigation from "./navigation/useNavigateToMenuTabNavigation";
import {useState} from "react";

type LogoutFunction = () => Promise<void>;

export default ():{ handleLogout: () => Promise<void>; loading: boolean } => {
    const handleNavigate = useNavigateToMenuTabNavigation();
    const dispatch = useAppDispatch();
    const [loading, setIsLoading] = useState(false);
    const handleLogout = async () => {
        // navigation.navigate("Login");
        setIsLoading(true);
        // handleNavigate();
        await AsyncStorage.clear();
        dispatch(logout());
        Toast.show({
            type: 'primaryGreenColorToast',
            text1: 'Goodbye!',
            onPress: () => Toast.hide(),
            visibilityTime:1400
            // autoHide:false
        });
        setIsLoading(false);
    }
    return {handleLogout,loading};
}