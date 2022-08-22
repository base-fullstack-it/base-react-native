import {useDispatch} from "react-redux";
import {StyleSheet} from "react-native";
import {Button} from "@rneui/themed";
import {ProductDTO} from "../../../../model/dto/ProductDTO";
import {WholeProductClass} from "../../../../model/class/product/WholeProductClass";


// export default ({idx,product, orderDetailInCartForProduct}) =>{
export default ({idx,product}:{idx:number,product:ProductDTO}) =>{
    // const dispatch = useDispatch();
    // const handleAddProductToCart = () => dispatch(addProductToCart(product, undefined,idx));
    const wholeProductClass = new WholeProductClass(product,idx);

    // const price = product.currentPrice.price * idx;
    // const displayPrice = createDisplayPrice(price);
    return <Button
        buttonStyle={styles.button}
        // onPress={handleAddProductToCart}
        title={wholeProductClass.getDisplayPrice()}
        // title={displayPrice}
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