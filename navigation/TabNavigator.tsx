import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MenuScreen from "../screens/MenuScreen";
// import CartScreen from "../screens/CartScreen";
import {Ionicons} from "@expo/vector-icons";
// import CustomColors from "../constants/CustomColors"

export type TabParamList = {
    Menu: undefined;
    Cart: undefined;
};

// const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                headerShown: false,

                // tabBarActiveTintColor: CustomColors.primaryColor
            }}
        >
            {/*<Tab.Screen name={"Menu"}*/}
            {/*options={{*/}
            {/*    tabBarIcon:({color, size}) => (*/}
            {/*        <Ionicons name={"home-outline"} color={color} size={size}/>*/}
            {/*    )*/}
            {/*}}*/}
            {/*            component={MenuScreen} />*/}
            {/*<Tab.Screen name={"Cart"}*/}
            {/*            options={{*/}
            {/*                tabBarIcon:({color, size}) => (*/}
            {/*                    <Ionicons name={"cart-outline"} color={color} size={size}/>*/}
            {/*                )*/}
            {/*            }}*/}
            {/*            component={CartScreen} />*/}
        </Tab.Navigator>
    )
}
export default TabNavigator;