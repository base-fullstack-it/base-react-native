import {View,Text} from "react-native";
import {Button, ListItem} from "@rneui/themed";
import {useAppDispatch} from "../../app/hooks";
import {decrease, increase, remove} from "../../feature/cart/cartSlice";
import {Ionicons} from "@expo/vector-icons";
export default ({item}:{item:any}) => {
    const dispatch = useAppDispatch();
    return<ListItem style={{width:"100%"}}>
        <Text>{item.title}</Text>
        <View style={{flexDirection:"column"}}>
            {/*<ion-icon name="chevron-up-outline"></ion-icon>*/}
            {/*<Ionicons name={"chevron-up-outline"}/>*/}
        {/*<Button onPress={()=>dispatch(decrease(item.id))} title={"<"}/>*/}
        <Text>{item.amount}</Text>
        {/*<Button onPress={()=>dispatch(increase(item.id))} title={">"}/>*/}
        </View>
        <ListItem style={{
            position:"absolute",
            top:0,
            left:0,
            bottom:0,
            opacity: 0.60,
            backgroundColor:"red",
            width:"100%",
            justifyContent: 'center',
            alignItems: 'center'
            // height:"100%"
        }}>
            <Button
                style={{justifyContent:"flex-start"}}
                onPress={()=>dispatch(decrease(item.id))} title={"<"}/>
            <Text>{item.amount}</Text>
            <Button
                style={{justifyContent:"flex-end"}}
                onPress={()=>dispatch(increase(item.id))} title={">"}/>
        </ListItem>
    </ListItem>

}