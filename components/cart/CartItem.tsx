import {View,Text} from "react-native";
import {Button, ListItem} from "@rneui/themed";
import {useAppDispatch} from "../../app/hooks";
import {decrease, increase, remove} from "../../feature/cart/cartSlice";
import {Ionicons} from "@expo/vector-icons";
export default ({item}:{item:any}) => {
    const dispatch = useAppDispatch();
    return<ListItem>
        {/*<Text>title:{item.title}</Text>*/}
        <Text>{item.title}</Text>
        <View style={{flexDirection:"column"}}>
            {/*<ion-icon name="chevron-up-outline"></ion-icon>*/}
            {/*<Ionicons name={"chevron-up-outline"}/>*/}
        <Button onPress={()=>dispatch(decrease(item.id))} title={"<"}/>
        <Text>{item.amount}</Text>
        <Button onPress={()=>dispatch(increase(item.id))} title={">"}/>
        </View>
    </ListItem>

}