import {View,Text} from "react-native";
import {useSelector} from "react-redux";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ProductListScreenParam} from "../hooks/navigation/useNavigateToProductList";
import {selectedProductsForCategory, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";

export default () => {
    const route = useRoute<RouteProp<ProductListScreenParam>>();
    const {categoryId} = route.params;
    const items = useSelector<RootState>(state => selectedProductsForCategory(state, categoryId));
    console.log(items,'itemsite44das222uihdaigsmen999umsproducts')
    // const products = useSelector<RootState>(state => state.menu.products)
    // console.log(products,'MENUUUUUPRODUCTS')

    // const selectedProductsByProductCategory = useSelector(selectedProductsForCategory)
    return<View>
        <Text>{categoryId}</Text>
    </View>
}