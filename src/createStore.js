import { configureStore } from '@reduxjs/toolkit'
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

export const store = configureStore({
    reducer: RootReducer,
    middleware: [ReduxThunk],
})