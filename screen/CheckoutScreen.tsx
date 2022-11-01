import {SafeAreaView, StatusBar, Text} from "react-native";
import PlaceOrderButton from "../components/checkout/PlaceOrderButton";

export default () => {

    return  <SafeAreaView style={
        {
            alignItems:"flex-start",alignContent:"space-between",
            justifyContent:"space-between",
            flex:1,
            marginBottom:26,
            marginLeft:23

        }}>
        <StatusBar barStyle="light-content"/>

        {/*<PlaceOrderButton/>*/}

    </SafeAreaView>
}