import {createDrawerNavigator} from "@react-navigation/drawer";
import RightDrawerContent from "./RightDrawerContent";
import LeftDrawerScreen from "../left/LeftDrawerScreen";

const RightDrawer = createDrawerNavigator();

export default () => {
    return (
        <RightDrawer.Navigator
            id="RightDrawer"

            drawerContent={(props) => <RightDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
                swipeEdgeWidth:0,
                // swipeEnabled:false

            }}

        >
            <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
        </RightDrawer.Navigator>
    );
}