import {createDrawerNavigator} from "@react-navigation/drawer";
import MainScreen from "../../../screen/MainScreen";
import LeftDrawerContent from "./LeftDrawerContent";

const LeftDrawer = createDrawerNavigator();

export default () => {
    return (
        <LeftDrawer.Navigator
            id="LeftDrawer"
            screenOptions={{
                drawerPosition: 'left',
                headerShown: false,
            }}
            //TODO appears to be a bug where drawerContent needs a prop
            drawerContent={(props) => <LeftDrawerContent {...props} />}
        >
            {/*This will not be shown*/}
            <LeftDrawer.Screen name="Home" component={MainScreen} />
        </LeftDrawer.Navigator>
    );
}
