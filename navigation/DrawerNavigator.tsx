import {
    createDrawerNavigator, DrawerContentScrollView, DrawerItem,
} from '@react-navigation/drawer';
import BottomTabNavigator from "./bottom_tab/BottomTabNavigator";
// import MainScreen from "../screens/MainScreen";
// import LogoTitle from "../components/auth/LogoTitle";
// import CustomColors from '../constants/CustomColors';
// import ProfileScreen from "../screens/ProfileScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerActiveTintColor: CustomColors.primaryColor,
                // headerTintColor:CustomColors.primaryColor
            }}
            initialRouteName={"Home"}
        >
            <Drawer.Screen name="Home"
                           // options={{headerTitle: (props) => <LogoTitle />}}
                           component={BottomTabNavigator} />
            {/*<Drawer.Screen name="Profile" component={ProfileScreen} />*/}

        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
