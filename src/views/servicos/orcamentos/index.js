import { useTheme } from "@mui/styles";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Delete, Save } from "@material-ui/icons";

import { toast } from "react-toastify";
import { FieldArray, Formik } from "formik";

import MainCard from "ui-component/cards/MainCard";
import { SearchServico } from "views/componentes/search/SearchServico";
import { SearchOrcamentos } from "views/componentes/search/SearchOrcamentos";

const  FormOrcamentos = ()=>{
    const theme = useTheme();

    const initialValues={
        id:false,
        nome:'',
        servicos: [],
        produtos: [],
        mostrarValoresProdutos: true,
        mostrarValoresServicos:true,
        embutirValorServicos:false
    }
    const handleSearchOrcamento = (dados, setFieldValue)=>{
        for(const attr in dados){
            setFieldValue(attr, dados[attr])
        }
    }

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={(values, {resetForm, setFieldError })=>{
                //Regras de submit
            }}
            >
            {({ handleBlur, handleChange, handleSubmit,setFieldValue, values,errors,isValid }) => (
                 <form noValidate onSubmit={handleSubmit} >
                    <MainCard title={"Orçamentos"} scroll={true} secondary={values.nome}>
                        <Grid container spacing={1} >
                            <Grid item xs={6}>
                                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                    <InputLabel htmlFor={`outlined-adornment-orcamento-nome`}>Nome</InputLabel>
                                    <OutlinedInput
                                        id={`outlined-adornment-orcamento-nome`}
                                        value={values.nome}
                                        name={`nome`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                </FormControl>  
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                    <SearchOrcamentos
                                        setValue={(value)=>{
                                            handleSearchOrcamento(value, setFieldValue);
                                        }} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3">Produtos</Typography>
                                <FieldArray name="produtos">
                                    {({ push, remove }) => (
                                    <Grid container spacing={1}>
                                        {values.produtos.map((el, index) => (
                                                <Grid container spacing={1} key={index}>
                                                    <Grid item xs={2}>
                                                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                                            <InputLabel htmlFor={`outlined-adornment-orcamento-produto-qtd-${index}`}>Quantidade</InputLabel>
                                                            <OutlinedInput
                                                                id={`outlined-adornment-orcamento-produto-qtd-${index}`}
                                                                type="number"
                                                                value={el.quantidade}
                                                                name={`produtos[${index}].quantidade`}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                inputProps={{}}
                                                            />
                                                        </FormControl>     
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                                            <InputLabel htmlFor={`outlined-adornment-orcamento-produto-desc-${index}`}>Produto</InputLabel>
                                                            <OutlinedInput
                                                                id={`outlined-adornment-orcamento-produto-desc-${index}`}
                                                                value={el.descricao}
                                                                name={`produtos[${index}].descricao`}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                inputProps={{}}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                                            <InputLabel htmlFor={`outlined-adornment-orcamento-produto-margem-${index}`}>Margem</InputLabel>
                                                            <OutlinedInput
                                                                id={`outlined-adornment-orcamento-produto-margem-${index}`}
                                                                type="number"
                                                                name={`produtos[${index}].margem`}
                                                                value={el.margem}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                inputProps={{}}
                                                            />

                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                                            <InputLabel htmlFor={`outlined-adornment-orcamento-produto-preco-${index}`}>Preço</InputLabel>
                                                            <OutlinedInput
                                                                id={`outlined-adornment-orcamento-produto-preco-${index}`}
                                                                type="number"
                                                                name={`produtos[${index}].preco`}
                                                                value={el.preco}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                inputProps={{}}
                                                            />

                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Button onClick={() => remove(index)}><Delete /></Button>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        }
                                        <Grid item xs={12}>
                                            <Button variant="contained" onClick={() => push({ descricao: '', quantidade: '', margem: '70', preco: '' })}>Adicionar Produto</Button>
                                        </Grid>
                                    </Grid>
                                )}
                                </FieldArray>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3">Serviços</Typography>
                                <FieldArray name="servicos">
                                    {({ push, remove }) => (
                                    <Grid container spacing={1}>
                                        {values.servicos.map((el, index) => (
                                                <Grid container spacing={1} key={index}>
                                                    <Grid item xs={7}>
                                                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                                            <SearchServico 
                                                                value={el.servico||''}
                                                                fromCompras={true}
                                                                setValue={(value)=>{
                                                                    const hasServico = values.servicos.findIndex((p)=> value.id === p.servico?.id ) !== -1;
                                                                    if(!hasServico){
                                                                        setFieldValue(`servicos[${index}].servico`, value);
                                                                    }else{
                                                                        const newList = [...values.servicos];
                                                                        newList.splice(index,1);
                                                                        setFieldValue('servicos', newList);
                                                                    }

                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                                                            <InputLabel htmlFor={`outlined-adornment-servico-desconto-${index}`}>Desconto</InputLabel>
                                                            <OutlinedInput
                                                                value={el.desconto}
                                                                id={`outlined-adornment-servico-desconto-${index}`}
                                                                type="number"
                                                                name={`servicos[${index}].desconto`}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                inputProps={{}}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Button onClick={() => remove(index)}><Delete /></Button>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        }
                                        <Grid item xs={12}>
                                            <Button variant="contained" onClick={() => push({ servico: {}, desconto: ''  })}>Adicionar Serviço</Button>
                                        </Grid>
                                    </Grid>
                                )}
                                </FieldArray>
                            </Grid>
                            <Grid item xs={12}>
                                {errors.submit || !isValid && (
                                    <Box sx={{ mt: 3 }}>
                                        <FormHelperText error>{isValid}</FormHelperText>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Box>
                                )}
                                <Grid container spacing={2}>
                                    <Grid item xs={6} textAlign="center">
                                        <Button color="success" type="submit" variant="contained"><Save />Salvar orçamento</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MainCard>
                </form>
            )}
        </Formik>
    );
}

export  default FormOrcamentos;