import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screen/LoginScreen";
import DrawerNavigator from "../DrawerNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default () => {
    console.log("your authorized!")

  return (
    <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{
      gestureEnabled: false,
    }}
    >
        <Stack.Screen
            name='Main'
            component={DrawerNavigator}
            options={{
                headerShown:false,
                // headerTitle: (props) => <LogoTitle />,
            }}
        />


    </Stack.Navigator>
  );
};

