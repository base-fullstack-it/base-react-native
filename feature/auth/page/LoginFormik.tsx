import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import {Button, TextInput, View} from "react-native";
import SubmitFormButton from "../../../components/formik/SubmitFormButton";
import TextFieldWrapper from "../../../components/formik/TextFieldWrapper";

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
        // }, 2000)
    }


    return (
        <Formik
            initialValues={initialFormState}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >
            {({ handleChange, handleBlur }) => (
                <View>
                    <TextFieldWrapper
                        onChangeText={handleChange('email')}
                        name={"email"}
                        placeholder={"Email"}
                        // onBlur={handleBlur('email')}
                        autoCapitalize='none'
                    />
                    <TextFieldWrapper
                        onChangeText={handleChange('password')}
                        name={"password"}
                        placeholder={"Password"}
                        // onBlur={handleBlur('password')}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    {/*<Button onPress={() => handleSubmit()} title="Submit" />*/}
                    <SubmitFormButton>Submit</SubmitFormButton>
                </View>
            )}
        </Formik>
    )

}