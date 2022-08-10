import {Button, Icon, SearchBar} from "@rneui/themed";
import {useState} from "react";
import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import ToggleSearchHeaderButton from "./ToggleSearchHeaderButton";

export default  ({invokeToggle}:{invokeToggle:() => void}) =>{
    const [search, setSearch] = useState<string>();
    const inset = useSafeAreaInsets();

    return <View style={{
        marginTop:inset.top,
        // flex:1
        flexDirection:"row",
        height:40
    }}>
        <View style={{flex:1}}>
            <ToggleSearchHeaderButton
                invokeToggle={invokeToggle}
            />
        </View>
        <View style={{flex:7}}>
        <SearchBar containerStyle={{height:40}} inputContainerStyle={{height:40}} inputStyle={{height:40}} value={search} onChangeText={s => setSearch(s)} lightTheme/>
        </View>

    </View>
}