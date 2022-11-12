import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(
      promiseMiddleware,
      logger,
    ),
  );

  const persistor = persistStore(store);
  return { store, persistor };
};
