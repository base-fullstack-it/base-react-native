import {Text, View} from "react-native";
import { FAB } from "@rneui/themed";

const MenuScreen: React.FC = props => {
    // const loggedInUser = useSelector(getLoggedInUser, shallowEqual);

    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(updateLoggedInUserInfo());
    // }, [dispatch]);

    return (
        <View >

            {/*<MenuVerification/>*/}
            <Text>Welcome to the menu screen</Text>
        </View>
    )
}
export default MenuScreen;