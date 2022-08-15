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

    return <>
        <SafeAreaView style={{  backgroundColor:theme.theme.colors.primary, }} />
        <DrawerContentScrollView
            style={{marginTop:-inset.top}}
            {...props}
        >
            {/*<DrawerItemList {...props} />*/}
            <DrawerItem label={"Profile"} onPress={navigate} />

        </DrawerContentScrollView>
    </>


}