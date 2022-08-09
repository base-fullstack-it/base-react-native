import {View} from "react-native";
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import useNavigateToProfile from "../../../hooks/navigation/useNavigateToProfile";

export default (props:DrawerContentComponentProps) => {
// export default () => {
    const navigate = useNavigateToProfile();

    return <View style={{flex:1}}>
        <DrawerContentScrollView
            {...props}
        >
            {/*<DrawerItemList {...props} />*/}
            <DrawerItem label={"Profile"} onPress={navigate} />

        </DrawerContentScrollView>
    </View>

}