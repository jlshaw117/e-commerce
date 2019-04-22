import * as SessionAPIUtil from '../util/session_api_util';

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
    .then(user => dispatch(recieveUser(user)),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
    .then(user => dispatch(recieveUser(user)),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
    .then(() => dispatch(logoutUser()),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

export const RECIEVE_USER = 'RECIEVE_USER';
export const RECIEVE_SESSION_ERRORS = 'RECIEVE_SESSION_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const clearErrors = () => {

    return ({
        type: RECIEVE_SESSION_ERRORS,
        errors: []
    });
};

const recieveUser = (user) => {

    return ({
        type: RECIEVE_USER,
        user: user
    });
};

export const recieveErrors = (errors) => {

    return ({
        type: RECIEVE_SESSION_ERRORS,
        errors: errors
    });
};

const logoutUser = () => {

    return ({
        type: LOGOUT_USER
    });
};