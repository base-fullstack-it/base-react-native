import React from "react";
import {View, Text, Image, StyleSheet, ActivityIndicator, StatusBar} from "react-native";
import LottieView from 'lottie-react-native';
import {useTheme} from "@rneui/themed";

// import Lo
export default () => {
    const theme = useTheme();
    return <View style={{flex:1, justifyContent:"center"}}>
        <StatusBar barStyle={"dark-content"}/>

        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                // ref={animation}
                style={{
                    // width:20,
                    // height:30,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                // source={require('../assets/93405-leaves.json')}
                source={require('../assets/104305-loding-page-nature.json')}
            />
    </View>

        {/*<ActivityIndicator*/}
        {/*    size="large"*/}
        {/*    color={theme.theme.colors.primary}*/}
        {/*    style={{*/}
        {/*        position: 'absolute',*/}
        {/*        alignItems: 'center',*/}
        {/*        justifyContent: 'center',*/}
        {/*        left: 0,*/}
        {/*        right: 0,*/}
        {/*        top: 0,*/}
        {/*        bottom: 0,*/}
        {/*    }} />*/}

    </View>
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});