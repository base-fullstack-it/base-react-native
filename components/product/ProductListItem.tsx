import {ListItem} from "@rneui/themed";
import {ProductCategoryDTO} from "../../model/dto/ProductCategoryDTO";
import {Pressable,Text} from "react-native";
import useNavigateToProductList from "../../hooks/navigation/useNavigateToProductList";
import {ProductDTO} from "../../model/dto/ProductDTO";
import ProductAvatar from "../image/ProductAvatar";

export default ({productDTO}: { productDTO: ProductDTO }) =>{
    console.log(productDTO,'productDTOproductDTO')

    // const handleNavigate = useNavigateToProductList();
    const handlePress = () => {
        // console.log(item,'ITEMA')
        // handleNavigate(item.id);
        // navigation();
    }

    return (
        <Pressable onPress={handlePress}>
            <ListItem style={{borderWidth: 0.17}} bottomDivider>
                <ListItem.Content style={{flexDirection: "row"}}>
                    <ListItem.Title>{productDTO.name}</ListItem.Title>
                </ListItem.Content>
                {/*<ProductCategoryAvatar item={item}/>*/}
                <ProductAvatar item={productDTO}/>
            </ListItem>
        </Pressable>
    )
}