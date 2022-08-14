import SignupFormik from "../feature/auth/page/SignupFormik";
import useRegister from "../hooks/useRegister";
import {Card} from "@rneui/themed";
import GrasspFormLogo from "../components/GrasspFormLogo";

export default () => {

    const handleRegister = useRegister();

    return <Card>
        {/*<GrasspFormLogo/>*/}
        <SignupFormik
        handleRegister={handleRegister}
    />
    </Card>
};
