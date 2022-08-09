import {FAB, Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";

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
            icon={<Icon
                color={"white"}
                type={"antdesign"}
                name='shoppingcart' />
            }
        />
    </>
}