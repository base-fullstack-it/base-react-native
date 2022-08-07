import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screen/LoginScreen";

export type NotAuthorizedParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<NotAuthorizedParamList>();
console.log("your nsot authorized.")
 export default () => {

  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
      gestureEnabled: false,
    }}
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
            component={LoginScreen}
            options={{
                headerShown: true,
            }}
        />


    </Stack.Navigator>
  );
};

