const { Checkbox, FormControlLabel } = require("@mui/material")

const RenderCheckList = ({ handleChange, inputName, value, label, checked=false}, key)=>{
    return(
        <FormControlLabel
            key={`check-list-${inputName}-${key}`}
            name={inputName}
            value={value}
            control={<Checkbox onChange={handleChange} checked={checked} />}
            label={label ? label : value}
            labelPlacement="end"
            />
    )
}
export default RenderCheckList;