import {NativeStackNavigationProp} from "@react-navigation/native-stack";
// import {BottomTabParamList} from "../../navigations/BottomTabNavigation";
import {useNavigation} from "@react-navigation/native";
import {NotAuthorizedParamList} from "../../navigation/auth/NotAuthorizedNavigator";
import {BottomTabNavigatorParamList} from "../../navigation/bottom_tab/BottomFABTabNavigator";

type ScreenProp = NativeStackNavigationProp<BottomTabNavigatorParamList, 'MenuTabNavigation'>;

export default (): () => void => {

    const navigation = useNavigation<ScreenProp>();

    const handleNavigate = () => navigation.navigate("MenuTabNavigation");

    return handleNavigate;

}