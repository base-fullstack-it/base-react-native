import { Button } from "@rneui/themed";
import useNavigateToSignup from "../../../hooks/navigation/useNavigateToSignup";

export default () => {
//create a link here
    const navigate = useNavigateToSignup();
    return <Button type={"clear"} onPress={navigate}>
        No account? Click here to Signup
    </Button>
}