import {View, Text} from "react-native";
import FABAddProductButton from "../components/FABAddProductButton";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ProductDetailScreenParam} from "../hooks/navigation/useNavigateToProductDetail";

export default () => {

    const route = useRoute<RouteProp<ProductDetailScreenParam>>();

    const { id } = route.params

    return (
        <>
            <View>
                <Text>Product detail</Text>
            </View>
            <FABAddProductButton/>
        </>
    )
}