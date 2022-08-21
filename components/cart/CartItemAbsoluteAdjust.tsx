import {Button, ListItem, useTheme} from "@rneui/themed";
import {Pressable, Text, View} from "react-native";
import {decrease, increase} from "../../feature/cart/cartSlice";
import {useAppDispatch} from "../../app/hooks";
import {ProductToCartValues} from "../../model/dto/ProductToCartValues";

//so this absolute is a child of a relative
//the absolute just starts where we tell it to start within relative
//then we can use flex inside of this of absolute to create the rows
export default ({productToCartValues,invokeToggle}:{productToCartValues:ProductToCartValues,invokeToggle: () => void}) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
        return <View style={{position:"absolute",opacity:0.913,width:"100%",backgroundColor:theme.theme.colors.primary}}>
            <View  style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Button
                    onPress={()=>dispatch(decrease(productToCartValues.productDTO.id))} title={"<"}/>
                <View style={{justifyContent:"center"}}>
                <Text style={{fontWeight:"700",color:"white"}}>
                    {productToCartValues.quantity}
                    </Text>
                </View>
                <Button
                    onPress={()=>dispatch(increase(productToCartValues.productDTO.id))} title={">"}/>
            <Pressable onPress={invokeToggle} style={{justifyContent:"center",alignItems:"center",borderLeftWidth:1,paddingLeft:14,borderColor:"white"}}>
                <Text style={{fontWeight:"700",color:"white"}}>Done</Text>
            </Pressable>
            </View>
        </View>
{/* <View style={{position:"absolute",backgroundColor:"blue",width:"25%",opacity:0.2,right:15}}>*/}
{/*<Text>Done</Text>*/}
{/*</View>*/}

}
