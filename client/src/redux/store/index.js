import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import blogReducer from '../blogSlice/index'
import cartReducer from '../cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  version:1,
  
}
const reducer = combineReducers({
  blog: blogReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
 
})

export const persistor = persistStore(store)
