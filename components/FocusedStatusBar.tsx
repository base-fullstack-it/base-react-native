import {StatusBar} from "react-native";
import {useIsFocused} from "@react-navigation/native";
import {useTheme} from "@rneui/themed";

export default (props:any) => {
    const isFocused = useIsFocused();
    const theme = useTheme();

    return  isFocused ? <StatusBar {...props}/> : null;

}