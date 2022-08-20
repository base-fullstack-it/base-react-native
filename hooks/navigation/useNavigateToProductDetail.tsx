import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RouteProp, useNavigation} from "@react-navigation/native";
import {AuthorizedParamList} from "../../navigation/auth/AuthorizedNavigator";

//https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
export type ProductListScreenParam = {
    ProductList:{
        categoryId:number;
        categoryName:string;
    }
};

export default (): (categoryId: number,categoryName:string) => any => {

    const navigation = useNavigation<NativeStackNavigationProp<ProductListScreenParam>>();

    const handleNavigate = (categoryId:number,categoryName:string) => navigation.navigate("ProductList",{
        categoryId,
        categoryName
    });

    return handleNavigate;

}