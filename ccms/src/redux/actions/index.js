export const ACTION_TYPE_DASHBOARD = 'NAV_DASHBOARD'
export const ACTION_TYPE_COACHING = 'NAV_COACHING'

export const loggedIn = () => {
    return {
        type: 'SIGN_IN'
    };
};

export const setNavigation = (actionType) => {
    return {
        type: actionType
    }
}