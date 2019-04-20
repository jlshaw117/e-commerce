import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {login, signup, logout} from './util/session_api_util';
import {login, signup, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    
    const root = document.getElementById('inner-wrapper');
    let store;
    if (window.currentUser) {
        let preLoadedState = {
            session: {currentUser: window.currentUser}
        };

        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={ store }/>, root);
    // Testing Begin
        window.login = login;
        window.logout = logout;
        window.signup = signup;
        window.getState = store.getState;
        window.dispatch = store.dispatch;
    //Testing End
});