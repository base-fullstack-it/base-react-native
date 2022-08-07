import {Text, View} from "react-native";
import Logout from "../feature/auth/component/Logout";

const ProfileScreen = () =>{
    return <View style={{
    alignItems:"center"}}>
        <View style={{
            flexDirection: "row",


        }}>
            <Text>Profile Screen</Text>
            <Text>Profile Screen</Text>
            <Text>Profile Screen</Text>
        </View>
        <Logout />
    </View>
}
export default ProfileScreen;