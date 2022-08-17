import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {persistor, store} from "./app/store";
import {NavigationContainer} from "@react-navigation/native";
import AuthorizationDirector from "./navigation/auth/AuthorizationDirector";
import Toast from 'react-native-toast-message';
import toastConfig from "./config/toastConfig";
import {ThemeProvider} from "@rneui/themed";
import {theme} from "./theme/rneuiTheme";
import SplashScreen from "./screen/SplashScreen";
import useCustomFonts from "./hooks/useCustomFonts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// let persistor = persistStore(store);

export default function App() {
    useCustomFonts();

    return <>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <SplashScreen/>
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
        <Toast config={toastConfig}/>
    </>

}
