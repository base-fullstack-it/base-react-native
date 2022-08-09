import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screen/LoginScreen";
import SignupScreen from "../../screen/SignupScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import useGetAppAccessToken from "../../hooks/useGetAppAccessToken";

export type NotAuthorizedParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<NotAuthorizedParamList>();

export default () => {
     useGetAppAccessToken();
  return (
    <Stack.Navigator
        initialRouteName='Login'
        // screenOptions={{
        // }}
    >
        <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
                headerShown: true,
            }}
        />
        <Stack.Screen
            name='Signup'
            component={SignupScreen}
            options={{
                headerShown: true,
            }}
        />


    </Stack.Navigator>
  );
};

