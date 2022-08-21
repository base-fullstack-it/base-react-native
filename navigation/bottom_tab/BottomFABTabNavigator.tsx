import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FABTabNavigator from "../../components/FABTabNavigator";
import {useTheme} from "@rneui/themed";
import ProductNavigator from "../ProductNavigator";

export type BottomTabNavigatorParamList = {

    ProductNavigator: undefined;
};
export default () => {
    const theme = useTheme();
    const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

    return (
        <Tab.Navigator
            tabBar={(props) => <FABTabNavigator {...props}/>}
        >
            {/*<Tab.Screen name={"MenuTabNavigation"}*/}
            {/*            options={{*/}
            {/*                tabBarIcon:({color, size}) => (*/}
            {/*                    <Ionicons name={"home-outline"} color={color} size={size}/>*/}
            {/*                )*/}
            {/*            }}*/}
            {/*            component={MenuTabNavigation} />*/}
            <Tab.Screen name={"ProductNavigator"}
                        options={{
                            // tabBarShowLabel:false,
                            headerShown: false,
                        }}
                        component={ProductNavigator} />
        </Tab.Navigator>
    )

}
