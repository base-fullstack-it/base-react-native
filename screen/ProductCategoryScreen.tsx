import {View, Text, SafeAreaView} from "react-native";
import {useSelector} from "react-redux";
import {MenuState, selectMenu} from "../feature/menu/slice/menuSlice";
import {RootState} from "../app/store";

export default () => {
    const menu = useSelector<RootState,MenuState>(selectMenu);
    return <SafeAreaView style={{flex:1}} >
        {console.log(menu.productCategories,'PRODUCTO22 CATEGORIAS')}
        <Text>WelcomeTo Product CATEGORY screen</Text>
    </SafeAreaView>
}