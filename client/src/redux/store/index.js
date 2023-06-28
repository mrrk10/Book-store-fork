import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import blogReducer from '../blogSlice/index'
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  version:1,
  
}

const persistedReducer = persistReducer(persistConfig, blogReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger]
 
})

export const persistor = persistStore(store)
