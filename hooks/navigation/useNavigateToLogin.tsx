import {NativeStackNavigationProp} from "@react-navigation/native-stack";
// import {BottomTabParamList} from "../../navigations/BottomTabNavigation";
import {useNavigation} from "@react-navigation/native";
import {NotAuthorizedParamList} from "../../navigation/auth/NotAuthorizedNavigator";

type ScreenProp = NativeStackNavigationProp<NotAuthorizedParamList, 'Login'>;

export default (): () => void => {

    const navigation = useNavigation<ScreenProp>();

    const handleNavigate = () => navigation.navigate("Login");

    return handleNavigate;

}