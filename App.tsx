import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {NavigationContainer} from "@react-navigation/native";
import AuthorizationDirector from "./navigation/auth/AuthorizationDirector";

export default function App() {

    return <Provider store={store}>
        <NavigationContainer>
            <AuthorizationDirector/>
        </NavigationContainer>
    </Provider>

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
