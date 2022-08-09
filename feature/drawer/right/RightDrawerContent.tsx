import {View,Text} from "react-native";
import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Button} from "@rneui/themed";
import {globalStyles} from "../../../styles/globalStyles";

export default (props: DrawerContentComponentProps) => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>View Order</Text>
        <Button
            title="Check Out"
            titleStyle={{ fontWeight: '700' }}
            raised={false}
            buttonStyle={globalStyles.CircleButton}
            containerStyle={{
                width: 200,
            }}
            // onPress={props.navigation.navigate("CheckOutScreen")}
        />
    </View>
}