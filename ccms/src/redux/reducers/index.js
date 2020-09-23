import navigationReducer from './navigation'
import SignInReducer from './SignInUser'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    navigation: navigationReducer,
    signIn: SignInReducer
});

export default allReducer;