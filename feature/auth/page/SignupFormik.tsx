import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import {Button, TextInput, View} from "react-native";
import TextFieldWrapper from "../../../components/formik/TextFieldWrapper";
import SubmitFormButton from "../../../components/formik/SubmitFormButton";
import OverlayComponent from "../../../components/OverlayComponent";
import useToggle from "../../../hooks/useToggle";
import Toast from "react-native-toast-message";

export interface SignupFormValuesInterface{
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    password:string;
}
const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password:"",
    // termsOfService: false
}
interface SignupFormInterface{
    handleRegister(values:SignupFormValuesInterface): Promise<void>;
}

const validationSchema = object({
    firstName: string().required("First name required"),
    lastName: string().required('Last name required'),
    email: string().email("Invalid email").required("Email required"),
    password: string().required("Password required"),
    phoneNumber: number()
        .positive("The number must be positive")
        .integer("The number must be an integer")
        .typeError("Please enter a valid phone number")
        .required("Phone number required"),
    message: string(),
    // termsOfService: boolean()
    //     .oneOf([true], "The terms and conditions must be accepted.")
    //     .required("The terms and conditions must be accepted.")
})

export default ({handleRegister}:SignupFormInterface) => {

    const submitHandler = async (values:SignupFormValuesInterface, actions:any) => {
        actions.setSubmitting(false);
        await handleRegister(values);
        Toast.show({
            type: 'success',
            text1: 'Welcome To Grassp Health!',
            text2: 'Look at our menu to see products available near you.',
            onPress: () => Toast.hide()
            // visibilityTime:9000
            // autoHide:false
        });
    }

    return (
        <Formik
            initialValues={initialFormState}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >
            {({ handleChange }) => (
                <View>
                    <TextFieldWrapper
                        onChangeText={handleChange('email')}
                        name={"email"}
                        placeholder={"Email"}
                        autoCapitalize='none'
                    />
                    <TextFieldWrapper
                        onChangeText={handleChange('firstName')}
                        name={"firstName"}
                        placeholder={"First Name"}
                    />
                    <TextFieldWrapper
                        onChangeText={handleChange('lastName')}
                        name={"lastName"}
                        placeholder={"Last Name"}
                    />
                    <TextFieldWrapper
                        onChangeText={handleChange('password')}
                        name={"password"}
                        placeholder={"password"}
                        secureTextEntry={true}
                    />
                    <TextFieldWrapper
                        onChangeText={handleChange('phoneNumber')}
                        name={"phoneNumber"}
                        placeholder={"Phone Number"}
                    />
                    <SubmitFormButton>Submit</SubmitFormButton>
                </View>
            )}
        </Formik>
    )

}