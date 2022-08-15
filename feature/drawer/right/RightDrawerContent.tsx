import {View, Text, StatusBar,StyleSheet} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Inter_600SemiBold
} from '@expo-google-fonts/inter';
import SplashView from "../../../components/SplashView";


export default (props: DrawerContentComponentProps) => {
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });
    if (!fontsLoaded) {
        return <SplashView />;
    }

    // return
    return (
        <SafeAreaProvider>
        <Header
            centerComponent={{
                text:"My Order",
                // style:styles.header
                style: [styles.header,
                    {fontFamily: "Inter_600SemiBold"}
                ]
        }}
        />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>View Order</Text>

                <RightDrawerToCheckOutButton/>
            </View>
        </SafeAreaProvider>
)
    // </View>
}
const styles = StyleSheet.create({
    header:{
        fontSize:27,
        color:"white",
    }
});