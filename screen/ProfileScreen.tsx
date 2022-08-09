import {SafeAreaView, Text, View} from "react-native";
import Logout from "../feature/auth/component/Logout";
import FABMainMenuButtons from "../components/FABMainMenuButtons";
import {Button} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen = () =>{
    const navigation = useNavigation();
    return <SafeAreaView style={{
    alignItems:"center",flex:1}}>
        {/*<Button onPress={() => navigation.goBack()} title="Dismiss" />*/}
        <View style={{
            flexDirection: "row",
        }}>
            <Text>Profile Screen</Text>
            <Text>Profile Screen</Text>
            <Text>Profile Screen</Text>
        </View>
        <Logout />

    </SafeAreaView>
}
export default ProfileScreen;