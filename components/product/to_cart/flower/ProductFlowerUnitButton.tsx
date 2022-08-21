import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {Button} from "@rneui/themed";
import {FlowerProductClass} from "../../../../model/class/product/FlowerProductClass";
import {ProductClass} from "../../../../model/class/product/ProductClass";
import {useAppDispatch} from "../../../../app/hooks";

// export default ({product, unit, orderDetailInCartForProduct}) =>{
export default ({flowerProductClass}:{flowerProductClass:FlowerProductClass}) =>{

    const dispatch = useAppDispatch();

    // console.log(product,"PRODUCCTRR",unit,'unit')
    // const dispatch = useDispatch();
    // const price = product.currentPrice[`${unit.name}Price`] || null;//https://stackoverflow.com/questions/60709946/using-or-syntax-inside-of-react-usestate-for-assignment
    // const displayPrice = createDisplayPrice(price);

    // const handleAddProductToCart = () => dispatch(addProductToCart(product, unit.name));

    //TODO: add props verified to disabled
    //|| !this.props.docsVerified}
    return <Button
        buttonStyle={styles.button}
        // onPress={handleAddProductToCart}
        // title={displayPrice}
        title={flowerProductClass.getDisplayPrice()}
        // disabled={(orderDetailInCartForProduct && orderDetailInCartForProduct.unit === unit.name)}
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
