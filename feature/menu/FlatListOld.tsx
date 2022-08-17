import {FlatList} from "react-native";
import {ProductCategoryDTO} from "../../model/dto/ProductCategoryDTO";
import {ListItem} from "@rneui/themed";
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
export default ({productCategories}:{productCategories:ProductCategoryDTO[]}) => {
    return <FlatList
    keyExtractor={keyExtractor}
    data={productCategories}
    renderItem={renderItem}></FlatList>
}