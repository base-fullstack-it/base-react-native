import {Image, View} from "react-native";

export default () => <View style={{ alignItems: 'center', paddingLeft: 14, paddingBottom: 10 }}>
    <Image
        source={require('../assets/grassp_health.png')}
        style={{
            height: 60,
            width: 230,
        }}
    />
</View>