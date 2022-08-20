import {View,Text} from "react-native";
import {useSelector} from "react-redux";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ProductListScreenParam} from "../hooks/navigation/useNavigateToProductList";

export default () => {
    const route = useRoute<RouteProp<ProductListScreenParam>>();
    const {categoryId} = route.params;

    // const selectedProducts = useSelector()
    return<View>
        <Text>{categoryId}</Text>
    </View>
}