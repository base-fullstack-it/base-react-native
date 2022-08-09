import {useAppDispatch} from "../app/hooks";
import {logout} from "../feature/auth/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

type LogoutFunction = () => Promise<void>;

export default ():LogoutFunction => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        await AsyncStorage.clear();
        navigation.goBack();
        dispatch(logout());
    }
    return handleLogout;
}