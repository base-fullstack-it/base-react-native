import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {FlatList, View} from "react-native";
import {Avatar, ListItem,Image} from "@rneui/themed";
import {ProductCategoryDTO} from "../model/dto/ProductCategoryDTO";
import {getEnvVars} from "../environment";
import {vers} from "../app/api/apiSlice";
import {selectAuth} from "../feature/auth/slice/authSlice";
import ProductCategoryListItem from "../components/category/ProductCategoryListItem";
const { apiUrl } = getEnvVars();
const renderItem = ({ item }:{item:ProductCategoryDTO}) => {
    return <ProductCategoryListItem item={item}/>
}
const keyExtractor = (productCategoryDTO:ProductCategoryDTO, index:number) => index.toString()

export default () => {
    const menu = useSelector<RootState,MenuState>(selectMenu);
// let newArr = menu.productCategories;
// newArr?.c       oncat(menu.productCategories);
    return  <FlatList
        keyExtractor={keyExtractor}
        data={menu.productCategories}
        renderItem={renderItem}></FlatList>



}