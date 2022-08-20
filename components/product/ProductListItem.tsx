import {ListItem} from "@rneui/themed";
import {Pressable} from "react-native";
import {ProductDTO} from "../../model/dto/ProductDTO";
import ProductAvatar from "../image/ProductAvatar";
import useNavigateToProductList from "../../hooks/navigation/useNavigateToProductList";

export default ({productDTO}: { productDTO: ProductDTO }) =>{
    console.log(productDTO,'productDTOproductDTO')

    const handleNavigate = useNavigateToProductList();
    const handlePress = () => {
        // console.log(item,'ITEMA')
        // handleNavigate(item.id);
        // navigation();
    }

    return (
        <Pressable onPress={handlePress}>
            <ListItem style={{borderWidth: 0.17}} bottomDivider>
                <ProductAvatar item={productDTO}/>
                <ListItem.Content style={{flexDirection: "row"}}>
                    <ListItem.Title>{productDTO.name}</ListItem.Title>
                </ListItem.Content>
                {/*<ProductCategoryAvatar item={item}/>*/}
            </ListItem>
        </Pressable>
    )
}