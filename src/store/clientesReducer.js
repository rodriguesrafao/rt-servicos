import * as actionTypes from './clientesActions';

export const initialState = {
    lista:null
}

const clientesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LISTA_CLIENTES:
            return {...state, 
                lista: action.lista
            }
        default:
            return state;
    }
}

export default clientesReducer;