import actions from './actions';

const appReducer = (state, action) => {
    const newState = {...state};
    switch (action.type) {
        case actions.SIGN_IN:
            newState.user = action.payload;
            break;
        case actions.SIGN_OUT:
            delete newState["user"];
            break;
        default:
            break;
    }

    return newState;
}

export default appReducer;