import {View, Text} from "react-native";
import FABAddProductButton from "../components/FABAddProductButton";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ProductDetailScreenParam} from "../hooks/navigation/useNavigateToProductDetail";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {ProductDTO} from "../model/dto/ProductDTO";
import {selectedProductById} from "../feature/menu/slice/menuSlice";
import {useEffect} from "react";

export default () => {

    const route = useRoute<RouteProp<ProductDetailScreenParam>>();
    const { id } = route.params
    const productDTO = useSelector<RootState,ProductDTO | undefined>(state => selectedProductById(state, id));
    if(productDTO === undefined) return;//throw error product not found?

    const {
        id:productId,
        flowerType
    } =  productDTO ;


    return (
        <>
            <View>
                <Text>Product detail</Text>
                <Text>{productId}</Text>
                <Text>{flowerType}</Text>
            </View>
            <FABAddProductButton/>
        </>
    )
}