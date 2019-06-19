import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER} from '../actions/types';


const initialState = {
    email:'',
    password:'',
    isLoggedIn: false
}

export default (state=initialState,action)=>{
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state,email:action.payload};
        case PASSWORD_CHANGED:
            return {...state,password:action.payload} 
        case LOGIN_USER:

            return {...state,isLoggedIn : true
            
            }    
            
        default:
            return state;
    }
}

