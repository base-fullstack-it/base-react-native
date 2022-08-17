import {Badge, FAB, Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {View} from "react-native";
import {useSelector} from "react-redux";

export default () => {
    const navigation = useNavigation<any>();
    const {totalCount } = useSelector<any, any>((state) => state.cart);
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
                value={totalCount}
            />

        </FAB>
    </>
}