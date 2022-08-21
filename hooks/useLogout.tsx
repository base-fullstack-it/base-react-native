import {useAppDispatch} from "../app/hooks";
import {logout} from "../feature/auth/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import {clearCart} from "../feature/cart/cartSlice";
import {persistor} from "../app/store";


type LogoutFunction = () => Promise<void>;

export default ():{ handleLogout: () => Promise<void> } => {

    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        dispatch(clearCart())
        await AsyncStorage.clear();
        //https://stackoverflow.com/questions/52296953/how-to-reset-value-of-state-in-a-redux-store
        await persistor.purge();
        dispatch(logout());
        Toast.show({
            type: 'primaryGreenColorToast',
            text1: 'Goodbye!',
            onPress: () => Toast.hide(),
            visibilityTime:1400
        });
    }
    return {handleLogout};
}