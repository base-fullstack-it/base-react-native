import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {FlatList, View} from "react-native";
import {Avatar, ListItem,Image} from "@rneui/themed";
import {ProductCategoryDTO} from "../model/dto/ProductCategoryDTO";
import PlaceHolderImage from "../image/PlaceHolderImage";
const renderItem = ({ item }:{item:ProductCategoryDTO}) => (
    <ListItem style={{borderWidth:0.17}} bottomDivider >
        {console.log(item," I AM FROM ZEUS")}
        {/*<Image*/}
        {/*    resizeMode={"contain"}*/}
        {/*    style={{height:30}}*/}
        {/*    source={require("../assets/splash.png")}*/}
        {/*/>*/}
        <ListItem.Content style={{flexDirection:"row"}}>

            <ListItem.Title>{item.name}</ListItem.Title>
            {/*<ListItem.Subtitle>{item.imageLocation}</ListItem.Subtitle>*/}
        </ListItem.Content>
        {/*<Avatar size={'xlarge'}source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} />*/}
        <Avatar size={'xlarge'} source={require("../assets/splash.png")} />
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