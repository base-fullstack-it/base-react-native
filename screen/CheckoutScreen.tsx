import {SafeAreaView,Text} from "react-native";
import PlaceOrderButton from "../components/checkout/PlaceOrderButton";

export default () => {

    return <SafeAreaView style={{
        flex:1,
        alignItems:"center"
    }}>
        <Text>CheckOut screen</Text>
        <Text>Your Order</Text>
        <PlaceOrderButton/>

    </SafeAreaView>
}