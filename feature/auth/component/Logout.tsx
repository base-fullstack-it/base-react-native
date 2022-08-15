import useLogout from "../../../hooks/useLogout";
import {Button} from "@rneui/themed";
import {globalStyles} from "../../../styles/globalStyles";
import {View} from "react-native";
import SplashView from "../../../components/SplashView";

export default () => {

    const {handleLogout} = useLogout();

    return (
        <View>
            <Button
                title={"Log Out"}
                titleStyle={{color:"black", fontWeight:"700",fontSize:15,marginHorizontal:10,marginVertical:3}}
                size={"sm"}
                type="outline"
                color={"black"}
                buttonStyle={[globalStyles.CircleButton,{
                    borderColor:"black"}]}
                onPress={handleLogout}
            />
        </View>
    )

}
