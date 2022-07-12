import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './ReduxToolKit/Store/counterSlice'
import authReducer from './ReduxToolKit/Store/authSlice'
import crudReducer from './CrudWithReduxToolkit/features/crudSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        auth : authReducer,
        crud : crudReducer,
    }
})