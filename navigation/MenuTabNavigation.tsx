import React from "react";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabNavigator from "../components/TabNavigator";
import ProductScreen from "../screen/ProductScreen";
import ProductCategoryScreen from "../screen/ProductCategoryScreen";
import {useTheme} from "@rneui/themed";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export type MenuParamsList = {
    PRODUCTS: undefined;
    CATEGORIES: undefined;
};
const Tab = createMaterialTopTabNavigator<MenuParamsList>();
// const Tab = createMaterialBottomTabNavigator<MenuParamsList>();

export default () => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator initialRouteName={"PRODUCTS"}
                   tabBar={(props) => <TabNavigator {...props} />}
                   // style={{marginTop:insets.top}}

        screenOptions={{
        }}
    >
        <Tab.Screen component={ProductScreen} name="PRODUCTS"
                    //options={{title:"PRODUCTS"}}
        />
        <Tab.Screen component={ProductCategoryScreen} name="CATEGORIES" />
    </Tab.Navigator>
  );
}
