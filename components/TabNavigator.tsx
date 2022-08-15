import {SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useTheme} from "@rneui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";
type TopBarProps = {
    state: any,
    descriptors: any,
    navigation: any,
    position: any
}

function TabNavigator({ state, descriptors, navigation, position }: TopBarProps) {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor:theme.theme.colors.primary }} />
        <View style={{ display: "flex", flexDirection:"column", backgroundColor:theme.theme.colors.primary}}>
            <View style={{ display: "flex", flexDirection: 'row',}}>
                <StatusBar barStyle={"light-content"}/>
                {state.routes.map((route: any, index:number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            key={"Touchable-Opacity-"+index}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={isFocused ?
                                {
                                    display: "flex",
                                    flex: 1,
                                    backgroundColor: "#0158BE",
                                    borderTopRightRadius:22,
                                    borderTopLeftRadius:22,
                                    borderBottomLeftRadius:-20,
                                    borderBottomRightRadius:-20,
                                } :
                                {
                                    display: "flex",
                                    backgroundColor: theme.theme.colors.primary,
                                    flex: 1
                                }}
                        >
                            <Text key={"Tab-Navigation-" + index} style={styles.tabLabel}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
        </>
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

export default TabNavigator;