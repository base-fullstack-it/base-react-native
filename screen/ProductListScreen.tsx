import {View,Text} from "react-native";
import {useSelector} from "react-redux";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ProductListScreenParam} from "../hooks/navigation/useNavigateToProductList";
import {selectedProductsForCategory} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";

export default () => {
    const route = useRoute<RouteProp<ProductListScreenParam>>();
    const {categoryId} = route.params;
    const items = useSelector<RootState>(state => selectedProductsForCategory(state, categoryId));
    // const items = useSelector(state => state.menu.products);
    console.log(items,'itemsite44dasuihdaigsmen999umsproducts')

    // const selectedProductsByProductCategory = useSelector(selectedProductsForCategory)
    return<View>
        <Text>{categoryId}</Text>
    </View>
}