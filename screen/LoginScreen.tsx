import LoginFormik, {LoginFormValuesInterface} from "../feature/auth/page/LoginFormik";
import useLogin from "../hooks/useLogin";
import NavigateToSignupComponent from "../feature/auth/component/NavigateToSignupComponent";
import { Text, Card, Button, Icon } from '@rneui/themed';
import {View, Image, StatusBar} from "react-native";
import GrasspFormLogo from "../components/GrasspFormLogo";
import SplashView from "../components/SplashView";
const LoginScreen = () => {

  const {handleLogin,isLoading,isLoginSuccess} = useLogin();
  return (
      // !isLoading && !isLoginSuccess ?
      <Card>
    {/*<Card.Title></Card.Title>*/}
      <StatusBar barStyle="light-content"/>
      <GrasspFormLogo/>
    <LoginFormik
        isLoading={isLoading}
        loginUser={handleLogin}
    />
    <Card.Divider />
    <NavigateToSignupComponent />
  </Card>
          // :<SplashView/>
  )
};
export default LoginScreen;
