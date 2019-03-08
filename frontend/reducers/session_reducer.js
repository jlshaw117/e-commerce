import { merge } from 'lodash';
import { RECIEVE_USER, LOGOUT_USER} from '../actions/session_actions';

export default (state = {currentUser: null}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECIEVE_USER:
            newState.currentUser = action.user;
            return newState;
        case LOGOUT_USER:
            newState.currentUser = null;
            return newState;
        default:
            return state;
    }
};