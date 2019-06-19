import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';

import loginReducer from './loginReducer';

export default combineReducers({
    library : libraryReducer,
    
    auth : loginReducer
    
})


