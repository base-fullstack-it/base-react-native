import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import useNavigateToProfile from "../../../hooks/navigation/useNavigateToProfile";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import FocusAwareStatusBar from "../../../components/FocusAwareStatusBar";
import {Header, useTheme} from "@rneui/themed";

export default (props:DrawerContentComponentProps) => {
    const inset = useSafeAreaInsets();
    const navigate = useNavigateToProfile();
    const theme = useTheme();

    // return <View style={{flex:1}}>
    return <>
        <SafeAreaView style={{ flex: 0, backgroundColor:theme.theme.colors.primary }} />
        <SafeAreaView style={{flex:1}}>
        <DrawerContentScrollView
            {...props}
        >
            {/*<DrawerItemList {...props} />*/}
            <DrawerItem label={"Profile"} onPress={navigate} />

        </DrawerContentScrollView>
    </SafeAreaView>
    </>


}