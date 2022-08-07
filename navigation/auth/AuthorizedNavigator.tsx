import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../../screen/LoginScreen";
import DrawerNavigator from "../DrawerNavigator";

export type RootStackParamsList = {
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

export default () => {
    console.log("your authorized!")

  return (
    <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{
      gestureEnabled: false,
    }}
    >
        {/*TODO: if refactor stacks groups into own component becomes possible then refactor only return jsx not stack*/}
        {/*https://stackoverflow.com/questions/71659381/reusing-stack-with-group-when-nesting-navigation */}
        {/*{!auth ?*/}

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

