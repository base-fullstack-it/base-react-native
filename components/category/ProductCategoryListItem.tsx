import {ListItem} from "@rneui/themed";
import {ProductCategoryDTO} from "../../model/dto/ProductCategoryDTO";
import {Pressable} from "react-native";
import ProductCategoryAvatar from "../image/ProductCategoryAvatar";


export default ({item}: { item: ProductCategoryDTO }) => {

    const handlePress = () => {

    }
    return (
        <Pressable onPress={handlePress}>
            <ListItem style={{borderWidth: 0.17}} bottomDivider>
                <ListItem.Content style={{flexDirection: "row"}}>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ProductCategoryAvatar item={item}/>
            </ListItem>
        </Pressable>
    )
}