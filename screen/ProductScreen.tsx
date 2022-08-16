import {View, Text, SafeAreaView, StatusBar} from "react-native";
import {useTheme} from "@rneui/themed";
import {selectMenu} from "../feature/menu/slice/menuSlice";
import {useSelector} from "react-redux";

export default () => {
    const theme = useTheme();
    const menu = useSelector(selectMenu);
    // return <SafeAreaView style={{flex:1}}>
    return <SafeAreaView style={{flex:1}}>
        {console.log(menu,'menu state from')}
        {/*<FocusedStatusBar barStyle="light-content" backgroundColor={theme.theme.colors.primary}/>*/}
        {/*<StatusBar barStyle="light-content" backgroundColor={theme.theme.colors.primary}/>*/}
        {/*<StatusBar barStyle="light-content" backgroundColor={color:theme.theme.colors.primary}/>*/}
        <Text>WelcomeTo Product screen</Text>
        {/*<FABMainMenuButtons/>*/}
    </SafeAreaView>
}