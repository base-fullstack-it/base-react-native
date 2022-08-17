import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {FlatList, View} from "react-native";
import {ListItem} from "@rneui/themed";
import {ProductCategoryDTO} from "../model/dto/ProductCategoryDTO";
const renderItem = ({ item }:{item:ProductCategoryDTO}) => (
    <ListItem bottomDivider>
        {console.log(item," I AM FROM ZEUS")}
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.imageLocation}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem>
)
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