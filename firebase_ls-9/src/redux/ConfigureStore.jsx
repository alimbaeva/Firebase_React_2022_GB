import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from './reducer/Reducer';
import { createLogger } from 'redux-logger/src';


const logger = createLogger({
    collapsed: true,
    diff: true
})


export const store = createStore(Reducer, applyMiddleware(thunk, logger))