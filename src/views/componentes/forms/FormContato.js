import { useEffect, useState } from "react";

import { useTheme } from '@mui/material/styles';
import { FormControl } from "@mui/base";
import { FormHelperText, Grid, InputLabel, OutlinedInput, Box, Button, Select, MenuItem } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";

import { Formik } from "formik";
import * as Yup from 'yup';

export const FormContato  = ({showNome = false, onSend})=>{
    const theme = useTheme()
    const [tiposContato, setTiposContato] = useState(null);
    const [tipoSelecionado, setTipoSelecionado] = useState(null);
    const [validacaoContato, setValidacaoContato] = useState();
    const [labelContato, setLabelContato] = useState('Contato');

    const obterContatos = async ()=>{
        //Lista de contatos do banco
        setTiposContato(lista);
    }

    useEffect(() => {
        obterContatos();
        return ()=>{};
    }, []);

    useEffect(() => {
        if(tipoSelecionado != null){
            if(tipoSelecionado.tipo?.startsWith('E-mail')){
                setValidacaoContato( Yup.string().email('Informe o e-mail corretamente').required('Informe o e-mail'));
                setLabelContato('E-mail');
            }else if(tipoSelecionado.tipo?.startsWith('Celular')){
                setValidacaoContato(Yup.string().length(11, 'Informe o Celular com DDD e 9 no começo').required('Informe o Celular com 11 dígitos'));
                setLabelContato('Celular');
            }else if(tipoSelecionado.tipo?.startsWith('Telefone')){
                setValidacaoContato(Yup.string().length(10, 'Informe o telefone com DDD').required('Informe o Telefone com 10 dígitos'));
                setLabelContato('Telefone');
            }
        }
    }, [tipoSelecionado]);

    return(
        <Formik
            initialValues={{
              nome:'',
              contato: '',
              tipo: null
            }}
            validationSchema={Yup.object().shape({
              nome: Yup.string().notRequired(),
              contato: validacaoContato,
              tipo: Yup.object().required('Selecione o tipo de contato')
            })}
            onSubmit={onSend}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            {showNome && 
                                <FormControl fullWidth error={Boolean(touched.nome && errors.nome)} sx={{ ...theme.typography.customInput }}>
                                    <InputLabel htmlFor="outlined-adornment-nome-contato">Nome <small>{`(opicional)`}</small></InputLabel>
                                    <OutlinedInput
                                            fullWidth
                                            id="outlined-adornment-nome-contato"
                                            type="text"
                                            value={values.nome}
                                            name="nome"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            label="Nome"
                                            inputProps={{}}
                                        />
                                    {touched.nome && errors.nome && (
                                        <FormHelperText error id="standard-weight-helper-text-nome-contato">
                                        {errors.nome}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            }
                            {tiposContato == null ? <>Carregando dados...</> :
                                <FormControl fullWidth error={Boolean(touched.tipo && errors.tipo)} sx={{ ...theme.typography.customInput }}>
                                    <InputLabel htmlFor="outlined-adornment-tipo-contato">Tipo</InputLabel>
                                    <Select 
                                        fullWidth
                                        id="outlined-adornment-tipo-contato"
                                        value={values.tipo}
                                        name="tipo"
                                        onBlur={handleBlur}
                                        onChange={(e)=>{
                                            setTipoSelecionado(e.target.value);
                                            handleChange(e);
                                        }}
                                        label="Tipo"
                                    >
                                        {tiposContato.map((tipo)=>(<MenuItem key={tipo.id} value={tipo}>{tipo.tipo}</MenuItem>))}
                                    </Select>
                                    {touched.tipo && errors.tipo && (
                                        <FormHelperText error id="standard-weight-helper-text-tipo-contato">
                                        {errors.tipo}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            }
                            {values.tipo != null && 
                            <>
                                <FormControl fullWidth error={Boolean(touched.contato && errors.contato)} sx={{ ...theme.typography.customInput }}>
                                    <InputLabel htmlFor="outlined-adornment-contato-contato">{labelContato}</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="outlined-adornment-contato-contato"
                                        type="text"
                                        value={values.contato}
                                        name="contato"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        label={labelContato}
                                        inputProps={{}}
                                    />
                                    {touched.contato && errors.contato && (
                                        <FormHelperText error id="standard-weight-helper-text-contato-contato">
                                        {errors.contato}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Box sx={{ mt: 2 }}>
                                    <AnimateButton>
                                        <Button disableElevation disabled={errors.contato || errors.tipo } fullWidth size="large" type="submit" variant="contained" color="secondary">
                                            Adicionar
                                        </Button>
                                    </AnimateButton>
                                </Box>
                            </>
                            }
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}