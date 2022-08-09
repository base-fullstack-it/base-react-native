import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screen/LoginScreen";
import DrawerNavigator from "../DrawerNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "../../screen/MainScreen";
import RightDrawerScreen from "../../feature/drawer/right/RightDrawerScreen";
import ProfileScreen from "../../screen/ProfileScreen";
import {useTheme} from "@rneui/themed";

export type AuthorizedParamList = {
  Main: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<AuthorizedParamList>();

export default () => {
    const theme = useTheme();

  return (
    <Stack.Navigator
        initialRouteName='Main'
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
        <Stack.Group screenOptions={{presentation:"modal"}}>
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerTitle:"Account Settings",
                    headerTintColor:"white",
                    headerStyle:{
                        backgroundColor:theme.theme.colors.primary
                    }
                }}
            />
        </Stack.Group>


    </Stack.Navigator>
  );
};

