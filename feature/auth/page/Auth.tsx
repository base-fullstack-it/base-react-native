import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { Container } from '@mui/material';

import { toast } from "react-toastify";
import {useGetAppAccessTokenQuery, useLoginUserMutation, useRegisterUserMutation} from "../../../services/authApiSlice";
import {ACCESS_TOKEN_TYPES, setUser} from "../slice/authSlice";
import {useAppDispatch} from "../../../app/hooks";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber:"",
  password: "",
  confirmPassword: "",
};

const Auth = () => {

  const {data} = useGetAppAccessTokenQuery();
  useEffect(()=>{
    // if(data?.access_token)console.log(data, 'data from get AppAccessToken from auth')
    if(data?.access_token) dispatch(setUser({
      name:"mike",
      token:data.access_token,
      token_type: ACCESS_TOKEN_TYPES.app}
    ))
  },[data])

  const [formValue, setFormValue] = useState(initialState);

  const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formValue;
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterUserMutation();

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (email && password) {
      await loginUser({ email, password });
    } else {
      toast.error("Please fill all Input field");
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      return toast.error("Password don't match");
    }

    if (firstName && lastName && password && email) {
      await registerUser({ firstName, lastName,phoneNumber, email, password });
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      console.log(loginData,'LOGINTO')
      toast.success("User Login Successfully");
      dispatch(
        // setUser({ name: loginData.result.name, token: loginData.token })
        setUser({ name: "mike", token: loginData.access_token, token_type: ACCESS_TOKEN_TYPES.user })
      );
      navigate("/dashboard");
    }

    if (isRegisterSuccess) {
      toast.success("User Register Successfully");
      dispatch(
        setUser({ name: "mike", token: registerData.token,token_type: ACCESS_TOKEN_TYPES.user })
      );
      navigate("/dashboard");
    }
  }, [isLoginSuccess, isRegisterSuccess]);

  useEffect(() => {
    if (isLoginError) {
      toast.error((loginError as any).data.message);
    }

    if (isRegisterError) {
      toast.error((registerError as any).data.message);
    }
  }, [isLoginError, isRegisterError]);
  return (
      <Container maxWidth={false}>
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    {!showRegister ? "Login" : "Register"}
                  </h2>
                  <p className="text-white-50 mb-4">
                    {!showRegister
                      ? "Please enter your Email & Password"
                      : "Please enter User detail"}
                  </p>
                  {showRegister && (
                    <>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="text"
                          name="firstName"
                          value={firstName}
                          onChange={handleChange}
                          label="First Name"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                          label="Last Name"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                            type="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange}
                            label="Phone Number"
                            className="form-control form-control-lg"
                        />
                      </div>
                    </>
                  )}
                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      label="Email"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      label="Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  {showRegister && (
                    <div className="form-outline form-white mb-4">
                      <MDBInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        className="form-control form-control-lg"
                      />
                    </div>
                  )}
                  {!showRegister ? (
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                      onClick={() => handleLogin()}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                      onClick={() => handleRegister()}
                    >
                      Register
                    </button>
                  )}
                </div>
                <div>
                  <h5 className="mb-0">
                    {!showRegister ? (
                      <>
                        Don't have an account ?
                        <p
                          className="text-white-50 fw-bold"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowRegister(true)}
                        >
                          Sign Up
                        </p>
                      </>
                    ) : (
                      <>
                        Already have an account ?
                        <p
                          className="text-white-50 fw-bold"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowRegister(false)}
                        >
                          Sign In
                        </p>
                      </>
                    )}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
  );
};

export default Auth;
