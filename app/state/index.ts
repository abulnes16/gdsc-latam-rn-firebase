import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducers from './reducers';
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers(appReducers);

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export default store;
