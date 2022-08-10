import {View} from "react-native";
import {Button, Icon, useTheme} from "@rneui/themed";

export default ({invokeToggle}:{invokeToggle:() => void}) => {
    const theme = useTheme();
    return <Button
        type={"outline"}
        buttonStyle={{borderWidth:0}}
            icon={<Icon
                color={theme.theme.colors.primary}
                type={"antdesign"}
                name='close' />
            }
            onPress={()=> invokeToggle()}
        />
}