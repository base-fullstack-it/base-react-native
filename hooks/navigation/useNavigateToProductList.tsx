import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RouteProp, useNavigation} from "@react-navigation/native";
import {AuthorizedParamList} from "../../navigation/auth/AuthorizedNavigator";

type ScreenProp = NativeStackNavigationProp<AuthorizedParamList, 'ProductList'>;
//https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
export type ProductListScreenParam = {
    ProductList:{
        categoryId:number;
    }
};

export default (): (categoryId: number) => any => {

    const navigation = useNavigation<NativeStackNavigationProp<ProductListScreenParam>>();

    const handleNavigate = (categoryId:number) => navigation.navigate("ProductList",{categoryId});

    return handleNavigate;

}