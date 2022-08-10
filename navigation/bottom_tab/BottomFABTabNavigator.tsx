import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import MenuScreen from "../../screen/MenuScreen";
import FABTabNavigator from "../../components/FABTabNavigator";
import MenuTabNavigation from "../MenuTabNavigation";

export type BottomTabNavigatorParamList = {
    mainzt: undefined;
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
            tabBar={(props) => <FABTabNavigator {...props}/>}

        >
            <Tab.Screen name={"mainzt"}
                        options={{
                            tabBarIcon:({color, size}) => (
                                <Ionicons name={"home-outline"} color={color} size={size}/>
                            )
                        }}
                        component={MenuTabNavigation} />
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
