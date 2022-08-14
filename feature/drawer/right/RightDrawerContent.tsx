import {View, Text, StatusBar} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import RightDrawerToCheckOutButton from "../../../components/checkout/RightDrawerToCheckOutButton";

export default (props: DrawerContentComponentProps) => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>View Order</Text>
        <RightDrawerToCheckOutButton/>
    </View>
}