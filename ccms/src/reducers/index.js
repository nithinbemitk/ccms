import loggedReducer from './isLoggedin'
import navigationReducer from './navigation'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['isLogged']
}

const allReducer = combineReducers({
    isLogged: loggedReducer,
    navigation: navigationReducer
});

// export default allReducer;

export default persistReducer(persistConfig, persistReducer);