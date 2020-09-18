import { ACTION_TYPE_DASHBOARD, ACTION_TYPE_COACHING } from '../actions'

const initialState = {
    title: "Dashboard"
}

const NavigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_DASHBOARD: return {
            title: "Dashboard"
        }
        case ACTION_TYPE_COACHING: return {
            title: "Coaching"
        }
        default:
            return state;
    }
};

export default NavigationReducer