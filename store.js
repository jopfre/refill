import { createStore, combineReducers,  applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { reducer as formReducer } from 'redux-form'

import markerReducer from './reducers/markerReducer';
import rootSaga from './sagas';
	
const reducers = {
 	marker: markerReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
 	applyMiddleware(sagaMiddleware)  
);

sagaMiddleware.run(rootSaga);

export default store;

