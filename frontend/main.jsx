import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    
    const root = document.getElementById('root');
    let store;
    // if (window.currentUser) {
    //     let preLoadedState = {
    //         session: {currentUser: true}
    //     };

    //     store = configureStore(preLoadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }

    // ReactDOM.render(<Root store={store}/>, root);
    ReactDOM.render(<h1>Testing</h1>, root);
    // Testing Begin
        window.login = login;
        window.logout = logout;
        window.signup = signup;
    //Testing End
});