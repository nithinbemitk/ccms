export const ACTION_TYPE_DASHBOARD = 'NAV_DASHBOARD'
export const ACTION_TYPE_COACHING = 'NAV_COACHING'
export const ACTION_TYPE_LOGIN = 'SIGN_IN'


export const setLoggedUser = (actionType) => {
    return {
        type: actionType
    }
}

export const setNavigation = (actionType) => {
    return {
        type: actionType
    }
}