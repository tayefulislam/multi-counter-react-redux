import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../rootReducer';
// import counterReducer from './counter/counterReducer';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';


const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
