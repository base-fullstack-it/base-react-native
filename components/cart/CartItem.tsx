import {Text, Pressable} from "react-native";
import { ListItem} from "@rneui/themed";
import CartItemAbsoluteAdjust from "./CartItemAbsoluteAdjust";
import useToggle from "../../hooks/useToggle";
export default ({item}:{item:any}) => {
    const {invokeToggle, toggleState} = useToggle();
    return<ListItem style={{width:"100%",height:50,position:"relative"}}>
        <Text>{item.title}</Text>
        {!toggleState ?
            <Pressable style={{borderStyle:"solid",borderWidth:1}} onPress={invokeToggle}><Text >{item.amount}</Text></Pressable>
            :
            <CartItemAbsoluteAdjust
                item={item}
                invokeToggle={invokeToggle}
            />
        }
    </ListItem>

}