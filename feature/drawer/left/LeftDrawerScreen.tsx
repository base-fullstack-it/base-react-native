import {createDrawerNavigator} from "@react-navigation/drawer";
import MainScreen from "../../../screen/MainScreen";

const LeftDrawer = createDrawerNavigator();

export default () => {
    return (
        <LeftDrawer.Navigator
            useLegacyImplementation
            id="LeftDrawer"
            screenOptions={{ drawerPosition: 'left',headerShown: false }}>
            <LeftDrawer.Screen name="Home" component={MainScreen} />
        </LeftDrawer.Navigator>
    );
}
