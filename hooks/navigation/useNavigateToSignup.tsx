import {NativeStackNavigationProp} from "@react-navigation/native-stack";
// import {BottomTabParamList} from "../../navigations/BottomTabNavigation";
import {useNavigation} from "@react-navigation/native";
import {NotAuthorizedParamList} from "../../navigation/auth/NotAuthorizedNavigator";

type ScreenProp = NativeStackNavigationProp<NotAuthorizedParamList, 'Signup'>;

export default (): () => void => {

    const navigation = useNavigation<any>();

    const handleNavigate = () => navigation.navigate("Signup");

    return handleNavigate;

}