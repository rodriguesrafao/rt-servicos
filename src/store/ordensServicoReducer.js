import * as actionTypes from './ordensServicoActions';

export const initialState = {
    listaStatus:null
}

const ordenServicoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LISTA_STATUS_OS:
            return {...state, 
                listaStatus: action.listaStatus
            }
        default:
            return state;
    }
}

export default ordenServicoReducer;