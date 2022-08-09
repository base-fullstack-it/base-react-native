import {Button} from "@rneui/themed";
import {globalStyles} from "../../styles/globalStyles";
import useNavigateToCheckout from "../../hooks/navigation/useNavigateToCheckout";

export default () => {
    const navigate = useNavigateToCheckout();
    return <Button
        title="Check Out"
        titleStyle={{ fontWeight: '700' }}
        raised={false}
        buttonStyle={globalStyles.CircleButton}
        containerStyle={{
            width: 200,
        }}
        onPress={navigate}
    />
}