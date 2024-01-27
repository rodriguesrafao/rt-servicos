import { useEffect, useRef, useState } from "react";
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";


export const genericEndereco = {
    cep: '',
    cidade: '',
    bairro: '',
    endereco: '',
    numero: '',
    complemento: '',
    uf: '',
    tipo: null
}

export const FormEndereco = ({errors, handleBlur, handleChange, touched, values, setFieldValue})=>{

    return(
        <>
        <Grid container spacing={1}>
            //Form endereco
        </Grid>
        </>
    )
}