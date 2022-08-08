import SignupFormik from "../feature/auth/page/SignupFormik";
import useRegister from "../hooks/useRegister";

export default () => {

    const handleRegister = useRegister();

    return <SignupFormik
        handleRegister={handleRegister}
    />
};
