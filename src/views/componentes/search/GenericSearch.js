import { Autocomplete, TextField } from "@mui/material"
import { useState, useEffect } from "react";

export const GenericSearch = ({setValue, findFunction, mapOptions, renderFunctiom, label})=>{
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [termo, setTermo] = useState('');

    useEffect(() => {
        if(open && termo.length > 1 ) {
            setLoading(true);
            findFunction(termo)
            .then(result => {
                const map = mapOptions(result);
                setOptions(map);
            })
            .finally(()=>{
                setLoading(false);
            })
        }
        return () => {}
    }, [open, termo]);

    return(<Autocomplete
                open={open}
                onOpen={()=>{setOpen(true)}}
                onClose={()=>{setOpen(false)}}
                options={options}
                onInputChange={(e)=>{
                    if(typeof e.target.value == 'string'){
                        setTermo(e.target.value);
                    }
                    if(typeof e.target.value == 'undefined'){
                        setTermo('');
                    }
                }}
                onChange={ (e, value) =>{
                    if(value && typeof setValue == 'function'){
                        setValue(value);
                    }
                }}
                loading={loading}
                isOptionEqualToValue={(option, value)=> option.id == value.id}
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                  )}
                renderOption={renderFunctiom}
             />)
}