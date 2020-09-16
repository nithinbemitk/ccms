const initialState = {
    currentTitle: "Dashboard"
  };

const NavigationTitleReducer = (state = initialState.currentTitle, action) => {
    switch (action.type) {
        case 'NAV_TITLE':
            return {
                currentTitle: action.currentTitle
            } 
        default:
            return state;
    }
};

export default NavigationTitleReducer