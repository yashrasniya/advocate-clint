import { actionTypes } from "../constants/actionTypes";

export const userActions = (user) =>{
    return{
        type:actionTypes.SIGNUP,
        payload:user
    }
}