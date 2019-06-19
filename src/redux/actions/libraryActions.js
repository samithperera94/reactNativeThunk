import {
    FETCHING_LIBRARY_DATA,
    FETCHING_LIBRARY_DATA_SUCCESS,
    FETCHING_LIBRARY_DATA_FAIL,
    SELECT_LIBRARY_ITEM ,
    DESELECT_LIBRARY_ITEM}  from  './types';




export const selectLibrary =libraryId=>(
    {
    
        type:SELECT_LIBRARY_ITEM,
        payload:libraryId
    
})



export const fetchingDataRequest =()=>({
    
        type:FETCHING_LIBRARY_DATA
    
})

export const fetchingSuccess =json=>(
    {
    
        type:FETCHING_LIBRARY_DATA_SUCCESS,
        payload:json
    
})


export const fetchingFail =(error)=>({
    
        type:FETCHING_LIBRARY_DATA_FAIL,
        payload:error
    
})



export const fetchData = () =>{
    return async dispatch =>{
        dispatch(fetchingDataRequest());
        try{
            let response = await fetch('https://raw.githubusercontent.com/samithperera94/mobileData/master/data.json');
            let json = await response.json();
            dispatch(fetchingSuccess(json));
            
        }catch(error){
            dispatch(fetchingFail(error));
        }
    }
} 





