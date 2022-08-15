import {View, Text, StatusBar,StyleSheet} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


export default (props: DrawerContentComponentProps) => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
    });
    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }

    // return
    return (
        <SafeAreaProvider>
        <Header
            centerComponent={{text:"My Order", style:styles.header}}
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
        // fontWeight:"200",
        fontFamily:'Inter_400Regular'
    }
});