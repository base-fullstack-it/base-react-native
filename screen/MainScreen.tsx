import {Button, SafeAreaView, Text, View} from "react-native";
import {FAB, Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import useNavigateViewOrderDrawer from "../hooks/navigation/useNavigateViewOrderDrawer";
import FABMainMenuButtons from "../components/FABMainMenuButtons";

export default () =>{
    return <SafeAreaView style={{ flex: 1}}>
        <FABMainMenuButtons/>
    </SafeAreaView>
    // return <View style={{flex:1}}>
    //     <Text>Main Screen</Text>

    //     {/*/>*/}
    // </View>
}