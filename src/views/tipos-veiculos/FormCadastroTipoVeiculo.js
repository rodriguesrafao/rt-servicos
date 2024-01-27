import { useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { FormControl } from "@mui/base";
import { FormHelperText, Grid, InputLabel, OutlinedInput, Box, Button, Autocomplete, TextField } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";

import { Formik } from "formik";
import * as Yup from 'yup'

export const FormCadastroTipoVeiculo  = ({veiculo, onSuccess, onClose})=>{
    const theme = useTheme();
    const [listaAnos, setListaAnos] = useState([]);

    useEffect(() => {
        setListaAnos(lista);
        return () => {};
    }, []);

    //Este formuário foi alterado para não expor a regra do cliente.

    return(
        <Formik
            initialValues={{
                //Valores iniciais do fomuário
            }}
            validationSchema={Yup.object().shape({
                //Regras de validaçao do formulário
            })}
            onSubmit={(values, {resetForm, setSubmitting, setFieldError })=>{
                //Regras de subimit
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, setFieldValue, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Grid container spacing={0.5}>
                                <Grid item xs={6} sm={3}>
                                    <FormControl fullWidth error={Boolean(touched.campo && errors.campo)} sx={{ ...theme.typography.customInput }}>
                                        <InputLabel htmlFor="">Label do input</InputLabel>
                                        <OutlinedInput
                                                fullWidth
                                                id=""
                                                type="text"
                                                value={values.campo}
                                                name="campo"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                label="Label do input"
                                                inputProps={{}}
                                            />
                                        {touched.campo && errors.campo && (
                                            <FormHelperText error id="">
                                            {errors.campo}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                
                            </Grid>
                            {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                            )}
                            <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                    <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                                        Gravar
                                    </Button>
                                </AnimateButton>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}