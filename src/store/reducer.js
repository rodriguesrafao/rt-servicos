import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';
import comprasReducer from './comprasReducer';
import clientesReducer from './clientesReducer';
import fornecedorReducer from './fornecedorReducer';
import produtosReducer from './produtosReducer';
import ordenServicoReducer from './ordensServicoReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  fornecedores: fornecedorReducer,
  produtos: produtosReducer,
  ordens: ordenServicoReducer,
  user: userReducer,
  compras: comprasReducer,
  clientes: clientesReducer,
});

export default reducer;
