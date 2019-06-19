
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';


import thunk from 'redux-thunk';



import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; 

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {

  key: 'root',
  
  stateReconciler: autoMergeLevel2,
  
  storage,
  
  whitelist: ['auth'], 
  
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);

  const configStore = async () => {

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);


  return { persistor, store };

  };

  export default configStore;