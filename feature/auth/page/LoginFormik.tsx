import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import {Button, TextInput, View} from "react-native";
import SubmitFormButton from "../../../components/formik/SubmitFormButton";
import TextFieldWrapper from "../../../components/formik/TextFieldWrapper";
import Toast from 'react-native-toast-message';
import {useTheme} from "@rneui/themed";

export interface LoginFormValuesInterface {
    email:string;
    password:string;
}
const initialFormState = {
    email: "",
    password:"",
}
interface LoginFormInterface{
    loginUser(values:LoginFormValuesInterface): Promise<void>;
}

const validationSchema = object({
    email: string().email("Invalid email").required("Email required"),
    password: string().required("Password required"),
})
export default ({loginUser}:LoginFormInterface) => {
    const theme = useTheme();

    const [open, setOpen] = useState(false)

    // actions = { setSubmitting, resetForm, isSubmitting }
    const submitHandler = async (values:LoginFormValuesInterface, actions:any) => {
        // setTimeout(() => {
            // setSubmitting not needed with async
            // actions.setSubmitting(false);
            // actions.resetForm(initialFormState);//TODO uncomment this it works well some sort of inbuilt function
            setOpen(true);
            console.log(values,'SUBMISS'); // test
        await loginUser(values);
        Toast.show({
            type: 'primaryColorToast',
            text1: 'Welcome back!',
            onPress: () => Toast.hide(),
            visibilityTime:1400
            // autoHide:false
        });
        // }, 2000)
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
                        onChangeText={handleChange('password')}
                        name={"password"}
                        placeholder={"Password"}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    {/*<Button onPress={() => handleSubmit()} title="Submit" />*/}
                    <SubmitFormButton raised>Submit</SubmitFormButton>
                </View>
            )}
        </Formik>
    )

}