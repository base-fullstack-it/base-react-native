import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import {Button, TextInput, View} from "react-native";

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
            actions.setSubmitting(false);
            // actions.resetForm(initialFormState);//TODO uncomment this it works well some sort of inbuilt function
            setOpen(true);
            console.log(values,'SUBMISS'); // test
        await loginUser(values);
        // }, 2000)
    }
    const handleClose = (event:any, reason:any) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    return (
        <Formik
            initialValues={{ email: '',password:'' }}
            onSubmit={submitHandler}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        autoCapitalize='none'
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        textContentType={"password"}
                        autoCapitalize='none'
                        value={values.password}
                    />
                    <Button onPress={() => handleSubmit()} title="Submit" />
                </View>
            )}
        </Formik>
    )

}