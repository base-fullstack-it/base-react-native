import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type ScreenProp = NativeStackNavigationProp<any, 'ViewOrderDrawer'>;

export default (): () => void => {

    const navigation = useNavigation<ScreenProp>();

    const handleNavigate = () => navigation.navigate("ViewOrderDrawer");

    return handleNavigate;

}