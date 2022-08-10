import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import MenuScreen from "../../screen/MenuScreen";
import FABTabNavigator from "../../components/FABTabNavigator";
import MenuTabNavigation from "../MenuTabNavigation";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export type BottomTabNavigatorParamList = {
    MenuTabNavigation: undefined;
};
export default () => {
    const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                headerShown: false,
            }}
            tabBar={(props) => <FABTabNavigator {...props}/>}

        >
            <Tab.Screen name={"MenuTabNavigation"}
                        options={{
                            tabBarIcon:({color, size}) => (
                                <Ionicons name={"home-outline"} color={color} size={size}/>
                            )
                        }}
                        component={MenuTabNavigation} />
        </Tab.Navigator>
    )

}
