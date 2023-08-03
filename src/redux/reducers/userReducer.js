import { actionTypes } from "../constants/actionTypes";

const initialState = {};

export const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.SIGNUP:
            return {payload:action.payload}
            default :
            return state;
    }
}