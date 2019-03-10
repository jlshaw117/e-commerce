import React from 'react';
import HeaderContainer from './header/header_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_container';
import SignUpFormContainer from './session_form/signup_container';

export default () => {
    return (
        <div>
            <HeaderContainer/>
            <h1>React Is Working!!!</h1>

            <Route exact path='/login' component={LoginFormContainer}/>
            <Route exact path='/signup' component={SignUpFormContainer}/>
        </div>
    )
};