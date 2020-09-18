// https://www.youtube.com/watch?v=Fb-bDigImpw

import { createStore } from 'redux'
import allReducer from '../reducers'
import { persistStore } from 'redux-persist';


const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };