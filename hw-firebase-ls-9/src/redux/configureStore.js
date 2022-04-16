
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { createLogger } from 'redux-logger/src';



const logger = createLogger({
    collapsed: true,
    diff: true
})

export const store = createStore(authReducer, applyMiddleware(thunk, logger));