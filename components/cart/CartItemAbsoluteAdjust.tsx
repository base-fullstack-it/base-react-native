import {Button, ListItem, useTheme} from "@rneui/themed";
import {Pressable, Text, View} from "react-native";
import {decrease, increase} from "../../feature/cart/cartSlice";
import {useAppDispatch} from "../../app/hooks";

//so this absolute is a child of a relative
//the absolute just starts where we tell it to start within relative
//then we can use flex inside of this of absolute to create the rows
export default ({item,invokeToggle}:{item:any,invokeToggle: () => void}) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
        return <View style={{position:"absolute",opacity:0.913,width:"100%",backgroundColor:theme.theme.colors.primary}}>
            <View  style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Button
                    color={"success"}
                    onPress={()=>dispatch(decrease(item.id))} title={"<"}/>
                <View style={{justifyContent:"center"}}>
                <Text style={{fontWeight:"700",color:"white"}}>
                    {item.amount}
                    </Text>
                </View>
                <Button
                    color={"success"}
                    onPress={()=>dispatch(increase(item.id))} title={">"}/>
            {/*</View>*/}
            {/*/!*<View style={{position:"absolute",left:10}}>*!/*/}
            {/*<View style={{left:70}}>*/}
            {/*    <Text>Done</Text>*/}
            <Pressable onPress={invokeToggle} style={{justifyContent:"center",alignItems:"center",borderLeftWidth:1,paddingLeft:10,borderColor:"white"}}>
                <Text style={{fontWeight:"700",color:"white"}}>Done</Text>
            </Pressable>
            </View>
        </View>
{/* <View style={{position:"absolute",backgroundColor:"blue",width:"25%",opacity:0.2,right:15}}>*/}
{/*<Text>Done</Text>*/}
{/*</View>*/}

}
