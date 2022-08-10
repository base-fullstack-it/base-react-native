import {createDrawerNavigator} from "@react-navigation/drawer";
import LeftDrawerContent from "./LeftDrawerContent";
import {SearchBar, useTheme} from "@rneui/themed";
import ViewSearchBarHeader from "../../../components/ViewSearchBarHeader";
import BottomFABTabNavigator from "../../../navigation/bottom_tab/BottomFABTabNavigator";

const LeftDrawer = createDrawerNavigator();
//https://www.youtube.com/watch?v=aTO49WIxOfw&t=661s
export default () => {
    const theme = useTheme();
    return (
        <LeftDrawer.Navigator
            id="LeftDrawer"
            screenOptions={{
                drawerPosition: 'left',
                // headerShown: false,
                header: (props) => <ViewSearchBarHeader />,
            }}
            //TODO appears to be a bug where drawerContent needs a prop
            drawerContent={(props) => <LeftDrawerContent {...props} />}
        >
            <LeftDrawer.Screen options={{
                // header: (props) => <ViewSearchBarHeader />,
                // headerLeft: () => <View></View>,
                // headerTitle:() => <SearchBar/>
                // headerStyle:{
                //     backgroundColor: theme.theme.colors.primary
                // }
                // headerTitle:"grasspHealth"
            }} name="Home" component={BottomFABTabNavigator} />
        </LeftDrawer.Navigator>
    );
}
