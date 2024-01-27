import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';

import { Formik } from "formik";
import * as Yup from 'yup';

import CadastroTipoVeiculosModal from "views/tipos-veiculos/CadastroTipoVeiculosModal";

export const FormVeiculoCliente  = ({onSend})=>{

    return(
        <>
            <Formik
                initialValues={{
                    //Initial values
                }}
                validationSchema={Yup.object().shape({
                    //Validadtion schema
                })}
                onSubmit={onSend}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, setFieldValue,touched, values, }) => (
                    <form noValidate onSubmit={handleSubmit} >
                        <Grid container spacing={1}>
                            
                        </Grid>
                    </form>
                )}
            </Formik>
            <CadastroTipoVeiculosModal
                open={{}}
                onClose={()=>{

                }}
                onSuccess={()=>{
                    
                }}
            />
        </>
    )
}