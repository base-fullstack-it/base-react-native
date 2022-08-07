import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import MenuScreen from "../../screen/MenuScreen";

export type BottomTabNavigatorParamList = {
    Menu: undefined;
    // Cart: undefined;
};
export default () => {
    const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                headerShown: false,
                // tabBarActiveTintColor: CustomColors.primaryColor
            }}
        >
            <Tab.Screen name={"Menu"}
                        options={{
                            tabBarIcon:({color, size}) => (
                                <Ionicons name={"home-outline"} color={color} size={size}/>
                            )
                        }}
                        component={MenuScreen} />
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
