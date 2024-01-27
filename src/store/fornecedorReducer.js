import * as actionTypes from './fornecedorActions';

export const initialState = {
    lista:null
}

const fornecedorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LISTA_FORNECEDOR:
            return {...state, 
                lista: action.lista
            }
        default:
            return state;
    }
}

export default fornecedorReducer;