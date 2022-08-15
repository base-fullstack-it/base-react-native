import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {NavigationContainer} from "@react-navigation/native";
import AuthorizationDirector from "./navigation/auth/AuthorizationDirector";
import Toast from 'react-native-toast-message';
import toastConfig from "./config/toastConfig";
import {ThemeProvider} from "@rneui/themed";
import {theme} from "./theme/rneuiTheme";
import SplashScreen from "./screen/SplashScreen";
import useCustomFonts from "./hooks/useCustomFonts";


export default function App() {
    useCustomFonts();

    return <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <SplashScreen/>
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
        <Toast config={toastConfig}/>
        </>

}
