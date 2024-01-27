import { useEffect, useState } from "react";

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { Formik } from "formik";
import * as Yup from 'yup';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const FormMovimentoCaixa  = ({produto, onSuccess, onClose})=>{
    return(
        <Formik
            initialValues={{
            }}
            validationSchema={Yup.object().shape({
            })}
            onSubmit={(values, {resetForm, setSubmitting })=>{
                
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, setFieldValue,touched, values, isValid }) => (
                <form noValidate onSubmit={handleSubmit} >
                    
                </form>
            )}
        </Formik>
    )
}