import React from "react";
import { useField } from "formik";
import {Input} from "@rneui/themed";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  console.log(field,'WHAT IS FIELD')
  const configTextField = {
    // onChangeText:field.onChange,

    // "named" props above apply to all
    // Textfields present.
    // "otherProps" below can be custom tailored
    // to particular Text/Date etc. Fields
    // such as label, type, id, etc.
    ...otherProps
  };

  // meta object containes
  // submitForm, isSubmitting, touched, errors
  if (meta && meta.touched && meta.error) {
    configTextField.errorMessage = meta.error;
  }

  return <Input
      {...configTextField}
      // errorStyle={{ color: 'red' }}
  />
};

export default TextFieldWrapper;
