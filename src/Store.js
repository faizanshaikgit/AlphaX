import {configureStore} from '@reduxjs/toolkit';
import userLoginReducer from './slices/Userslice'

export const store=configureStore({
    reducer:{
        userData:userLoginReducer
    }
})