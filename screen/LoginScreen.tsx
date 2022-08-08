import LoginFormik, {LoginFormValuesInterface} from "../feature/auth/page/LoginFormik";
import useLogin from "../hooks/useLogin";
import NavigateToSignupComponent from "../feature/auth/component/NavigateToSignupComponent";
import { Text, Card, Button, Icon } from '@rneui/themed';
const LoginScreen = () => {

  const handleLogin = useLogin();
  return <Card>
    {/*<Card.Title></Card.Title>*/}
    <LoginFormik
        loginUser={handleLogin}
    />
    <Card.Divider style={{marginVertical:25}}color={"black"} />
    <NavigateToSignupComponent />
  </Card>
};
export default LoginScreen;
