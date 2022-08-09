import {createDrawerNavigator} from "@react-navigation/drawer";
import RightDrawerContent from "./RightDrawerContent";
import LeftDrawerScreen from "../left/LeftDrawerScreen";

const RightDrawer = createDrawerNavigator();

export default () => {
    return (
        <RightDrawer.Navigator
            useLegacyImplementation
            id="RightDrawer"
            drawerContent={(props) => <RightDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
            }}>
            <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
        </RightDrawer.Navigator>
    );
}