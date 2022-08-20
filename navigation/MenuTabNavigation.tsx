import React from "react";
import TabNavigator from "../components/TabNavigator";
import ProductScreen from "../screen/ProductScreen";
import ProductCategoryScreen from "../screen/ProductCategoryScreen";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import useMenuFactory from "../hooks/menu/useMenuFactory";
import MenuLocationTypes from "../model/enum/MenuLocationTypes";

export type MenuParamsList = {
    PRODUCTS: undefined;
    CATEGORIES: undefined;
};
const Tab = createMaterialTopTabNavigator<MenuParamsList>();

export default () => {
    useMenuFactory(MenuLocationTypes.DEFAULT_MENU);

  return (
    <Tab.Navigator initialRouteName={"PRODUCTS"}
                   tabBar={(props) => <TabNavigator {...props} />}
                   // style={{marginTop:insets.top}}
    >
        <Tab.Screen component={ProductScreen} name="PRODUCTS"
                    //options={{title:"PRODUCTS"}}
        />
        <Tab.Screen component={ProductCategoryScreen} name="CATEGORIES" />
    </Tab.Navigator>
  );
}
