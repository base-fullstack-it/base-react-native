import React from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "./app/store";
import {NavigationContainer} from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import toastConfig from "./config/toastConfig";
import {ThemeProvider} from "@rneui/themed";
import {theme} from "./theme/rneuiTheme";
import SplashScreen from "./screen/SplashScreen";
import useCustomFonts from "./hooks/useCustomFonts";
import { PersistGate } from "redux-persist/integration/react";

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
