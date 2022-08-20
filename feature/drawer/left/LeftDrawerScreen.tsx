import {createDrawerNavigator} from "@react-navigation/drawer";
import LeftDrawerContent from "./LeftDrawerContent";
import {SearchBar, useTheme} from "@rneui/themed";
import ViewSearchBarHeader from "../../../components/ViewSearchBarHeader";
import BottomFABTabNavigator from "../../../navigation/bottom_tab/BottomFABTabNavigator";

const LeftDrawer = createDrawerNavigator();
export default () => {
    return (
        <LeftDrawer.Navigator
            id="LeftDrawer"
            screenOptions={{
                drawerPosition: 'left',
                headerShown: false,
                swipeEdgeWidth:0,
            }}
            //TODO appears to be a bug where drawerContent needs a prop
            drawerContent={(props) => <LeftDrawerContent {...props} />}
        >
            <LeftDrawer.Screen
            name="Home" component={BottomFABTabNavigator} />
        </LeftDrawer.Navigator>
    );
}
