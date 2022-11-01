import {View, Text, StatusBar, StyleSheet, SafeAreaView} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useSelector} from "react-redux";
import CartItem from "../../../components/cart/CartItem";
import { useEffect } from "react";
import {CartState, getCartTotal} from "../../cart/cartSlice";
import {useAppDispatch} from "../../../app/hooks";
import {ProductToCartValues} from "../../../model/dto/ProductToCartValues";

export default (props: DrawerContentComponentProps) => {
    const { totalAmount, productCartList } = useSelector<any, CartState>((state) => state.cart);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [productCartList]);
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
            <SafeAreaView style={
                {
                    alignItems:"flex-start",alignContent:"space-between",
                    justifyContent:"space-between",
                    flex:1,
                    marginBottom:26,
                    marginLeft:23

                }}>
            {/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>*/}
                <View>
                {productCartList.map((productToCartValues:ProductToCartValues) => <CartItem productToCartValues={productToCartValues}/>)}
                </View>

            {/*</View>*/}
                <View>
                <Text>Total: ${totalAmount}</Text>
                <RightDrawerToCheckOutButton/>
                </View>
            </SafeAreaView>

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