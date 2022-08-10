import {createDrawerNavigator} from "@react-navigation/drawer";
import MainScreen from "../../../screen/MainScreen";
import LeftDrawerContent from "./LeftDrawerContent";
import MenuTabNavigation from "../../../navigation/MenuTabNavigation";
import {View} from "react-native";
import {useTheme} from "@rneui/themed";

const LeftDrawer = createDrawerNavigator();
//https://www.youtube.com/watch?v=aTO49WIxOfw&t=661s
export default () => {
    const theme = useTheme();
    return (
        <LeftDrawer.Navigator
            id="LeftDrawer"
            screenOptions={{
                drawerPosition: 'left',
                headerShown: false,
                headerStyle:{marginTop:30}
            }}
            //TODO appears to be a bug where drawerContent needs a prop
            drawerContent={(props) => <LeftDrawerContent {...props} />}
        >
            <LeftDrawer.Screen options={{
                headerLeft: () => <View></View>,
                // headerStyle:{
                //     backgroundColor: theme.theme.colors.primary
                // }
                // headerTitle:"grasspHealth"
            }} name="Home" component={MenuTabNavigation} />
        </LeftDrawer.Navigator>
    );
}
