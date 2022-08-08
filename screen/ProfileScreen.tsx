import {Text, View} from "react-native";
import Logout from "../feature/auth/component/Logout";
import {FAB} from "@rneui/themed";

const ProfileScreen = () =>{
    return <View style={{
    alignItems:"center",flex:1}}>
        <View style={{
            flexDirection: "row",


        }}>
            <Text>Profile Screen</Text>
            <Text>Profile Screen</Text>
            <Text>Profile Screen</Text>
        </View>
        <Logout />
        <FAB
            placement={"right"}
        />
    </View>
}
export default ProfileScreen;