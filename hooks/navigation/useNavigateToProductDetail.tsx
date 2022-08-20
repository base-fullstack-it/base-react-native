import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RouteProp, useNavigation} from "@react-navigation/native";
import {AuthorizedParamList} from "../../navigation/auth/AuthorizedNavigator";

//https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
export type ProductDetailScreenParam = {
    ProductDetail:{
        id:number;
        name:string;
    }
};

export default (): (id: number,name:string) => any => {

    const navigation = useNavigation<NativeStackNavigationProp<ProductDetailScreenParam>>();

    const handleNavigate = (id:number,name:string) => navigation.navigate("ProductDetail",{
        id,
        name
    });

    return handleNavigate;

}