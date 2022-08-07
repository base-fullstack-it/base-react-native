// import {NativeStackNavigationProp} from "@react-navigation/native-stack";
// import {BottomTabParamList} from "../../navigations/BottomTabNavigation";
import {useNavigation} from "@react-navigation/native";

// type ScreenProp = NativeStackNavigationProp<BottomTabParamList, 'Personal'>;

export default (): () => void => {

    const navigation = useNavigation<any>();

    const handleNavigate = () => navigation.navigate("Personal");

    return handleNavigate;

}