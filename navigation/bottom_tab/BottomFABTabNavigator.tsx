import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import MenuScreen from "../../screen/MenuScreen";
import FABTabNavigator from "../../components/FABTabNavigator";
import MenuTabNavigation from "../MenuTabNavigation";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useLoggedInUserQuery} from "../../services/userApiSlice";
import ProductCategoryScreen from "../../screen/ProductCategoryScreen";
import useMenuFactory from "../../hooks/menu/useMenuFactory";
import MenuLocationTypes from "../../model/enum/MenuLocationTypes";
import ProductListScreen from "../../screen/ProductListScreen";
import {useTheme} from "@rneui/themed";
import ProductNavigator from "../ProductNavigator";

export type BottomTabNavigatorParamList = {

    ProductNavigator: undefined;
};
export default () => {
    const theme = useTheme();
    const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

    useMenuFactory(MenuLocationTypes.DEFAULT_MENU);

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
