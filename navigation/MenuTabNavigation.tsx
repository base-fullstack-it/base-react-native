import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabNavigator from "../components/TabNavigator";
import ProductScreen from "../screen/ProductScreen";
import ProductCategoryScreen from "../screen/ProductCategoryScreen";
import {useTheme} from "@rneui/themed";
export type MenuParamsList = {
    PRODUCTS: undefined;
    CATEGORIES: undefined;
};
const Tab = createMaterialTopTabNavigator<MenuParamsList>();

export default () => {
    const theme = useTheme();
  return (
    <Tab.Navigator initialRouteName={"PRODUCTS"}
                   tabBar={(props) => <TabNavigator {...props} />}
        // screenOptions={{
        //     // tabBarStyle: { backgroundColor: "red" },
        //     // tabBarLabelStyle: {color:"white"},
        //     tabBarActiveTintColor: theme.theme.colors.primary,
        //     tabBarInactiveTintColor: "yellow",
        //     // h
        // }}
    >
        <Tab.Screen component={ProductScreen} name="PRODUCTS"
                    //options={{title:"PRODUCTS"}}
        />
        <Tab.Screen component={ProductCategoryScreen} name="CATEGORIES" />
    </Tab.Navigator>
  );
}
