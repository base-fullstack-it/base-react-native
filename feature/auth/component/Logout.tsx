import {Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import useLogout from "../../../hooks/useLogout";

const Logout = () => {

    const handleLogout = useLogout();

    return (
    <TouchableOpacity
        onPress={handleLogout}
    >
    <View style={{
        flexDirection: "row",
    }}>
        <Ionicons size={35}name={"log-out-outline"}/>
        <Text style={{fontSize:25,marginTop:2,marginLeft:3}}>Logout</Text>

    </View>
    </TouchableOpacity>
    )
}
export default Logout;