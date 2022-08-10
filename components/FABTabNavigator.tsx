import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useTheme} from "@rneui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import FABMainMenuButtons from "./FABMainMenuButtons";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
type TopBarProps = {
    state: any,
    descriptors: any,
    navigation: any,
    position: any
}

function FABTabNavigator({ state, descriptors, navigation }: BottomTabBarProps) {
    const theme = useTheme();
    return (
        <View style={{ display: "flex", flexDirection:"column", backgroundColor: "#ffffff"}}>
            <FABMainMenuButtons/>
        </View>
    );
}
const styles = StyleSheet.create({
    tabLabel: {
        color: "white",
        marginTop: 0,
        marginBottom: 0,
        textAlign: "center",
        padding: 4,
        paddingVertical: 16
    }
})

export default FABTabNavigator;