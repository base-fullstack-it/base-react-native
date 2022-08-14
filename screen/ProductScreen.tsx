import {View, Text, SafeAreaView, StatusBar} from "react-native";
import {useTheme} from "@rneui/themed";

export default () => {
    const theme = useTheme();
    // return <SafeAreaView style={{flex:1}}>
    return <SafeAreaView style={{flex:1}}>
        {/*<FocusedStatusBar barStyle="light-content" backgroundColor={theme.theme.colors.primary}/>*/}
        {/*<StatusBar barStyle="light-content" backgroundColor={theme.theme.colors.primary}/>*/}
        {/*<StatusBar barStyle="light-content" backgroundColor={color:theme.theme.colors.primary}/>*/}
        <Text>WelcomeTo Product screen</Text>
        {/*<FABMainMenuButtons/>*/}
    </SafeAreaView>
}