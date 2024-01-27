import React from 'react';
import TextField from '@mui/material/TextField';
import { stringToDatePatern } from 'utils/date-utils';

const DateInput = ({ value, onChange, ...others }) => {
  // Função para formatar a data no formato "dd/MM/yyyy"
  const formatDate = () => {
    return stringToDatePatern(value,'##/##/####');
  };

  // Função para tratar a mudança no valor do input
  const handleChange = (event) => {
    const newValue = stringToDatePatern(event.target.value,'##/##/####');
    onChange(newValue);
  };

  return (
    <TextField
      type="text"
      value={formatDate(value)}
      onChange={handleChange}
      InputLabelProps={{
        shrink: true,
      }}
      {...others}
    />
  );
};

export default DateInput;