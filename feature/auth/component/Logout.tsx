import useLogout from "../../../hooks/useLogout";
import {Button} from "@rneui/themed";
import {globalStyles} from "../../../styles/globalStyles";

const Logout = () => {

    const handleLogout = useLogout();

    return (
        <Button
            title={"LOG OUT"}
            titleStyle={{color:"black", fontWeight:"600",fontSize:16}}
            size={"sm"}
            type="outline"
            color={"black"}
            buttonStyle={[globalStyles.CircleButton,{borderColor:"black"}]}
            onPress={handleLogout}
        />
    )

}
export default Logout;