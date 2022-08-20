import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {FlatList, View} from "react-native";
import {ProductCategoryDTO} from "../model/dto/ProductCategoryDTO";
import {getEnvVars} from "../environment";
import ProductCategoryListItem from "../components/category/ProductCategoryListItem";
const { apiUrl } = getEnvVars();
const renderItem = ({ item }:{item:ProductCategoryDTO}) => {
    return <ProductCategoryListItem item={item}/>
}
const keyExtractor = (productCategoryDTO:ProductCategoryDTO, index:number) => index.toString()

export default () => {
    const menu = useSelector<RootState,MenuState>(selectMenu);
    // console.log(menu.products,'PRODCMENUU')
    return  <FlatList
        keyExtractor={keyExtractor}
        data={menu.productCategories}
        renderItem={renderItem}></FlatList>



}