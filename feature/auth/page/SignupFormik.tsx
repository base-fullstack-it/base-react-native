import {Container, Grid, LinearProgress, Typography} from "@mui/material";
import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import TextFieldWrapper from "../../../components/formik/TextField";
import CheckboxWrapper from "../../../components/formik/Checkbox";
import ButtonWrapper from "../../../components/formik/Button";
import SnackbarWrapper from "../../../components/formik/Snackbar";

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
    termsOfService: false
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
    termsOfService: boolean()
        .oneOf([true], "The terms and conditions must be accepted.")
        .required("The terms and conditions must be accepted.")
})
export default ({handleRegister}:SignupFormInterface) => {

    const [open, setOpen] = useState(false)

    // actions = { setSubmitting, resetForm, isSubmitting }
    const submitHandler = async (values:SignupFormValuesInterface, actions:any) => {
        // setTimeout(() => {
            // setSubmitting not needed with async
            actions.setSubmitting(false);
            // actions.resetForm(initialFormState);//TODO uncomment this it works well some sort of inbuilt function
            setOpen(true);
            console.log(values,'SUBMISS'); // test
        await handleRegister(values);
        // }, 2000)
    }
    const handleClose = (event:any, reason:any) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    return (
        // <div className={classes.root}>
            <Grid container
                  style={{marginTop:"5em"}}
                  display={"flex"}
                  // width={"100%"}
                  justifyContent="center"
                  spacing={2}

                  // rowSpacing={10}
                  // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Formik
                    initialValues={initialFormState}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                >
                    {
                        ({ isSubmitting }) => (
                            <Form>
                                    <Grid p={1} item >
                                        <Typography align={"center"} style={{ fontFamily: "Fleur De Leah, cursive", fontSize: "2rem" }}
                                        >
                                            Signup
                                        </Typography>
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='firstName'
                                            label='First Name'
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid p={1} item >
                                        <TextFieldWrapper
                                            name='lastName'
                                            label='Last Name'
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='email'
                                            label="Email"
                                            type='email'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='password'
                                            label="Password"
                                            type='password'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='phoneNumber'
                                            label="Phone"
                                            type='number'
                                        />
                                    </Grid>

                                    {
                                        isSubmitting && (
                                            <Grid item>
                                                <LinearProgress />
                                            </Grid>
                                        )
                                    }

                                    <Grid item >
                                        <CheckboxWrapper
                                            name='termsOfService'
                                            legend='Terms of Service'
                                            label='I Agree'
                                        />
                                    </Grid>
                                    <Grid item >
                                        <ButtonWrapper>submit form</ButtonWrapper>
                                    </Grid>
                                    <Grid item>
                                        <SnackbarWrapper open={open} onClose={handleClose} />
                                    </Grid>
                            </Form>
                        )
                    }
                </Formik>
            </Grid>
    )

}