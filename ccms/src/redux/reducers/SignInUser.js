import { ACTION_TYPE_LOGIN } from '../actions'


const initialState = {
    isLogged: false,
    role: 1
}

const SignInUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_LOGIN: {
            return {
                ...state,
                isLogged: !state.isLogged,
                role: action.payload
            }
        }
        default:
            return state;
    }
};

export default SignInUserReducer