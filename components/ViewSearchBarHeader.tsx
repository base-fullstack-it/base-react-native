import {View,Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {SearchBar} from "@rneui/themed";
import useToggle from "../hooks/useToggle";

export default () => {
    const {
        invokeToggle,
        toggleState
} = useToggle();
    const inset = useSafeAreaInsets();

    let renderView = <View style={{marginTop:inset.top}}>
        {/*need to toggle this search bar based on cicking a search glass*/}
        {/*then */}
        {
            // <View>
            //     <Text>Grassp</Text>
            // </View>
            <SearchBar lightTheme/>
        }
    </View>
    // return renderView;
    return <View style={{marginTop:inset.top}}>
        {/*need to toggle this search bar based on cicking a search glass*/}
        {/*then */}
        {
            // <View>
            //     <Text>Grassp</Text>
            // </View>
            <SearchBar lightTheme/>
        }
    </View>
}