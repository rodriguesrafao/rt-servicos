import { useState } from "react";

import { useTheme } from "@mui/styles";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Cancel, Delete, Print, Save } from "@material-ui/icons";

import { FieldArray, Formik } from "formik";
import * as Yup from 'yup';

import MainCard from "ui-component/cards/MainCard";


const FormOrdemServico = ({servico,onSuccess, onClose=false})=>{
    const theme = useTheme();
    const [listaVeiculos, setListaVeiculos] = useState(false);

    
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
                //Regra de validação de formuário
            })}
            onSubmit={(values, {resetForm, setFieldError, setFieldValue })=>{
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, setFieldValue, touched, values, isValid }) => (
                <form noValidate onSubmit={handleSubmit} >
                    //Formulário de OS
                </form>
            )}
        </Formik>
    )
}

export default FormOrdemServico;