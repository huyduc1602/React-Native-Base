import { combineReducers } from 'redux';
import countReducer from './countReducer';
import loginReducer from './loginReducer';

// const rootReducers = combineReducers({ count: countReducer });
const rootReducers = combineReducers({ loginReducer: loginReducer });

export default rootReducers;