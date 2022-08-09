import {createDrawerNavigator} from "@react-navigation/drawer";
import ViewOrderScreen from "../screen/ViewOrderScreen";

export type ViewOrderParamList = {

};
const ViewOrder = createDrawerNavigator();
export default () => {

    return <ViewOrder.Navigator
        id={"ViewOrderDrawer"}
        drawerContent={ViewOrderScreen}
        screenOptions={{
            drawerPosition: 'right',
            headerShown: false,
        }}
    >
    </ViewOrder.Navigator>

}