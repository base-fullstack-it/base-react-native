import {View, Text, SafeAreaView} from "react-native";
import FABMainMenuButtons from "../components/FABMainMenuButtons";

export default () => {
    return <SafeAreaView style={{flex:1}}>
        <Text>WelcomeTo Product screen</Text>
        <FABMainMenuButtons/>
    </SafeAreaView>
}