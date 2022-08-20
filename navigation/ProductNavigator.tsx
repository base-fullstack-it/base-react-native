import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useTheme} from "@rneui/themed";
import ProductListScreen from "../screen/ProductListScreen";
import ProductCategoryScreen from "../screen/ProductCategoryScreen";

export type ProductParamList = {
    ProductCategoryScreen:undefined;
    ProductList:undefined;
};

const Stack = createNativeStackNavigator<ProductParamList>();

export default () => {
    const theme = useTheme();

    return (
        <Stack.Navigator
            initialRouteName='ProductCategoryScreen'
        >
            <Stack.Screen
                name='ProductCategoryScreen'
                options={{
                 headerShown:false
                }}
                component={ProductCategoryScreen}
            />
            <Stack.Screen
                name='ProductList'
                options={({route,navigation}:{route:any,navigation:any}) => ({
                    headerBackTitle:'',
                    headerTintColor:"white",
                    headerTitle:route.params.categoryName,
                    headerStyle: {
                        backgroundColor: theme.theme.colors.primary,
                    },
                })
                }
                component={ProductListScreen}
            />
        </Stack.Navigator>
    );
};

