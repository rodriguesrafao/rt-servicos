import * as actionTypes from './comprasActions';

export const initialState = {
    lista:null
}

const comprasReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LISTA_COMPRAS:
            return {...state, 
                lista: action.lista
            }
        default:
            return state;
    }
}

export default comprasReducer;