import { useState, useEffect } from 'react';
import {Keyboard, Text, View} from 'react-native';
import {connect, shallowEqual, useDispatch, useSelector} from 'react-redux';
import LoginFormik, {LoginFormValuesInterface} from "../feature/auth/page/LoginFormik";
import {useLoginUserMutation} from "../services/authApiSlice";
import {useAppDispatch} from "../app/hooks";
import {ACCESS_TOKEN_TYPES, setUser} from "../feature/auth/slice/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { attemptLogin } from '../actions/oauthActions';
// import { getLoggedInUser } from '../selectors/userSelectors';
// import LoginForm from '../components/auth/LoginForm';
// import {State} from "../store/reduxStoreState";

// type Props = {
//   loggedInUser;
//   attemptLogin;
//   isLoading;
// };

// const LoginScreen = ({ loggedInUser, attemptLogin, isLoading }: Props) => {
const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();


  const handleLogin = async (values:LoginFormValuesInterface) => {

    // console.log(values,'successer')
    const data = await loginUser({...values}).unwrap();
    console.log(data,'did this work')
    const access_token = data.access_token;
    const token_type = ACCESS_TOKEN_TYPES.user;
    dispatch(setUser(
        {
          token:access_token,
          token_type: token_type
        }
    ))
    await AsyncStorage.setItem("token",access_token)
    await AsyncStorage.setItem("token_type",token_type)
    await console.log(await AsyncStorage.getItem("token"),'tokenfrom async storage')
    console.log(data,'did')
    // navigate('/dashboard');
  };


  return (
      <LoginFormik
          loginUser={handleLogin}
      />
  );
};
export default LoginScreen;
