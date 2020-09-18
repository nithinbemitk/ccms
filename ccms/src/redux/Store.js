// https://github.com/rt2zz/redux-persist

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// root reducer
import allReducer from '../reducers'

const config = {
    key: 'ccms',
    storage: storage,
}

// create persist reducer
const persistedReducer = persistReducer(config, allReducer)

// create store uring persist reducer
/* eslint-disable */
const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// persist the store
const persistor = persistStore(store);

export { store, persistor };