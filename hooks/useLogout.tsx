import {useAppDispatch} from "../app/hooks";
import {logout} from "../feature/auth/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LogoutFunction = () => Promise<void>;

export default ():LogoutFunction => {
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        await AsyncStorage.clear();
        dispatch(logout());
    }
    return handleLogout;
}