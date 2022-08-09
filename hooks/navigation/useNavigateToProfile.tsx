import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {AuthorizedParamList} from "../../navigation/auth/AuthorizedNavigator";

type ScreenProp = NativeStackNavigationProp<AuthorizedParamList, 'Profile'>;

export default (): () => void => {

    const navigation = useNavigation<ScreenProp>();

    const handleNavigate = () => navigation.navigate("Profile");

    return handleNavigate;

}