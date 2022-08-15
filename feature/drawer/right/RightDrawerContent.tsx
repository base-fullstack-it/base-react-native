import {View, Text, StatusBar,StyleSheet} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default (props: DrawerContentComponentProps) => {



    // return
    return (
        <SafeAreaProvider>
        <Header
            centerComponent={{
                text:"My Order",
                // style:styles.header
                style: [styles.header,
                    {fontFamily: "Lato-BoldItalic"}
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