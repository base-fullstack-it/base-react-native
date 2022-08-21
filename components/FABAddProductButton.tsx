import {FAB, Icon} from "@rneui/themed";
import {Text} from 'react-native';

export default () => {
    return <FAB
        placement={"right"}
        // title={"Add"}
        // titleStyle={{fontSize:10}}
        // onPress={() => navigation.getParent('RightDrawer').openDrawer()}

    >
        <Text style={{color:"white",fontWeight:"800",fontSize:18}}>Add</Text>
        {/*<Icon*/}
        {/*    color={"white"}*/}
        {/*    type={"antdesign"}*/}
        {/*    name='shoppingcart' />*/}
    </FAB>
}