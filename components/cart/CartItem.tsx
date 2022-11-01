import {Text, Pressable} from "react-native";
import { ListItem} from "@rneui/themed";
import CartItemAbsoluteAdjust from "./CartItemAbsoluteAdjust";
import useToggle from "../../hooks/useToggle";
import {ProductToCartValues} from "../../model/dto/ProductToCartValues";
export default ({productToCartValues}:{productToCartValues:ProductToCartValues}) => {
    const {invokeToggle, toggleState} = useToggle();
    return<ListItem style={{width:"100%",height:50,position:"relative"}}>
        <Text>{productToCartValues.productDTO.name}</Text>
        {!toggleState ?
            <Pressable style={{borderStyle:"solid",borderWidth:1}} onPress={invokeToggle}><Text style={{paddingHorizontal:5,paddingBottom:9,paddingTop:2}}>{productToCartValues.quantity}</Text></Pressable>
            :
            <CartItemAbsoluteAdjust
                productToCartValues={productToCartValues}
                invokeToggle={invokeToggle}
            />
        }
    </ListItem>

}