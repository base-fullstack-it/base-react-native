import {Badge, FAB, Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {View} from "react-native";

export default () => {
    const navigation = useNavigation<any>();
    return <>
        <FAB
            placement={"left"}
            onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
            icon={<Icon
                color={"white"}
                type={"antdesign"}
                name='user' />
            }
        />
        <FAB
            placement={"right"}
            onPress={() => navigation.getParent('RightDrawer').openDrawer()}
        >
            <Icon
            color={"white"}
            type={"antdesign"}
            name='shoppingcart' />
            <Badge
                containerStyle={{position:'absolute',left:28,bottom:31}}
                status={"error"}
                value={"15"}
            />

        </FAB>
    </>
}