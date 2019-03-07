import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

    const root = getElementByID('root');
    let store;
    if (window.currentUser) {
        let preLoadedState = {
            session: {currentUser: true}
        };

        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, root);
});