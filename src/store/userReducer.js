import * as actionTypes from './userActions';

export const initialState = {
    uid:null,
    nome:null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_UUID:
            return {...state, 
                uid: action.uid
            }
        case actionTypes.SET_USER:
            return {...
                action.user
            }
        default:
            return state;
    }
}

export default userReducer;