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


export default function App() {

    return <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        {/*<AuthorizationDirector/>*/}
                        <SplashScreen/>
                    </NavigationContainer>
                </ThemeProvider>
            </Provider>
        <Toast config={toastConfig}/>
        </>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
