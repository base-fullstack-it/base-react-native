import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useTheme} from "@rneui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import FABMainMenuButtons from "./FABMainMenuButtons";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

function FABTabNavigator({ state, descriptors, navigation }: BottomTabBarProps) {
    return (
            <FABMainMenuButtons/>
    );
}


export default FABTabNavigator;