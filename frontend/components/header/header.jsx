import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

   render () {

        const sessionLinks = () => {
            
            return (
                <ul>
                    <li><Link to='login'>Login</Link></li>
                    <li><Link to='signup'>Signup</Link></li>
                </ul>
            )
        };

        const welcomeLinks = () => {

            return (
                <span>Welcome {this.props.currentUser.f_name}</span>
            )
        };

        return (
            <header>
                <div className='logo-link'>
                    <Link to='/'>Side Hustle</Link>
                </div>
                <nav>
                    {this.props.currentUser ? welcomeLinks() : sessionLinks()}
                </nav>
            </header>
        )
   }
}

export default Header;