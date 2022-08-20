import {ProductDTO} from "../../model/dto/ProductDTO";
import {View,Text} from "react-native";

export default ({productDTO}:{productDTO:ProductDTO}) => {
    console.log(productDTO)
return <View>
    <Text>{productDTO.productType}</Text>
    <Text>{productDTO.currentPrice.price}</Text>
    </View>
}