import {
    FETCHING_LIBRARY_DATA,
    FETCHING_LIBRARY_DATA_SUCCESS,
    FETCHING_LIBRARY_DATA_FAIL,
    SELECT_LIBRARY_ITEM ,
    DESELECT_LIBRARY_ITEM}  from  '../actions/types';


initialState = {
    libraryData:[],
    isFetching:false,
    errorMsg:'',
    selectedId:null
}


const libraryReducer =(state=initialState,action)=>{
    switch (action.type) {
        case FETCHING_LIBRARY_DATA:
            return{
                ...state,isFetching:true
            }
            
        case FETCHING_LIBRARY_DATA_SUCCESS:
            return{...state,isFetching:false,libraryData:action.payload}    
        case FETCHING_LIBRARY_DATA_FAIL:
            return{...state,isFetching:false,errorMsg:action.payload}   
            
        case SELECT_LIBRARY_ITEM:
            return {...state,selectedId:action.payload}    
        default:
            return state;
}
}


export default libraryReducer ;