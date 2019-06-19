import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER} from './types';

export const emailChanged = (text) =>{
    return{
        type:EMAIL_CHANGED,
        payload:text
    }
}


export const passwordChanged = (text) =>{
    return{
        type:PASSWORD_CHANGED,
        payload:text
    }
}

export const loginUser = () => ({

    type: LOGIN_USER,
    
    })