import {View, Text, StatusBar,StyleSheet} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Lato_900Black_Italic
} from '@expo-google-fonts/lato';
import SplashView from "../../../components/SplashView";


export default (props: DrawerContentComponentProps) => {
    let [fontsLoaded] = useFonts({
        Lato_900Black_Italic,
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
                    {fontFamily: "Lato_900Black_Italic"}
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