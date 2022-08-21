import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {FlatList, SafeAreaView, StatusBar, View} from "react-native";
import {ProductCategoryDTO} from "../model/dto/ProductCategoryDTO";
import {getEnvVars} from "../environment";
import ProductCategoryListItem from "../components/category/ProductCategoryListItem";
import React from "react";
import {useTheme} from "@rneui/themed";
import useMenuFactory from "../hooks/menu/useMenuFactory";
import MenuLocationTypes from "../model/enum/MenuLocationTypes";
const { apiUrl } = getEnvVars();
const renderItem = ({ item }:{item:ProductCategoryDTO}) => {
    return <ProductCategoryListItem item={item}/>
}
const keyExtractor = (productCategoryDTO:ProductCategoryDTO, index:number) => index.toString()

export default () => {


    const menu = useSelector<RootState,MenuState>(selectMenu);
    const theme = useTheme();

    return  <>
        <SafeAreaView style={{ flex: 0, backgroundColor:theme.theme.colors.primary }} />
        <StatusBar barStyle={"light-content"}/>
        <FlatList
        keyExtractor={keyExtractor}
        data={menu.productCategories}
        renderItem={renderItem}/>
        </>



}