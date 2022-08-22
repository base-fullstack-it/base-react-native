import {useDispatch} from "react-redux";
import {StyleSheet} from "react-native";
import {Button} from "@rneui/themed";
import {ProductDTO} from "../../../../model/dto/ProductDTO";
import {WholeProductClass} from "../../../../model/class/product/WholeProductClass";
import {useAppDispatch} from "../../../../app/hooks";
import {addProductToCart} from "../../../../feature/cart/cartSlice";


export default ({wholeProductClass}:{wholeProductClass:WholeProductClass}) =>{
    const dispatch = useAppDispatch();

    return <Button
        buttonStyle={styles.button}
        onPress={
            () => dispatch(addProductToCart(wholeProductClass.productToCartValues()))
        }
        title={wholeProductClass.getDisplayPrice()}
        // disabled={(orderDetailInCartForProduct && idx === orderDetailInCartForProduct.quantity)}
        />


}
const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        // width: 50,
        margin: 5,
        // backgroundColor:CustomColors.primaryColor
    },
    buttonContainer: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});