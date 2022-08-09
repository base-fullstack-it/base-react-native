import {View,Text} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";

export default (props: DrawerContentComponentProps) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the right drawer</Text>
    </View>
}