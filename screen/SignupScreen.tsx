import SignupFormik from "../feature/auth/page/SignupFormik";
import useRegister from "../hooks/useRegister";
import {Card} from "@rneui/themed";

export default () => {

    const handleRegister = useRegister();

    return <Card>
        <SignupFormik
        handleRegister={handleRegister}
    />
    </Card>
};
