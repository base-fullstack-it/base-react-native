import {View, Text, SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {ListItem} from "@rneui/themed";
import {ProductCategoryDTO} from "../model/dto/ProductCategoryDTO";

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]
const renderItem = ({ item }:{item:ProductCategoryDTO}) => (
    <ListItem bottomDivider>
        {console.log(item," I AM FROM ZEUS")}
        {/*<Avatar source={{uri: item.avatar_url}} />*/}
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

    return <FlatList
        keyExtractor={keyExtractor}
        data={menu.productCategories}
        renderItem={renderItem}
    />

}