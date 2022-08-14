import {useAppDispatch} from "../app/hooks";
import {logout} from "../feature/auth/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-toast-message";

type LogoutFunction = () => Promise<void>;

export default ():LogoutFunction => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        navigation.goBack();
        await AsyncStorage.clear();
        dispatch(logout());
        Toast.show({
            type: 'primaryGreenColorToast',
            text1: 'Goodbye!',
            onPress: () => Toast.hide(),
            visibilityTime:1400
            // autoHide:false
        });
    }
    return handleLogout;
}