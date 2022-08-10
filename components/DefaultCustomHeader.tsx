import {View,Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import ToggleSearchHeaderButton from "./ToggleSearchHeaderButton";

export default ({invokeToggle}:{invokeToggle:() => void}) => {

    const inset = useSafeAreaInsets();

    return <View style={{
        marginTop:inset.top,
        justifyContent:"space-between",
        flexDirection:"row",
        height:40
    }}>
            <ToggleSearchHeaderButton
                invokeToggle={invokeToggle}
            />
            <View>
                <Text>Grassp</Text>
            </View>
    </View>
}