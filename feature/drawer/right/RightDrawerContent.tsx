import {View, Text, StatusBar,StyleSheet} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useSelector} from "react-redux";
import CartItem from "../../../components/cart/CartItem";
import { useEffect } from "react";
import {getCartTotal} from "../../cart/cartSlice";
import {useAppDispatch} from "../../../app/hooks";

export default (props: DrawerContentComponentProps) => {
    const { totalAmount, items } = useSelector<any, any>((state) => state.cart);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [items]);
    // return
    return (
        <SafeAreaProvider>
        <Header
            centerComponent={{
                text:"My Order",
                // style:styles.header
                style: [styles.header,
                    {fontFamily: "Lato-BoldItalic"}
                ]
        }}
        />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>View Order</Text>
                {items.map((item:any) => <CartItem item={item}/>)}
                <Text>${totalAmount}</Text>

                <RightDrawerToCheckOutButton/>
            </View>
        </SafeAreaProvider>
)
    // </View>
}
const styles = StyleSheet.create({
    header:{
        fontSize:27,
        color:"white",
    }
});