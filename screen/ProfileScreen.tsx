import {SafeAreaView, StatusBar, Text, View} from "react-native";
import Logout from "../feature/auth/component/Logout";
import FABMainMenuButtons from "../components/FABMainMenuButtons";
import {Button} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen = () =>{
    const navigation = useNavigation();
    return <SafeAreaView style={
        {
            alignItems:"flex-start",alignContent:"space-between",
            justifyContent:"space-between",
            flex:1,
            marginBottom:26,
            marginLeft:23

        }}>
        {/*<Button onPress={() => navigation.goBack()} title="Dismiss" />*/}
        <View style={{
        }}>
            <StatusBar barStyle="light-content"/>

            {/*<Text>Add Id Document</Text>*/}
            {/*<Text>Add Medical Recommendation</Text>*/}
            {/*<Text>Basic Information</Text>*/}
            {/*<Text>Delivery Address</Text>*/}
            {/*<Text>Signature</Text>*/}
        </View>
        <Logout />

    </SafeAreaView>
}
export default ProfileScreen;