import React from 'react';
import HeaderContainer from './header/header_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_container';
import SignUpFormContainer from './session_form/signup_container';
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute} from '../util/route_utils';
import Splash from './splash/splash';

export default () => {
    return (
        <div>
            <HeaderContainer/>
            <h1>React Is Working!!!</h1>

            <Route exact path='/' component={Splash} />
            <AuthRoute path='/login' component={LoginFormContainer}/>
            <AuthRoute path='/signup' component={SignUpFormContainer}/>
            <ProtectedRoute path='/home' component={HomeContainer} />
        </div>
    )
};