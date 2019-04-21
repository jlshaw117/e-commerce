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
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><button onClick={this.props.logout}>Logout</button></li>
                </ul>
            )
        };

        return (
            <header>
                <div className='header-inner-wrapper'>
                    <div className='logo-link'>
                        <Link to='/'>Side Hustle</Link>
                    </div>
                    <nav>
                        {this.props.currentUser ? welcomeLinks() : sessionLinks()}
                    </nav>
                </div>
            </header>
        )
   }
}

export default Header;