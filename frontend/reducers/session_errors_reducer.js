import { RECIEVE_SESSION_ERRORS, RECIEVE_USER} from '../actions/session_actions';

export default (state, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_SESSION_ERRORS:
            return action.errors;
        case RECIEVE_USER:
            return [];
        default:
            return state;
    }
};

