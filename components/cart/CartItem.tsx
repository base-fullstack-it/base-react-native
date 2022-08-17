import {View,Text} from "react-native";
import {Button, ListItem} from "@rneui/themed";
import {useAppDispatch} from "../../app/hooks";
import {decrease, increase, remove} from "../../feature/cart/cartSlice";
export default ({item}:{item:any}) => {
    const dispatch = useAppDispatch();
    return<ListItem>
        {/*<Text>title:{item.title}</Text>*/}
        <Text>price:{item.price}</Text>
        <Button onPress={()=>dispatch(decrease(item.id))} title={"<"}/>
        <Text>{item.amount}</Text>
        <Button onPress={()=>dispatch(increase(item.id))} title={">"}/>
    </ListItem>

}