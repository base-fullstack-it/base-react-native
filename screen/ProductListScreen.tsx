import {View, Text, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ProductListScreenParam} from "../hooks/navigation/useNavigateToProductList";
import {selectedProductsForCategory, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";
import {ProductDTO} from "../model/dto/ProductDTO";
import ProductListItem from "../components/product/ProductListItem";
const renderItem = ({ item }:{item:ProductDTO}) => {
    return <ProductListItem productDTO={item}/>
}
const keyExtractor = (productDTO:ProductDTO, index:number) => index.toString()

export default () => {
    const route = useRoute<RouteProp<ProductListScreenParam>>();
    const {categoryId} = route.params;
    const productDTOList = useSelector<RootState,ProductDTO[]>(state => selectedProductsForCategory(state, categoryId));

    return  <FlatList
    keyExtractor={keyExtractor}
    data={productDTOList}
    renderItem={renderItem}></FlatList>

}