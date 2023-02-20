import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/rootReducers';
import reducers from '../stores/reducers';
import rootSagas from '../sagas/rootSagas';
import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const sagaMiddleware = createSagaMiddleware();
const middleware = [];
middleware.push(sagaMiddleware);

const pConfig = {
  key: 'root',
  AsyncStorage,
  blacklist: ['homeReducer'],
  debug: false,
};
const initialState = {};

// const reducers = persistCombineReducers(pConfig, rootReducers);
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };
const persistor = persistStore(store, persistConfig, () => {
  // console.log('debug persistStore callback');
});

sagaMiddleware.run(rootSagas);

const configureStore = () => {
  return { persistor, store };
};
export default configureStore;