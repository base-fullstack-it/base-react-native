import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screen/LoginScreen";
import DrawerNavigator from "../DrawerNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "../../screen/MainScreen";
import RightDrawerScreen from "../../feature/drawer/right/RightDrawerScreen";

export type RootStackParamsList = {
  Main: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default () => {

  return (
    <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{
            gestureEnabled: false,
        }}
    >
        {/*TODO: this was youtr bottom tab bar and profile thing*/}
        {/*<Stack.Screen*/}
        {/*    name='Main'*/}
        {/*    component={DrawerNavigator}*/}
        {/*    options={{*/}
        {/*        headerShown:false,*/}
        {/*        // headerTitle: (props) => <LogoTitle />,*/}
        {/*    }}*/}
        {/*/>*/}
        <Stack.Screen
            name='Main'
            component={RightDrawerScreen}
            options={{
                headerShown:false
                // headerTitle: (props) => <LogoTitle />,
            }}
        />


    </Stack.Navigator>
  );
};

