import * as actionTypes from './produtosActions';

export const initialState = {
    lista:null,
    listaEstoque:null,
    listaEstoquePreco:null
}

const produtosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LISTA_PRODUTOS:
            return {...state, 
                lista: action.lista
            }
        case actionTypes.SET_LISTA_PRODUTOS_ESTOQUE:
            return {...state, 
                listaEstoque: action.lista
            }
        case actionTypes.SET_LISTA_PRODUTOS_ESTOQUE_PRECO:
            return {...state, 
                listaEstoquePreco: action.lista
            }
        default:
            return state;
    }
}

export default produtosReducer;