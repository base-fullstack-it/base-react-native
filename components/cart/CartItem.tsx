import {View, Text, Pressable} from "react-native";
import {Button, ListItem} from "@rneui/themed";
import {useAppDispatch} from "../../app/hooks";
import CartItemAbsoluteAdjust from "./CartItemAbsoluteAdjust";
import useToggle from "../../hooks/useToggle";
export default ({item}:{item:any}) => {
    const dispatch = useAppDispatch();
    const {invokeToggle, toggleState} = useToggle();
    return<ListItem style={{width:"100%",position:"relative"}}>
        <Text>{item.title}</Text>

        {toggleState && <Pressable style={{borderStyle:"solid",borderWidth:1}} onPress={invokeToggle}><Text >{item.amount}</Text></Pressable>}
        {!toggleState &&
            <CartItemAbsoluteAdjust
                item={item}
                invokeToggle={invokeToggle}
            />
        }
    </ListItem>

}